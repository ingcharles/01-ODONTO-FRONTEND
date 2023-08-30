import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";


export interface IAplicacionFromRsViewModel extends IResponseStatusViewModel {
  data?: IAplicacionRsViewModel[] | null;
}

export interface IAplicacionRsViewModel {
  codigo: number | null;
  nombre: string | null;
  descripcion: string | null;
  icono: string | null;
  color: string | null;
  nemonico: string | null;
  estado: number | null;
  // codigoUsuario?: number | null;
}

export interface IAplicacionMenuRsViewModel {
  codigoUsuario: number | null;
  codigoAplicacion: number | null;

}
