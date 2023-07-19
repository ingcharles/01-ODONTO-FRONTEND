import { AuthService } from "src/data/login/services/auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IAuthFromRsModel } from "src/data/login/models/i-auth.model";
import { IAuthFromRsViewModel, IAuthViewModel } from "../viewModels/i-auth.viewModel";
import { StorageService } from "src/data/login/services/storage.service";
import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";

@Injectable({ providedIn: 'root' })
export class AuthUseCase {

  constructor(private _authService: AuthService, private _storageService: StorageService) { }

  public async login(user: IAuthViewModel): Promise<Observable<IAuthFromRsViewModel>>  {
    return await this._authService.login(user);
  }

  public saveUserStorage(user: any): void {
    return this._storageService.saveUserStorage(user);
  }

  public getUserStorage(): any {
    return this._storageService.getUserStorage();
  }

}
