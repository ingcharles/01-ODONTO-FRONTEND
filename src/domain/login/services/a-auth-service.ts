import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";
import { Observable } from "rxjs";
import { IAuthFromRsViewModel, IAuthViewModel } from "../viewModels/i-auth.viewModel";


export abstract class AAuthService {
  public abstract login(userLogin: IAuthViewModel): Promise<Observable<IAuthFromRsViewModel>>
}
// Observable<ICrcaEspecieRSViewModel | IResponseStatusViewModel>;
