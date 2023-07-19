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
