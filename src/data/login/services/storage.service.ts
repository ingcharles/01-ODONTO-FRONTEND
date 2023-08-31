import { Injectable } from '@angular/core';

import { IAuthTokenRsViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { AuthService } from './auth.service';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const ID_USER = 'id_user';
const FIRST_NAME = 'first_name';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private _authService: AuthService) { }
  private isRefreshing = false;
  cleanUserStorage(): void {
    window.sessionStorage.clear();
  }

  public saveUserStorage(user: IAuthTokenRsViewModel): void {
    console.log("******************")
    console.log("JSON.stringify(user)------------: ", JSON.stringify(user))
    console.log("******************")
    // window.sessionStorage.removeItem(ACCESS_TOKEN);
    this.cleanUserStorage();
    // window.sessionStorage.setItem(ACCESS_TOKEN, JSON.stringify(user));
    window.sessionStorage.setItem(ACCESS_TOKEN, user.accessToken!);
    window.sessionStorage.setItem(REFRESH_TOKEN, user.refreshToken!);
    if (user.userId) {
      window.sessionStorage.setItem(ID_USER, user.userId.toString());
      window.sessionStorage.setItem(FIRST_NAME, user.firstName!);
    }
  }

  public getUserStorage(): IAuthTokenRsViewModel {

    const tokenResponse: IAuthTokenRsViewModel = {
      accessToken: sessionStorage.getItem(ACCESS_TOKEN),
      refreshToken: sessionStorage.getItem(REFRESH_TOKEN),
      firstName: sessionStorage.getItem(FIRST_NAME),
      userId: +(sessionStorage.getItem(ID_USER) || 0),
    };

    return tokenResponse;

  }

  public isLoggedIn(): boolean {

    const user = window.sessionStorage.getItem(ACCESS_TOKEN);

    if (!user) {
      return false;
    }

    if (!this.isRefreshing) {
      const token = window.sessionStorage.getItem(ACCESS_TOKEN) || '';
      const jwtToken = JSON.parse(atob(token!.split('.')[1]));
      const tokenExpired = Date.now() > (jwtToken.exp * 1000) - (30 * 1000);

      if (tokenExpired) {
        this.isRefreshing = true;

        const session: IAuthTokenRsViewModel = {
          accessToken: sessionStorage.getItem(ACCESS_TOKEN),
          refreshToken: sessionStorage.getItem(REFRESH_TOKEN),
          firstName: sessionStorage.getItem(FIRST_NAME),
          userId: +(sessionStorage.getItem(ID_USER) || 0),
        };
        this._authService.refreshToken(session!).then(obs => {
          obs.subscribe(async (data) => {

            const dataToken: IAuthTokenRsViewModel = {
              accessToken: data.token!.accessToken!,
              refreshToken: data.token!.refreshToken!,
              firstName: data.token!.firstName!,
              userId: data.token!.userId || 0,
            };

            await this.saveUserStorage(dataToken);
            // const token1 = window.sessionStorage.getItem(ACCESS_TOKEN) || '';
            // console.log("nuevo token    ", token1)
            this.isRefreshing = false;
          });
        }).catch(e => {
          console.log("entra catch");
          this.isRefreshing = false;
        });
      } else {
        console.log("Entra no tokenExpired----->");
      }
      console.log("Entra está logeado----->");
    } else {
      console.log("Entra no está logeado----->");
    }
    return true;

  }

}
