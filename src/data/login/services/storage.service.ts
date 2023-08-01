import { Injectable } from '@angular/core';
import { EventBusService } from 'src/base/events/event-bus.service';
import { EventData } from 'src/base/events/event.class';
import { IAuthTokenRsViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const ID_USER = 'id_user';
const FIRST_NAME = 'firs_name';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

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

  public getUserStorage(): IAuthTokenRsViewModel | null{
    // const user = window.sessionStorage.getItem(ACCESS_TOKEN);
    // if (user) {
    //   console.log("JSON.parse(user)", JSON.parse(user))
    //   return JSON.parse(user);
    // }


    if (sessionStorage.getItem(ACCESS_TOKEN)) {
      const tokenResponse: IAuthTokenRsViewModel = {
        accessToken: sessionStorage.getItem(ACCESS_TOKEN) || '',
        refreshToken: sessionStorage.getItem(REFRESH_TOKEN) || '',
        firstName: sessionStorage.getItem(FIRST_NAME) || '',
        userId: +(sessionStorage.getItem(ID_USER) || 0),
      };

      return tokenResponse;
    }
    return null;

    //return null;
  }

  public isLoggedIn(): boolean {
    // console.log("ACCESS_TOKEN", ACCESS_TOKEN);
    const user = window.sessionStorage.getItem(ACCESS_TOKEN);
    console.log("user", user);
    if (!user) {
      return false;
    }
    return true;



    // // check if token is expired
    // const jwtToken = JSON.parse(atob(user!.split('.')[1]));
    // // console.log("Date.now():  ", Date.now())
    // // console.log("jwtToken.exp * 1000:   ", jwtToken.exp * 1000)
    // // console.log("jwtToken.exp:   ", jwtToken.exp)
    // const tokenExpired = Date.now() > (jwtToken.exp * 1000);
    // console.log("tokenExpired   ", tokenExpired)
    // if (!tokenExpired){
    //   window.sessionStorage.removeItem(ACCESS_TOKEN);
    // }
    // return !tokenExpired;
  }


}
