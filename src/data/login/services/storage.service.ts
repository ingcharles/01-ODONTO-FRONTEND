import { Injectable } from '@angular/core';
import { EventBusService } from 'src/base/events/event-bus.service';
import { EventData } from 'src/base/events/event.class';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUserStorage(user: any): void {
    console.log("JSON.stringify(user)", JSON.stringify(user))
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUserStorage(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      console.log("JSON.parse(user)", JSON.parse(user))
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }


}
