/**
* Interface i-tabla-prueba.viewModel.
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    TablaPruebaviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaModel } from 'src/data/general/models/i-auditoria.model';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';


/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name ISaveTablaPruebaFromRsViewModel
*/
export interface ISaveTablaPruebaFromRsViewModel extends IResponseStatusViewModel {
	data?: ISaveTablaPruebaRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTablaPruebaRsViewModel
*/
export interface ISaveTablaPruebaRsViewModel {
	id_tabla_prueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name ISaveTablaPruebaViewModel
*/
export interface ISaveTablaPruebaViewModel extends IAuditoriaModel {
	nombre_tabla_prueba: string | null;
	fecha_tabla_prueba: Date | null;
	numero_entero: number | null;
	estado_boleano: boolean | null;
	fecha_registro: Date | null;
	numero_decimal: number | null;
	estado: string | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetTablaPruebaFromRsViewModel
*/
export interface IGetTablaPruebaFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetTablaPruebaRsViewModel[] | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTablaPruebaRsViewModel
*/
export interface IGetTablaPruebaRsViewModel {
	id_tabla_prueba: number | null;
	nombre_tabla_prueba: string | null;
	fecha_tabla_prueba: Date | null;
	numero_entero: number | null;
	estado_boleano: boolean | null;
	fecha_registro: Date | null;
	numero_decimal: number | null;
	estado: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTablaPruebaViewModel
*/
export interface IGetTablaPruebaViewModel {
	busqueda: string | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IGetTablaPruebaByIdFromRsViewModel
*/
export interface IGetTablaPruebaByIdFromRsViewModel extends IResponseStatusViewModel {
	data?: IGetTablaPruebaByIdRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTablaPruebaByIdRsViewModel
*/
export interface IGetTablaPruebaByIdRsViewModel {
	id_tabla_prueba: number | null;
	nombre_tabla_prueba: string | null;
	fecha_tabla_prueba: Date | null;
	numero_entero: number | null;
	estado_boleano: boolean | null;
	fecha_registro: Date | null;
	numero_decimal: number | null;
	estado: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTablaPruebaByIdViewModel
*/
export interface IGetTablaPruebaByIdViewModel {
	id_tabla_prueba: number | null;
}

/**
* Interface que contiene los datos de entrada que viene del servicio
* Extiende IResponseStatusViewModel
* @name IUpdateTablaPruebaFromRsViewModel
*/
export interface IUpdateTablaPruebaFromRsViewModel extends IResponseStatusViewModel {
	data?: IUpdateTablaPruebaRsViewModel | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTablaPruebaRsViewModel
*/
export interface IUpdateTablaPruebaRsViewModel {
	id_tabla_prueba: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IUpdateTablaPruebaViewModel
*/
export interface IUpdateTablaPruebaViewModel extends IAuditoriaModel {
	id_tabla_prueba: number | null;
	nombre_tabla_prueba: string | null;
	fecha_tabla_prueba: Date | null;
	numero_entero: number | null;
	estado_boleano: boolean | null;
	fecha_registro: Date | null;
	numero_decimal: number | null;
	estado: string | null;
}
