import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from 'src/data/login/services/auth.service';
import { StorageService } from 'src/data/login/services/storage.service';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { IAuthTokenRsViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpHeaderInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private isRefreshing1 = false;
  private expired = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private _authService: AuthService,private _storageService: StorageService, private _jwtHelper: JwtHelperService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${localStorage.getItem('token')}`
  //   });

  //   const reqClone = req.clone({
  //     headers
  //   });

  //   return next.handle(reqClone);
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this._storageService.isLoggedIn();
        const session = this._storageService.getUserStorage();
    let token = session?.accessToken;

  //   this.expired = this._jwtHelper.isTokenExpired(token!);
  //   if (!this.expired && !this.isRefreshing1){
  //     console.log("entra 0  EXPIRA: ",token!)
  //     this.expired = false;
  //         this.isRefreshing1 = true;
  //     this._authUseCase.refreshToken(session!).then(obs =>  {
  //           obs.subscribe(async (data) => {

  //             console.log("dat111111111a", data);
  //             console.info('Tokens renewed, we will save them into the local storage');
  //             const dataToken: IAuthTokenRsViewModel = {
  //               accessToken: data.token!.accessToken || '',
  //               refreshToken: data.token!.refreshToken || '',
  //               firstName: data.token!.firstName || '',
  //               userId: data.token!.userId || 0,
  //             };

  //             await this._authUseCase.saveUserStorage(dataToken);
  //             this.isRefreshing1 = false;
  //             token = data.token!.accessToken || '';
  //             // this.refreshTokenSubject.next(data.token!.accessToken);
  //             //console.log("entra 0",this.refreshTokenSubject)
  //             // return next.handle(this.addToken(request, data.token!.accessToken!));
  //           }

  //           );
  //         }).catch(e => {
  //           console.log("entra catch");
  //           this.isRefreshing1 = false;


  //         });

  //    }else{
  //     console.log("entra 1  EXPIRA: ",token!)
  //     this.isRefreshing1 = false;
  //    }
  //   // console.log("entra 0  accessToken: ",token!)
  //   console.log("entra intercept")
  //  // if (token) {
  //     console.log("entra token")
      request = this.addToken(request, token!);
   // }


    return next.handle(request).pipe(catchError(error => {
      console.log("entra next.handle")
      if (error instanceof HttpErrorResponse && error.status === 401) {
        console.log("entra error.status")
        return this.handle401Error(request, next);
        //return throwError(error);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }


    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    console.log("entra handle401Error",request)
    if (!this.isRefreshing) {
      console.log("entra 0")
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);


      const session = this._storageService.getUserStorage();
      console.log("entra 0--> ",session)
      this._authService.refreshToken(session!).then(obs => {
        obs.subscribe(async (data) => {

          console.log("data", data);
          console.info('Tokens renewed, we will save them into the local storage');
          const dataToken: IAuthTokenRsViewModel = {
            accessToken: data.token!.accessToken || '',
            refreshToken: data.token!.refreshToken || '',
            firstName: data.token!.firstName || '',
            userId: data.token!.userId || 0,
          };

         await this._storageService.saveUserStorage(dataToken);
          const session1 = this._storageService.getUserStorage();
          console.log("entra 1 accessToken: ",session1!)
          this.isRefreshing = false;
          this.refreshTokenSubject.next(session1!.accessToken);
          console.log("entra 0",this.refreshTokenSubject)
          return next.handle(this.addToken(request, session1!.accessToken!));
        }

        );
      }).catch(e => {
        console.log("entra catch");
        this.isRefreshing = false;


      });
      return next.handle(this.addToken(request, session?.accessToken!));
    } else {
      console.log("entra 1",this.refreshTokenSubject)
      // return this.refreshTokenSubject.pipe(
      //   filter(token => {console.log("entra 1",token); return token != null}),
      //   take(1),
      //   switchMap(jwt => {
      //     console.log("entra 1.1")
      //     return next.handle(this.addToken(request, jwt));
      //   }));

      return this.refreshTokenSubject.pipe(
        filter((is) => !is),
        take(1),
        switchMap(() => {
          const accessToken = this._storageService.getUserStorage();
          return next.handle(this.addToken(request, accessToken?.accessToken!));
        })
      );
    }
  }


}

export const HttpHeaderInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true };
