import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";
import { IUathLoginViewModel } from "../viewModels/i-auth-login.viewModel";
import { Observable } from "rxjs";

export abstract class AAuthService {
    public abstract login(userLogin: IUathLoginViewModel): Promise<Observable<IResponseStatusViewModel>>
}