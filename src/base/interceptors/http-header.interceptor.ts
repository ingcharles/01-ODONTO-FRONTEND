import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { IAuthTokenRsViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpHeaderInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  constructor(private _authUseCase: AuthUseCase, private _jwtHelper: JwtHelperService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${localStorage.getItem('token')}`
  //   });

  //   const reqClone = req.clone({
  //     headers
  //   });

  //   return next.handle(reqClone);
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req = req.clone({
    //    withCredentials: true,

    // });
    console.log(`entra HttpHeaderInterceptorProvider ${JSON.stringify(req.body)}`);
    let session = this._authUseCase.getUserStorage();
    req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${session!.accessToken}`) });
    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this._authUseCase.isLoggedIn()) {

        // return this._authUseCase.refreshToken(session!).pipe(
        //   switchMap(() => {
        //     this.isRefreshing = false;

        //     return next.handle(request);
        //   }),
        //   catchError((error) => {
        //     this.isRefreshing = false;

        //     if (error.status == '403') {
        //       this.eventBusService.emit(new EventData('logout', null));
        //     }

        //     return throwError(() => error);
        //   })
        // );
        let session = this._authUseCase.getUserStorage();
        this._authUseCase.refreshToken(session!).then(obs => {
          obs.subscribe((data) => {
            //next: data => {
            //obs.subscribe((result) => {
            console.log("data", data);
            console.info('Tokens renewed, we will save them into the local storage');
            const dataToken: IAuthTokenRsViewModel = {
              accessToken: data.token!.accessToken || '',
              refreshToken: data.token!.refreshToken || '',
              firstName: data.token!.firstName || '',
              userId: data.token!.userId || 0,
            };

            this._authUseCase.saveUserStorage(dataToken);
            this.isRefreshing = false;
            //this.isRefreshingToken = true;
          }
            //complete=> { this.isRefreshingToken = false }
            //);
          );
        }).catch(e => {
          this.isRefreshing = false;
        });;
      }
    }

    return next.handle(request);
  }
}

export const HttpHeaderInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true };
