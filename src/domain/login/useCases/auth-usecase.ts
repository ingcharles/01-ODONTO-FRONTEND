import { AuthService } from "src/data/login/services/auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IAuthFromRsModel } from "src/data/login/models/i-auth.model";
import { IAuthFromRsViewModel, IAuthTokenRsViewModel, IAuthViewModel, IForgotPasswordViewModel, IRegisterFromRsViewModel, IRegisterViewModel } from "../viewModels/i-auth.viewModel";
import { StorageService } from "src/data/login/services/storage.service";
import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";
import { IAplicacionFromRsViewModel } from "../viewModels/i-aplicaciones.viewModel";

@Injectable({ providedIn: 'root' })
export class AuthUseCase {

  constructor(private _authService: AuthService) { }

  public async login(user: IAuthViewModel): Promise<Observable<IAuthFromRsViewModel>> {
    return await this._authService.login(user);
  }

  public async refreshToken(sessionToken: IAuthTokenRsViewModel): Promise<Observable<IAuthFromRsViewModel>> {
    return await this._authService.refreshToken(sessionToken);
  }

  public async register(user: IRegisterViewModel): Promise<Observable<IRegisterFromRsViewModel>> {
    return await this._authService.register(user);
  }

  public async forgotPassword(user: IForgotPasswordViewModel): Promise<Observable<IRegisterFromRsViewModel>> {
    return await this._authService.forgotPassword(user);
  }

  public async aplicacion(aplicacion: IAuthViewModel): Promise<Observable<IAplicacionFromRsViewModel>> {
    return await this._authService.aplicacion(aplicacion);
  }

  // public async saveUserStorage(user: IAuthTokenRsViewModel): Promise<void> {
  //   return this._storageService.saveUserStorage(user);
  // }

  // public getUserStorage(): IAuthTokenRsViewModel | null {
  //   return this._storageService.getUserStorage();
  // }
  // public isLoggedIn(): any {
  //   return this._storageService.isLoggedIn();
  // }
  // public cleanUserStorage(): any {
  //   return this._storageService.cleanUserStorage();
  // }

}
