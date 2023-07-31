import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor(private _authUseCase: AuthUseCase) { }

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
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer '
    // });

    // const reqClone = req.clone({
    //   headers
    // });

    // return next.handle(reqClone);
    const requestForApis = request.url.startsWith(environment.apiUrl);
    const isLoggedIn = this._authUseCase.isLoggedIn();


    console.log(`HttpHeaderInterceptorProvider ${JSON.stringify(request.body)}`);
    if (isLoggedIn && requestForApis) {
      let session = this._authUseCase.getUserStorage();
      if (session) {
        request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${session.accessToken}`) });
      }

    }
    console.log(`request ${JSON.stringify(request)}`);
    return next.handle(request);
  }


}
export const HttpHeaderInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true };

