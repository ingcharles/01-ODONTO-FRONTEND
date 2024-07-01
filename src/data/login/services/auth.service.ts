import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthMapper } from '../mappers/auth.mapper';
import { StatusResponseService } from 'src/data/base/status-response.service';
import { AAuthService } from 'src/domain/login/services/a-auth-service';
import { IAuthFromRsViewModel, IAuthTokenRsViewModel, IAuthViewModel, IForgotPasswordFromRsViewModel, IForgotPasswordViewModel, IRegisterFromRsViewModel, IRegisterViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { IAplicacionFromRsViewModel, IAplicacionMenuRsViewModel, IAplicacionRsViewModel } from 'src/domain/login/viewModels/i-aplicaciones.viewModel';
import { IMenuFromRsViewModel } from 'src/domain/login/viewModels/i-menu.viewModel';


//const AUTH_API = 'http://localhost:8080/api/auth/';
const apiUrl: string = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AAuthService {
  constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService, private _authMapper: AuthMapper) {
    super();
  }
  //public getCrcaNumerarioByCod(body: { codigoCrca: number }): Observable<ICrcaNumerarioRSViewModel> {

  // public async saveCrcaNumerario(crcaNumerario: ICrcaFormViewModel): Promise<Observable<IResponseStatusViewModel>> {
  public async login(userLogin: IAuthViewModel): Promise<Observable<IAuthFromRsViewModel>> {
    const url = `${apiUrl}Auth/GetUserByCiPas`;
    return this._http.post<any>(url, await this._authMapper.mapLoginTo(userLogin)).pipe(
      map((result) => {
        return this._authMapper.mapLoginFrom(result)
      }),
      catchError((error) => {
        console.log("error", error);
        return of(this._statusResponseService.error(error));
      })
    );
  }

  public async refreshToken(sessionToken: IAuthTokenRsViewModel): Promise<Observable<IAuthFromRsViewModel>> {
    // console.log("refreshTokken 0");
    const url = `${apiUrl}Auth/RefreshToken`;
    return this._http.post<any>(url, await this._authMapper.mapRefreshTokenTo(sessionToken)).pipe(
      map((result) => {
        // console.log("result", result);
        // console.log("this._authMapper.mapRefreshTokenFrom(result)", this._authMapper.mapRefreshTokenFrom(result));
        return this._authMapper.mapRefreshTokenFrom(result)
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }


  public async register(userLogin: IRegisterViewModel): Promise<Observable<IRegisterFromRsViewModel>> {
    const url = `${apiUrl}Auth/SaveRegisterUser`;
    return this._http.post<any>(url, await this._authMapper.mapRegisterTo(userLogin)).pipe(
      map((result) => {
        return this._authMapper.mapRegisterFrom(result)
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }

  public async forgotPassword(userLogin: IForgotPasswordViewModel): Promise<Observable<IForgotPasswordFromRsViewModel>> {
    const url = `${apiUrl}Auth/UpdateForgotPasswordUser`;
    return this._http.post<any>(url, await this._authMapper.mapForgotPasswordTo(userLogin)).pipe(
      map((result) => {
        return this._authMapper.mapForgotPasswordFrom(result)
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }


  public async aplicacion(usuario: IAuthViewModel): Promise<Observable<IAplicacionFromRsViewModel>> {
    const url = `${apiUrl}Auth/GetAplicationByCodUser`;
    return this._http.post<any>(url, await this._authMapper.mapAplicacionTo(usuario)).pipe(
      map((result) => {
        return this._authMapper.mapAplicacionFrom(result)
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }

  // public getCrcaNumerarioByCod(body: { codigoCrca: number }): Observable<ICrcaNumerarioRSViewModel> {
  //   const url = `${this.apiUrl}Crca/GetCrcaNumerarioByCod`;
  //   return this._http.post<any>(url, body).pipe(
  //     map((result) => {

  //       return this._crcaMapper.mapCrcaNumerarioFrom(result)
  //     }),
  //     catchError((error) => {
  //       return of(this._statusResponseService.error(error));
  //     })
  //   );
  // }
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

  public async menu(usuario: IAplicacionMenuRsViewModel): Promise<Observable<IMenuFromRsViewModel>> {
    const url = `${apiUrl}Auth/GetMenuByCodAplicacion`;
    return this._http.post<any>(url, await this._authMapper.mapMenuTo(usuario)).pipe(
      map((result) => {
        return this._authMapper.mapMenuFrom(result)
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }
}
