/**
* Clase TablaPruebaUnoService que extiende de ATablaPruebaUnoService.
* Este archivo se complementa con el archivo ATablaPruebaUnoService.
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    TablaPruebaUnoService
* @package Service
* @subpackage Data
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatusResponseService } from 'src/data/base/status-response.service';
import { ISaveTablaPruebaUnoFromRsViewModel, ISaveTablaPruebaUnoViewModel, IGetTablaPruebaUnoByIdFromRsViewModel, IGetTablaPruebaUnoByIdViewModel, IGetTablaPruebaUnoFromRsViewModel, IGetTablaPruebaUnoViewModel, IUpdateTablaPruebaUnoFromRsViewModel, IUpdateTablaPruebaUnoViewModel } from 'src/domain/tabla-prueba-uno/viewModels/i-tabla-prueba-uno.viewModel';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class TablaPruebaUnoService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TablaPruebaUnoService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tablaPruebaUno: ISaveTablaPruebaUnoViewModel
	* @return Promise<Observable<ISaveTablaPruebaUnoFromRsViewModel>>
	*/
	public async saveTablaPruebaUno(tablaPruebaUno: ISaveTablaPruebaUnoViewModel): Promise<Observable<ISaveTablaPruebaUnoFromRsViewModel>>{
		tablaPruebaUno.auditoria = 'transaccionAuditoria';
		const url = `${apiUrl}TablaPruebaUno/SaveTablaPruebaUno`;
		return this._http.post<any>(url, tablaPruebaUno).pipe(
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
	* @param busqueda: IGetTablaPruebaUnoViewModel
	* @return Promise<Observable<IGetTablaPruebaUnoFromRsViewModel>>
	*/
	public async getTablaPruebaUno(busqueda: IGetTablaPruebaUnoViewModel): Promise<Observable<IGetTablaPruebaUnoFromRsViewModel>>{
		const url = `${apiUrl}TablaPruebaUno/GetTablaPruebaUno`;
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
	* @param id_tabla_prueba_uno: IGetTablaPruebaUnoByIdViewModel
	* @return Promise<Observable<IGetTablaPruebaUnoByIdFromRsViewModel>>
	*/
	public async getTablaPruebaUnoById(id_tabla_prueba_uno: IGetTablaPruebaUnoByIdViewModel): Promise<Observable<IGetTablaPruebaUnoByIdFromRsViewModel>>{
		const url = `${apiUrl}TablaPruebaUno/GetTablaPruebaUnoById`;
		return this._http.post<any>(url, id_tabla_prueba_uno).pipe(
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
	* @param tablaPruebaUno: IUpdateTablaPruebaUnoViewModel
	* @return Promise<Observable<IUpdateTablaPruebaUnoFromRsViewModel>>
	*/
	public async updateTablaPruebaUno(tablaPruebaUno: IUpdateTablaPruebaUnoViewModel): Promise<Observable<IUpdateTablaPruebaUnoFromRsViewModel>>{
		tablaPruebaUno.auditoria = 'transaccionAuditoria';
		const url = `${apiUrl}TablaPruebaUno/UpdateTablaPruebaUno`;
		return this._http.post<any>(url, tablaPruebaUno).pipe(
			map((result) => {
				return result;
			}),
			catchError((error) => {
				return of(this._statusResponseService.error(error));
			})
		);
	}

}
