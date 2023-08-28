import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";
import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";


export interface IAuthFromRsViewModel extends IResponseStatusViewModel {
  data?: IAuthRsViewModel | null;
  token?: IAuthTokenRsViewModel | null;
}

export interface IAuthRsViewModel {
  codigoUsuario: number | null;
  nombreUsuario: string | null;
}

export interface IAuthTokenRsViewModel {
  userId: number | null;
  firstName: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}
export interface IAuthViewModel {
  // codigoUsuario: number | null;
  //  // password: string | null;
  codigoUsuario?: number | null;
  ci?: string | null;
  password?: string | null;
}

export interface IRefreshTokenFromRsViewModel extends IResponseStatusViewModel {
  data?: IAuthRsViewModel | null;
  token?: IAuthTokenRsViewModel | null;
}

// export interface IRefreshTokenViewModel {
//   userId: number;
//   refreshToken: string;

// }


export interface IRegisterFromRsViewModel extends IResponseStatusViewModel {
  data?: IRegisterRsViewModel | null;
}

export interface IRegisterRsViewModel {
  codigoUsuario: number | null;
}

export interface IRegisterViewModel {
  ci: string | null;
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
