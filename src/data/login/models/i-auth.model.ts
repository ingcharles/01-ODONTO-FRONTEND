import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";
import { IResponseStatusModel } from "src/data/general/models/i-response-status.model";

export interface IAuthFromRsModel extends IResponseStatusModel {
  data?: IAuthFromModel
  token?: IAuthTokenFromModel | null;
}

export interface IAuthFromModel {
  codigoUsuario: number| null;
  nombreUsuario: string | null;

}

export interface IAuthTokenFromModel {
  userId: number | null;
  firstName: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface IAuthToModel extends IAuditoriaModel {
  ci: string | null;
  password: string | null;
}

export interface IRefreshTokenFromRsModel extends IResponseStatusModel {
  data?: IAuthFromModel
  token?: IRefreshTokenRsModel | null;
}
export interface IRefreshTokenModel extends IAuditoriaModel {
  codigoUsuario: number;
  refreshToken: string;
  // firstName: string | null;
  // accessToken: string | null;
}

export interface IRefreshTokenRsModel extends IAuditoriaModel {
  codigoUsuario: number;
  refreshToken: string;
  firstName: string | null;
  accessToken: string | null;
}
export interface IRegisterFromRsModel extends IResponseStatusModel {
  data?: IRegisterFromModel
}

export interface IRegisterFromModel {
  codigoUsuario: number;

}

export interface IRegisterToModel extends IAuditoriaModel {
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

export interface IForgotPasswordFromRsModel extends IResponseStatusModel {
  data?: IForgotPasswordFromModel
}

export interface IForgotPasswordFromModel {
  codigoUsuario: number;

}

export interface IForgotPasswordToModel extends IAuditoriaModel {

  email: string | null;

}
