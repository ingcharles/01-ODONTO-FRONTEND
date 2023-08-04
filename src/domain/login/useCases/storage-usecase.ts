
import { Injectable } from "@angular/core";
import { StorageService } from "src/data/login/services/storage.service";
import { IAuthTokenRsViewModel } from "../viewModels/i-auth.viewModel";

@Injectable({ providedIn: 'root' })
export class StorageUseCase {

  constructor(private _storageService: StorageService) { }

  // public async login(user: IAuthViewModel): Promise<Observable<IAuthFromRsViewModel>>  {
  //   return await this._authService.login(user);
  // }

  // public async refreshToken(sessionToken: IAuthTokenRsViewModel): Promise<Observable<IAuthFromRsViewModel>> {
  //   return await this._authService.refreshToken(sessionToken);
  // }

  // public async register(user: IRegisterViewModel): Promise<Observable<IRegisterFromRsViewModel>>  {
  //   return await this._authService.register(user);
  // }

  // public async forgotPassword(user: IForgotPasswordViewModel): Promise<Observable<IRegisterFromRsViewModel>> {
  //   return await this._authService.forgotPassword(user);
  // }

  public async saveUserStorage(user: IAuthTokenRsViewModel): Promise<void> {
    return this._storageService.saveUserStorage(user);
  }

  public getUserStorage(): IAuthTokenRsViewModel | null {
    return this._storageService.getUserStorage();
  }
  public isLoggedIn(): any {
    return this._storageService.isLoggedIn();
  }
  public cleanUserStorage(): any {
    return this._storageService.cleanUserStorage();
  }

}
