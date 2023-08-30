import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";
import { IResponseStatusModel } from "src/data/general/models/i-response-status.model";

export interface IMenuFromRsModel extends IResponseStatusModel {
  data?: IMenuFromModel[] | null
}

export interface IMenuFromModel {
  codigo: number | null;
  nombre: string | null;
  descripcion: string | null;
  icono: string | null;
  link: string | null;
  codigoPadre: string | null;
  estado: number | null;
}

export interface IMenuToModel extends IAuditoriaModel {
  codigo: number | null;

}
