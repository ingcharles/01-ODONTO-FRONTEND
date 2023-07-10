import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,

} from '@angular/router';
import { Observable } from "rxjs";

import { StorageService } from '../../../../data/login/services/storage.service';
export class UserToken { }
@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class Permissions {
  constructor(private storageService: StorageService, private router: Router) { }
  canActivate(currentUser: UserToken, id: string): boolean {

    if (!this.storageService.isLoggedIn()) {
      console.log("Please Log In!");
      //this.toastr.info('Please Log In!');
      this.router.navigate(['/login']);
      return false;
    }
    // logged in, so return true
    this.storageService.isLoggedIn();
    return true;
    // return true;
  }
}

@Injectable(
//   {
//   providedIn: 'root'
// }
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
