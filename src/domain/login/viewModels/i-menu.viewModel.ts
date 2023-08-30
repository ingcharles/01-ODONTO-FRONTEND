import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";


export interface IMenuFromRsViewModel extends IResponseStatusViewModel {
  data?: IMenuRsViewModel[] | null;
}

export interface IMenuRsViewModel {
  codigo: number | null;
  nombre: string | null;
  // descripcion: string | null;
  icono: string | null;
  link: string | null;
  codigoPadre: string | null;
  estado: number | null;
}
export interface IMenuItemRsViewModel {
  codigo: number | null;
  nombre: string | null;
  // descripcion: string | null;
  icono: string | null;
  link: string | null;
  codigoPadre: string | null;
  estado: number | null;
  menuItem?: IMenuRsViewModel[] | null;
}
