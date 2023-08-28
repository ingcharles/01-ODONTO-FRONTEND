import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';
import { IAplicacionRsViewModel } from 'src/domain/login/viewModels/i-aplicaciones.viewModel';
import { IAuthViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { Globals } from 'src/presentation/base/services/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  constructor(private jwtHelper: JwtHelperService, private _router: Router, private _authUseCase: AuthUseCase, private _storageUseCase: StorageUseCase, private _globals: Globals) { }
  // isUserAuthenticated = (): boolean => {
  //   return false
  // }

  aplicacion: IAplicacionRsViewModel[] = [];

  isUserAuthenticated = (): boolean => {
    //const token = window.sessionStorage.getItem("access_token");
    const token = this._storageUseCase.getUserStorage();
    // console.log('token',token);
    // console.log('isTokenExpired', this.jwtHelper.isTokenExpired(token?.accessToken!));
    if (token && !this.jwtHelper.isTokenExpired(token?.accessToken!)) {
      // console.log('entra logeado token');
      return true;
    }
    return false;
  }
  logout = () => {
    this._storageUseCase.cleanUserStorage();
    // sessionStorage.removeItem("access_token");
    this._globals.refirectToPages('login');
  }




  accion = () => {
    const aaa: IAuthViewModel = { ci: '1722039953', password: '12345Abc' };
    // userId: number | null;
    // firstName: string | null;
    // accessToken: string | null;
    // refreshToken: string | null;
    this._authUseCase.register({ ci: '1722039953', names: '12345Abc', lastNames: '12345Abc', email: '12345Abc', password: '12345Abc', confirmPassword: '12345Abc', licenseAgreement: false, isProfesional: false, isClinic: false }).then(obs => {

      //this._authUseCase.refreshToken(session).then(obs => {
      obs.subscribe({
        next: data => {
          // obs.subscribe((result) => {
          console.log("entra register....", data);
        }
      });
    });
  }


  ngOnInit(): void {
    // console.log("this._authUseCase.isLoggedIn()", this._authUseCase.isLoggedIn());
    if (this._storageUseCase.isLoggedIn()) {

      const userData = this._storageUseCase.getUserStorage();
      console.log("userData!.userId", userData!.userId)
      this._authUseCase.aplicacion({ codigoUsuario: userData!.userId }).then(obs => {
        //this._loaderService.display(true);
        obs.subscribe((resultAplicacion) => {

          //this._loaderService.display(false);
          // console.log("result",result);
          if (resultAplicacion.ok) {
            this.aplicacion = resultAplicacion.data!;
            console.log("resultAplicacion", resultAplicacion);
          }
        })
      });
      // this.isLoggedIn = true;
      // // this.roles = this._authUseCase.getUser().roles;
      // this.refirectToPages('');
    }
  }
}


