/**
* Clase TablaPruebaUnoUseCase.
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    TablaPruebaUnoUseCase
* @package UseCase
* @subpackage Domain
*/

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { TablaPruebaUnoService } from 'src/data/tabla-prueba-uno/services/tabla-prueba-uno.services';
import { ISaveTablaPruebaUnoViewModel, ISaveTablaPruebaUnoFromRsViewModel, IGetTablaPruebaUnoViewModel, IGetTablaPruebaUnoFromRsViewModel, IGetTablaPruebaUnoPaginadoViewModel, IGetTablaPruebaUnoPaginadoFromRsViewModel, IGetTablaPruebaUnoByIdViewModel, IGetTablaPruebaUnoByIdFromRsViewModel, IUpdateTablaPruebaUnoViewModel, IUpdateTablaPruebaUnoFromRsViewModel  } from '../viewModels/i-tabla-prueba-uno.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TablaPruebaUnoUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilziados en los casos de uso
	* @param _tablaPruebaUnoService: TablaPruebaUnoService
	* @return Promise<Observable<ISaveTablaPruebaUnoFromRsViewModel>>
	 */
	constructor(private _tablaPruebaUnoService: TablaPruebaUnoService)
	{
	}

	/**
	* Guarda el registro actual
	* @param tablaPruebaUno: ISaveTablaPruebaUnoViewModel
	* @return Promise<Observable<ISaveTablaPruebaUnoFromRsViewModel>>
	*/
	public async saveTablaPruebaUno(tablaPruebaUno: ISaveTablaPruebaUnoViewModel): Promise<Observable<ISaveTablaPruebaUnoFromRsViewModel>> {
		return await this._tablaPruebaUnoService.saveTablaPruebaUno(tablaPruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param tablaPruebaUno: IGetTablaPruebaUnoViewModel
	* @return Promise<Observable<IGetTablaPruebaUnoFromRsViewModel>>
	*/
	public async getTablaPruebaUno(tablaPruebaUno: IGetTablaPruebaUnoViewModel): Promise<Observable<IGetTablaPruebaUnoFromRsViewModel>> {
		return await this._tablaPruebaUnoService.getTablaPruebaUno(tablaPruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param tablaPruebaUno: IGetTablaPruebaUnoPaginadoViewModel
	* @return Promise<Observable<IGetTablaPruebaUnoPaginadoFromRsViewModel>>
	*/
	public async getTablaPruebaUnoPaginado(tablaPruebaUno: IGetTablaPruebaUnoPaginadoViewModel): Promise<Observable<IGetTablaPruebaUnoPaginadoFromRsViewModel>> {
		return await this._tablaPruebaUnoService.getTablaPruebaUnoPaginado(tablaPruebaUno);
	}
	/**
	* Obtiene el registro por id
	* @param tablaPruebaUno: IGetTablaPruebaUnoByIdViewModel
	* @return Promise<Observable<IGetTablaPruebaUnoByIdFromRsViewModel>>
	*/
	public async getTablaPruebaUnoById(tablaPruebaUno: IGetTablaPruebaUnoByIdViewModel): Promise<Observable<IGetTablaPruebaUnoByIdFromRsViewModel>> {
		return await this._tablaPruebaUnoService.getTablaPruebaUnoById(tablaPruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param tablaPruebaUno: IUpdateTablaPruebaUnoViewModel
	* @return Promise<Observable<IUpdateTablaPruebaUnoFromRsViewModel>>
	*/
	public async updateTablaPruebaUno(tablaPruebaUno: IUpdateTablaPruebaUnoViewModel): Promise<Observable<IUpdateTablaPruebaUnoFromRsViewModel>> {
		return await this._tablaPruebaUnoService.updateTablaPruebaUno(tablaPruebaUno);
	}

}
