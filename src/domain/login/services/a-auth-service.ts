import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";
import { Observable } from "rxjs";
import { IAuthFromRsViewModel, IAuthTokenRsViewModel, IAuthViewModel,   } from "../viewModels/i-auth.viewModel";


export abstract class AAuthService {
  public abstract login(userLogin: IAuthViewModel): Promise<Observable<IAuthFromRsViewModel>>
  public abstract refreshToken(sessionToken: IAuthTokenRsViewModel): Promise<Observable<IAuthFromRsViewModel>>
}
// Observable<ICrcaEspecieRSViewModel | IResponseStatusViewModel>;
