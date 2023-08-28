import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";
import { IResponseStatusModel } from "src/data/general/models/i-response-status.model";

export interface IAplicacionFromRsModel extends IResponseStatusModel {
  data?: IAplicacionFromModel[] | null
}

export interface IAplicacionFromModel {
  codigo: number | null;
  nombre: string | null;
  descripcion: string | null;
  icono: string | null;
  color: string | null;
  nemonico: string | null;
  estado: number | null;
}

export interface IAplicacionToModel extends IAuditoriaModel {
  codigo: number | null;

}
