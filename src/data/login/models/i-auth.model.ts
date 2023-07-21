import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";
import { IResponseStatusModel } from "src/data/general/models/i-response-status.model";

export interface IAuthFromRsModel extends IResponseStatusModel {
  data?: IAuthFromModel
}

export interface IAuthFromModel {
  codigoUsuario: number;

}


export interface IAuthToModel extends IAuditoriaModel {
  ci: number | null;
  password: string | null;
}


export interface IRegisterFromRsModel extends IResponseStatusModel {
  data?: IRegisterFromModel
}

export interface IRegisterFromModel {
  codigoUsuario: number;

}

export interface IRegisterToModel extends IAuditoriaModel {
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

export interface IForgotPasswordFromRsModel extends IResponseStatusModel {
  data?: IForgotPasswordFromModel
}

export interface IForgotPasswordFromModel {
  codigoUsuario: number;

}

export interface IForgotPasswordToModel extends IAuditoriaModel {

  email: string | null;

}
