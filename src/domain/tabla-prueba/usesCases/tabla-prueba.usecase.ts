/**
* Clase TablaPruebaUseCase.
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    TablaPruebaUseCase
* @package UseCase
* @subpackage Domain
*/

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { TablaPruebaService } from 'src/data/tabla-prueba/services/tabla-prueba.services';
import { ISaveTablaPruebaViewModel, ISaveTablaPruebaFromRsViewModel, IGetTablaPruebaViewModel, IGetTablaPruebaFromRsViewModel, IGetTablaPruebaByIdViewModel, IGetTablaPruebaByIdFromRsViewModel, IUpdateTablaPruebaViewModel, IUpdateTablaPruebaFromRsViewModel  } from '../viewModels/i-tabla-prueba.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TablaPruebaUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilziados en los casos de uso
	* @param _tablaPruebaService: TablaPruebaService
	* @return Promise<Observable<ISaveTablaPruebaFromRsViewModel>>
	 */
	constructor(private _tablaPruebaService: TablaPruebaService)
	{
	}

	/**
	* Guarda el registro actual
	* @param tablaPrueba: ISaveTablaPruebaViewModel
	* @return Promise<Observable<ISaveTablaPruebaFromRsViewModel>>
	*/
	public async saveTablaPrueba(tablaPrueba: ISaveTablaPruebaViewModel): Promise<Observable<ISaveTablaPruebaFromRsViewModel>> {
		return await this._tablaPruebaService.saveTablaPrueba(tablaPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param tablaPrueba: IGetTablaPruebaViewModel
	* @return Promise<Observable<IGetTablaPruebaFromRsViewModel>>
	*/
	public async getTablaPrueba(tablaPrueba: IGetTablaPruebaViewModel): Promise<Observable<IGetTablaPruebaFromRsViewModel>> {
		return await this._tablaPruebaService.getTablaPrueba(tablaPrueba);
	}
	/**
	* Obtiene el registro por id
	* @param tablaPrueba: IGetTablaPruebaByIdViewModel
	* @return Promise<Observable<IGetTablaPruebaByIdFromRsViewModel>>
	*/
	public async getTablaPruebaById(tablaPrueba: IGetTablaPruebaByIdViewModel): Promise<Observable<IGetTablaPruebaByIdFromRsViewModel>> {
		return await this._tablaPruebaService.getTablaPruebaById(tablaPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param tablaPrueba: IUpdateTablaPruebaViewModel
	* @return Promise<Observable<IUpdateTablaPruebaFromRsViewModel>>
	*/
	public async updateTablaPrueba(tablaPrueba: IUpdateTablaPruebaViewModel): Promise<Observable<IUpdateTablaPruebaFromRsViewModel>> {
		return await this._tablaPruebaService.updateTablaPrueba(tablaPrueba);
	}

}
