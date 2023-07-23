import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";


export interface IAuthFromRsViewModel extends IResponseStatusViewModel {
  data?: IAuthRsViewModel | null;
  token?: IAuthTokenRsViewModel | null;
}

export interface IAuthRsViewModel {
   codigoUsuario: number | null;
}

export interface IAuthTokenRsViewModel {
  accessToken: string | null;
  refreshToken: string | null;
}
export interface IAuthViewModel {
  // codigoUsuario: number | null;
  //  // password: string | null;
  ci: number | null;
  password: string | null;
}


export interface IRegisterFromRsViewModel extends IResponseStatusViewModel {
  data?: IRegisterRsViewModel | null;
}

export interface IRegisterRsViewModel {
   codigoUsuario: number | null;
}

export interface IRegisterViewModel {
  ci: number | null;
  names: string | null;
  lastNames: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  licenseAgreement: boolean | null;
  isProfesional: boolean | null;
  isClinic: boolean | null;
}

export interface IForgotPasswordFromRsViewModel extends IResponseStatusViewModel {
  data?: IForgotPasswordRsViewModel | null;
}

export interface IForgotPasswordRsViewModel {
  codigoUsuario: number | null;
}

export interface IForgotPasswordViewModel {
  email: string | null;
}
