import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUathLoginViewModel } from 'src/domain/login/viewModels/i-auth-login.viewModel';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';
import { LoginMapper } from '../mappers/login.mapper';
import { StatusResponseService } from 'src/data/base/status-response.service';
import { AAuthService } from 'src/domain/login/services/a-auth-service';

//const AUTH_API = 'http://localhost:8080/api/auth/';
const apiUrl: string = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AAuthService {
  constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService, private _loginMapper:LoginMapper) {
    super();
  }

 
  public async login(userLogin: IUathLoginViewModel): Promise<Observable<IResponseStatusViewModel>> {
    const url = `${apiUrl}uath/login`;
    return this._http.post<any>(url, await this._loginMapper.mapLoginTo(userLogin)).pipe(
        catchError((error) => {
            return of(this._statusResponseService.error(error));
        })
    );
}
  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(
  //     apiUrl + 'signin',
  //     {
  //       username,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this._http.post(
  //     apiUrl + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  // logout(): Observable<any> {
  //   return this._http.post(apiUrl + 'signout', { }, httpOptions);
  // }
}
