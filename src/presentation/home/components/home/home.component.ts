import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { IAuthViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  constructor(private jwtHelper: JwtHelperService, private _router: Router, private _authUseCase: AuthUseCase) { }
  // isUserAuthenticated = (): boolean => {
  //   return false
  // }
  isUserAuthenticated = (): boolean => {
    //const token = window.sessionStorage.getItem("access_token");
    const token = this._authUseCase.getUserStorage();
    // console.log('token',token);
    // console.log('isTokenExpired', this.jwtHelper.isTokenExpired(token?.accessToken!));
    if (token && !this.jwtHelper.isTokenExpired(token?.accessToken!)) {
      // console.log('entra logeado token');
       return true;
    }
    return false;
  }
  logout = () => {
    this._authUseCase.cleanUserStorage();
    // sessionStorage.removeItem("access_token");
    this.refirectToPages('login');
  }

  refirectToPages(value: string): void {
    this._router.navigate(['/' + value]);
  }


  accion=()=>{
    const aaa: IAuthViewModel = {ci: '1722039953', password: '12345Abc'};
    // userId: number | null;
    // firstName: string | null;
    // accessToken: string | null;
    // refreshToken: string | null;
    this._authUseCase.register({ ci: '1722039953', names: '12345Abc', lastNames: '12345Abc', email: '12345Abc', password: '12345Abc', confirmPassword: '12345Abc', licenseAgreement: false, isProfesional: false, isClinic:false }).then(obs => {

      //this._authUseCase.refreshToken(session).then(obs => {
        obs.subscribe({
          next: data => {
     // obs.subscribe((result) => {
            console.log("entra accion....", data);
          }
      });
    });
  }
}


