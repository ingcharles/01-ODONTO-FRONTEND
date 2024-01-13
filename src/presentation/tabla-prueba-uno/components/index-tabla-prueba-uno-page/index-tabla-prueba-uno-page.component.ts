/**
* Vista index-tabla-prueba-uno-page.component.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    IndexTablaPruebaUnoPageComponent
* @package presentation
* @subpackage tabla-prueba-uno
*/

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { messages } from 'src/presentation/base/messages';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IGetTablaPruebaUnoRsViewModel, IGetTablaPruebaUnoViewModel } from 'src/domain/tabla-prueba-uno/viewModels/i-tabla-prueba-uno.viewModel';
import { TablaPruebaUnoUseCase } from 'src/domain/tabla-prueba-uno/usesCases/tabla-prueba-uno.usecase';

declare var $:any;

@Component({
	selector: 'tabla-prueba-uno-index-tabla-prueba-uno-page',
	templateUrl: './index-tabla-prueba-uno-page.component.html',
	styleUrls: ['./index-tabla-prueba-uno-page.component.css'],
})

export class IndexTablaPruebaUnoPageComponent {

	constructor(private _alertService: AlertsService, private _loaderService: LoaderService, private _tablaPruebaUnoUseCase: TablaPruebaUnoUseCase){
	}

	public titulo:string = 'Datos TablaPruebaUno';
	public datosGridTablaPruebaUno: IGetTablaPruebaUnoRsViewModel[] = [];
	public tablaPruebaUnoPadre: any;
	public dataSource = new MatTableDataSource<IGetTablaPruebaUnoRsViewModel>();
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	ngOnInit(): void {
		this.obtenerTablaPruebaUno();
	}

	obtenerTablaPruebaUno() {
		let busquedaString:any = $('#busqueda').val();
		let busqueda: IGetTablaPruebaUnoViewModel = {busqueda: busquedaString};

		this._tablaPruebaUnoUseCase.getTablaPruebaUno(busqueda).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.datosGridTablaPruebaUno = result.data!;
				} else {
					this.datosGridTablaPruebaUno = [];
					this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
				}
				this.dataSource = new MatTableDataSource<IGetTablaPruebaUnoRsViewModel>(this.datosGridTablaPruebaUno);
			});
		});
	}

}
