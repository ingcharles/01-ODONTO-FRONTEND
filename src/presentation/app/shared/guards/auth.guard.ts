import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,

} from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { StorageService } from "src/data/login/services/storage.service";
@Injectable(
     {
     providedIn: 'root'
   }
)
export class UserToken { }
@Injectable(
     {
     providedIn: 'root'
   }
)
export class Permissions {
  constructor(private _storageService: StorageService, private _router: Router, private _jwtHelper: JwtHelperService) { }
  canActivate(currentUser: UserToken, id: string): boolean {

  //   if (!this._storageService.isLoggedIn()) {
  //     console.log("Please Log In!");
  //     //this.toastr.info('Please Log In!');
  //     this._router.navigate(['/login']);
  //     return false;
  //   }
  //   // logged in, so return true
  //   //this._storageService.isLoggedIn();
  //   return true;
  //   // return true;
  // }
    const token = this._storageService.getUserStorage();
    if (this._storageService.isLoggedIn() && !this._jwtHelper.isTokenExpired(token?.accessToken!)) {
      return true;
    }
    this._router.navigate(["login"]);
    return false;
}
}

@Injectable(
  {
   providedIn: 'root'
 }
)
export class AuthGuard {
  constructor(private permissions: Permissions, private currentUser: UserToken) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.permissions.canActivate(this.currentUser, route.params["id"]);
  }
}
