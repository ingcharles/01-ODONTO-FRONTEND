import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";


export interface IAuthFromRsViewModel extends IResponseStatusViewModel {
  data?: IAuthRsViewModel | null;
}

export interface IAuthRsViewModel {
   codigoUsuario: number | null;


}

export interface IAuthViewModel {
  // codigoUsuario: number | null;
  //  // password: string | null;
  ci: number | null;
  password: string | null;
}
