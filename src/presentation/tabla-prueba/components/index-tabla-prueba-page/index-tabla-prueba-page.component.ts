/**
* Vista index-tabla-prueba-page.component.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    IndexTablaPruebaPageComponent
* @package presentation
* @subpackage tabla-prueba
*/

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { messages } from 'src/presentation/base/messages';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IGetTablaPruebaRsViewModel, IGetTablaPruebaViewModel } from 'src/domain/tabla-prueba/viewModels/i-tabla-prueba.viewModel';
import { TablaPruebaUseCase } from 'src/domain/tabla-prueba/usesCases/tabla-prueba.usecase';

declare var $:any;

@Component({
	selector: 'tabla-prueba-index-tabla-prueba-page',
	templateUrl: './index-tabla-prueba-page.component.html',
	styleUrls: ['./index-tabla-prueba-page.component.css'],
})

export class IndexTablaPruebaPageComponent {

	constructor(private _alertService: AlertsService, private _loaderService: LoaderService, private _tablaPruebaUseCase: TablaPruebaUseCase){
	}

	public titulo:string = 'Datos TablaPrueba';
	public datosGridTablaPrueba: IGetTablaPruebaRsViewModel[] = [];
	public tablaPruebaPadre: any;
	public dataSource = new MatTableDataSource<IGetTablaPruebaRsViewModel>();
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	ngOnInit(): void {
		this.obtenerTablaPrueba();
	}

	obtenerTablaPrueba() {
		let busquedaString:any = $('#busqueda').val();
		let busqueda: IGetTablaPruebaViewModel = {busqueda: busquedaString};

		this._tablaPruebaUseCase.getTablaPrueba(busqueda).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.datosGridTablaPrueba = result.data!;
				} else {
					this.datosGridTablaPrueba = [];
					this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
				}
				this.dataSource = new MatTableDataSource<IGetTablaPruebaRsViewModel>(this.datosGridTablaPrueba);
			});
		});
	}

}
