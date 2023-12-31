import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, EMPTY, Observable, tap, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { IAuthTokenRsViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  isRefreshingToken: boolean = false;
  constructor(private _authUseCase: AuthUseCase, private router: Router, private _statusResponseService: StatusResponseService, private _storageUseCase: StorageUseCase/*, private _jwtHelper: JwtHelperService*/) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap(response => console.log('JSON.stringify(response)', JSON.stringify(response))),
        catchError((error: HttpErrorResponse) => {
          let session = this._storageUseCase.getUserStorage();
          // console.log(JSON.stringify(error),'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
          // console.log("error.status", error.status);
          // console.log("session", session);
          // console.log(" !this._authUseCase.isLoggedIn()", !this._storageUseCase.isLoggedIn());
          // console.log("!this.isRefreshingToken", !this.isRefreshingToken);

          // if (!this._jwtHelper.isTokenExpired(session?.accessToken!)){

          // }

          if (error.status === 401 && session != null && !this._storageUseCase.isLoggedIn() && !this.isRefreshingToken) {
            this.isRefreshingToken = true;
            console.log('Access Token is expired, we need to renew it');
            this._authUseCase.refreshToken(session).then(obs => {
              obs.subscribe((data) => {
                //next: data => {
                //obs.subscribe((result) => {
                // console.log("data", data);
                console.info('Tokens renewed, we will save them into the local storage');
                const dataToken: IAuthTokenRsViewModel = {
                  accessToken: data.token!.accessToken || '',
                  refreshToken: data.token!.refreshToken || '',
                  firstName: data.token!.firstName || '',
                  userId: data.token!.userId || 0,
                };

                this._storageUseCase.saveUserStorage(dataToken);
              },
                // error: () => { },
                // complete: () => { this.isRefreshingToken = false }
                // });
              );
            });
          } else if (error.status === 400 && error.error.errorCode === 'invalid_grant') {
            console.log('the refresh token has expired, the user must login again kkkkkkkkkkkkkkkkk');
            this._storageUseCase.cleanUserStorage();
            this.router.navigate(['login']);


          } else {
            //let errorResponse: ErrorResponse = error.error;
            console.log("error.error", !JSON.stringify(error.error));
            console.log("this._statusResponseService.error(error)", this._statusResponseService.error(error));

            return throwError(() => this._statusResponseService.error(error));
            //return throwError(() => error.error);
          }

          return EMPTY;
        })
      );
  }
}
export const ErrorInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true };
