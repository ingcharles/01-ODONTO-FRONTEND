import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';
import { AuthMapper} from '../mappers/auth.mapper';
import { StatusResponseService } from 'src/data/base/status-response.service';
import { AAuthService } from 'src/domain/login/services/a-auth-service';
import { IAuthFromRsViewModel, IAuthViewModel, IRegisterFromRsViewModel, IRegisterViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';


//const AUTH_API = 'http://localhost:8080/api/auth/';
const apiUrl: string = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AAuthService {
  constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService, private _authMapper:AuthMapper) {
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
            return of(this._statusResponseService.error(error));
        })
    );
}

public async register(userLogin: IRegisterViewModel): Promise<Observable<IRegisterFromRsViewModel>> {
  const url = `${apiUrl}Auth/GetUserByCiPas`;
  return this._http.post<any>(url, await this._authMapper.mapRegisterTo(userLogin)).pipe(
    map((result) => {
      return this._authMapper.mapRegisterFrom(result)
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
}
