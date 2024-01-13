import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";
import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";

export interface ISavePacienteFromRsViewModel extends IResponseStatusViewModel {
  data?: ISavePacienteRsViewModel | null;
}

export interface ISavePacienteRsViewModel {
  id_paciente: number | null;
}

export interface ISavePacienteViewModel extends IAuditoriaModel {
  dni: string | null;
  nombre: string | null;
  apellido: string | null;
  celular: string | null;
  telefono: string | null;
  email: string | null;
  sexo: string | null;
  fecha_nacimiento: Date | null;
  direccion: string | null;
}

export interface IGetPacienteFromRsViewModel extends IResponseStatusViewModel {
  data?: IGetPacienteRsViewModel[] | null;
}

export interface IGetPacienteRsViewModel {
  id_paciente?: number | null;
  dni?: string | null;
  nombre?: string | null;
  apellido?: string | null;
  celular?: string | null;
  telefono?: string | null;
  email?: string | null;
  sexo?: string | null;
  fecha_nacimiento?: Date | null;
  direccion?: string | null;
  estado?: string | null;
}

export interface IGetPacienteViewModel{
  busqueda?: string | null;
}


export interface IGetPacienteByIdFromRsViewModel extends IResponseStatusViewModel {
  data?: IGetPacienteByIdRsViewModel | null;
}

export interface IGetPacienteByIdRsViewModel {
  id_paciente?: number | null;
  dni?: string | null;
  nombre?: string | null;
  apellido?: string | null;
  celular?: string | null;
  telefono?: string | null;
  email?: string | null;
  sexo?: string | null;
  fecha_nacimiento?: Date | null;
  direccion?: string | null;
  estado?: string | null;
}

export interface IGetPacienteByIdViewModel {
  id_paciente: number | null;
}




export interface IUpdatePacienteFromRsViewModel extends IResponseStatusViewModel {
  data?: IUpdatePacienteRsViewModel | null;
}

export interface IUpdatePacienteRsViewModel {
  id_paciente: number | null;
}

export interface IUpdatePacienteViewModel extends IAuditoriaModel {
  id_paciente: number | null;
  dni: string | null;
  nombre: string | null;
  apellido: string | null;
  celular: string | null;
  telefono: string | null;
  email: string | null;
  sexo: string | null;
  fecha_nacimiento: Date | null;
  direccion: string | null;
}
