/**
* Interface i-tabla-prueba-uno.viewModel.
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    TablaPruebaUnoviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaModel } from 'src/data/general/models/i-auditoria.model';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';


/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name ISaveTablaPruebaUnoFromRsViewModel
*/
export interface ISaveTablaPruebaUnoFromRsViewModel extends IResponseStatusViewModel {
	data?: ISaveTablaPruebaUnoRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTablaPruebaUnoRsViewModel
*/
export interface ISaveTablaPruebaUnoRsViewModel {
	id_tabla_prueba_uno: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name ISaveTablaPruebaUnoViewModel
*/
export interface ISaveTablaPruebaUnoViewModel extends IAuditoriaModel {
	nombre_tabla_uno?: string | null;
	apellido_tabla_uno?: string | null;
	numero_entero_tabla_uno?: number | null;
	numero_decimal_tabla_uno?: number | null;
	fecha_creacion_tabla_uno?: Date | null;
	fecha_actualizacion_tabla_uno?: Date | null;
	fecha_actual_tabla_uno?: Date | null;
	es_tabla_uno?: boolean | null;
	estado_tabla_uno?: string | null;
	telefono_tabla_uno?: string | null;
	correo_electronico_tabla_uno?: string | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetTablaPruebaUnoFromRsViewModel
*/
export interface IGetTablaPruebaUnoFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetTablaPruebaUnoRsViewModel[] | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTablaPruebaUnoRsViewModel
*/
export interface IGetTablaPruebaUnoRsViewModel {
	id_tabla_prueba_uno?: number | null;
	nombre_tabla_uno?: string | null;
	apellido_tabla_uno?: string | null;
	numero_entero_tabla_uno?: number | null;
	numero_decimal_tabla_uno?: number | null;
	fecha_creacion_tabla_uno?: Date | null;
	fecha_actualizacion_tabla_uno?: Date | null;
	fecha_actual_tabla_uno?: Date | null;
	es_tabla_uno?: boolean | null;
	estado_tabla_uno?: string | null;
	telefono_tabla_uno?: string | null;
	correo_electronico_tabla_uno?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTablaPruebaUnoViewModel
*/
export interface IGetTablaPruebaUnoViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetTablaPruebaUnoPaginadoFromRsViewModel
*/
export interface IGetTablaPruebaUnoPaginadoFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetTablaPruebaUnoPaginadoRsViewModel[] | null;
	total_registro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTablaPruebaUnoPaginadoRsViewModel
*/
export interface IGetTablaPruebaUnoPaginadoRsViewModel {
	id_tabla_prueba_uno?: number | null;
	nombre_tabla_uno?: string | null;
	apellido_tabla_uno?: string | null;
	numero_entero_tabla_uno?: number | null;
	numero_decimal_tabla_uno?: number | null;
	fecha_creacion_tabla_uno?: Date | null;
	fecha_actualizacion_tabla_uno?: Date | null;
	fecha_actual_tabla_uno?: Date | null;
	es_tabla_uno?: boolean | null;
	estado_tabla_uno?: string | null;
	telefono_tabla_uno?: string | null;
	correo_electronico_tabla_uno?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTablaPruebaUnoPaginadoViewModel
*/
export interface IGetTablaPruebaUnoPaginadoViewModel {
	busqueda?: string | null;
	campo_orden?: string | null;
	orden?: string | null;
	indice_inicio?: number | null;
	cantidad_registro?: number | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetTablaPruebaUnoByIdFromRsViewModel
*/
export interface IGetTablaPruebaUnoByIdFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetTablaPruebaUnoByIdRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTablaPruebaUnoByIdRsViewModel
*/
export interface IGetTablaPruebaUnoByIdRsViewModel {
	id_tabla_prueba_uno?: number | null;
	nombre_tabla_uno?: string | null;
	apellido_tabla_uno?: string | null;
	numero_entero_tabla_uno?: number | null;
	numero_decimal_tabla_uno?: number | null;
	fecha_creacion_tabla_uno?: Date | null;
	fecha_actualizacion_tabla_uno?: Date | null;
	fecha_actual_tabla_uno?: Date | null;
	es_tabla_uno?: boolean | null;
	estado_tabla_uno?: string | null;
	telefono_tabla_uno?: string | null;
	correo_electronico_tabla_uno?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTablaPruebaUnoByIdViewModel
*/
export interface IGetTablaPruebaUnoByIdViewModel {
	id_tabla_prueba_uno: number | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IUpdateTablaPruebaUnoFromRsViewModel
*/
export interface IUpdateTablaPruebaUnoFromRsViewModel extends IResponseStatusViewModel {
	data?: IUpdateTablaPruebaUnoRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTablaPruebaUnoRsViewModel
*/
export interface IUpdateTablaPruebaUnoRsViewModel {
	id_tabla_prueba_uno: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IUpdateTablaPruebaUnoViewModel
*/
export interface IUpdateTablaPruebaUnoViewModel extends IAuditoriaModel {
	id_tabla_prueba_uno?: number | null;
	nombre_tabla_uno?: string | null;
	apellido_tabla_uno?: string | null;
	numero_entero_tabla_uno?: number | null;
	numero_decimal_tabla_uno?: number | null;
	fecha_creacion_tabla_uno?: Date | null;
	fecha_actualizacion_tabla_uno?: Date | null;
	fecha_actual_tabla_uno?: Date | null;
	es_tabla_uno?: boolean | null;
	estado_tabla_uno?: string | null;
	telefono_tabla_uno?: string | null;
	correo_electronico_tabla_uno?: string | null;
}
