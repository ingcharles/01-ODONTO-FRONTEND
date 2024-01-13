/**
* Clase TablaPruebaService que extiende de ATablaPruebaService.
* Este archivo se complementa con el archivo ATablaPruebaService.
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    TablaPruebaService
* @package Service
* @subpackage Data
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatusResponseService } from 'src/data/base/status-response.service';
import { ISaveTablaPruebaFromRsViewModel, ISaveTablaPruebaViewModel, IGetTablaPruebaByIdFromRsViewModel, IGetTablaPruebaByIdViewModel, IGetTablaPruebaFromRsViewModel, IGetTablaPruebaViewModel, IUpdateTablaPruebaFromRsViewModel, IUpdateTablaPruebaViewModel } from 'src/domain/tabla-prueba/viewModels/i-tabla-prueba.viewModel';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class TablaPruebaService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TablaPruebaService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tablaPrueba: ISaveTablaPruebaViewModel
	* @return Promise<Observable<ISaveTablaPruebaFromRsViewModel>>
	*/
	public async saveTablaPrueba(tablaPrueba: ISaveTablaPruebaViewModel): Promise<Observable<ISaveTablaPruebaFromRsViewModel>>{
		tablaPrueba.auditoria = 'transaccionAuditoria';
		const url = `${apiUrl}TablaPrueba/SaveTablaPrueba`;
		return this._http.post<any>(url, tablaPrueba).pipe(
			map((result) => {
				return result;
			}),
			catchError((error) => {
				return of(this._statusResponseService.error(error));
			})
		);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTablaPruebaViewModel
	* @return Promise<Observable<IGetTablaPruebaFromRsViewModel>>
	*/
	public async getTablaPrueba(busqueda: IGetTablaPruebaViewModel): Promise<Observable<IGetTablaPruebaFromRsViewModel>>{
		const url = `${apiUrl}TablaPrueba/GetTablaPrueba`;
		return this._http.post<any>(url, busqueda).pipe(
			map((result) => {
				return result;
			}),
			catchError((error) => {
				return of(this._statusResponseService.error(error));
			})
		);
	}

	/**
	* Obtiene el registro actual
	* @param id_tabla_prueba: IGetTablaPruebaByIdViewModel
	* @return Promise<Observable<IGetTablaPruebaByIdFromRsViewModel>>
	*/
	public async getTablaPruebaById(id_tabla_prueba: IGetTablaPruebaByIdViewModel): Promise<Observable<IGetTablaPruebaByIdFromRsViewModel>>{
		const url = `${apiUrl}TablaPrueba/GetTablaPruebaById`;
		return this._http.post<any>(url, id_tabla_prueba).pipe(
			map((result) => {
				return result;
			}),
			catchError((error) => {
				return of(this._statusResponseService.error(error));
			})
		);
	}

	/**
	* Actualizar el registro actual
	* @param tablaPrueba: IUpdateTablaPruebaViewModel
	* @return Promise<Observable<IUpdateTablaPruebaFromRsViewModel>>
	*/
	public async updateTablaPrueba(tablaPrueba: IUpdateTablaPruebaViewModel): Promise<Observable<IUpdateTablaPruebaFromRsViewModel>>{
		tablaPrueba.auditoria = 'transaccionAuditoria';
		const url = `${apiUrl}TablaPrueba/UpdateTablaPrueba`;
		return this._http.post<any>(url, tablaPrueba).pipe(
			map((result) => {
				return result;
			}),
			catchError((error) => {
				return of(this._statusResponseService.error(error));
			})
		);
	}

}
