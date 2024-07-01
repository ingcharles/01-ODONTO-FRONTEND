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
import { MatSort } from '@angular/material/sort';
import { merge, tap } from 'rxjs';
import { messages } from 'src/presentation/base/messages';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IGetTablaPruebaUnoPaginadoRsViewModel, IGetTablaPruebaUnoPaginadoViewModel } from 'src/domain/tabla-prueba-uno/viewModels/i-tabla-prueba-uno.viewModel';
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
	public tablaPruebaUnoPadre: any;
	public totalRegistrosTablaPruebaUno: any;
	public dataSourceTablaPruebaUno = new MatTableDataSource<IGetTablaPruebaUnoPaginadoRsViewModel>([]);
	@ViewChild('paginatorTablaPruebaUno') paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	ngOnInit(): void {
		this.obtenerTablaPruebaUnoPaginado(false, "id_tabla_prueba_uno", "DESC", 0, 5);
	}

	ngAfterViewInit(): void {

		// Si el usuario cambia el orden de alguna columna, vuelva a la primera página.
		this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

		// Fusiona los eventos sortChange y page
		const sortAndPageChange = merge(this.sort.sortChange, this.paginator.page);

		// Suscribe al evento combinado y actualice los datos en la tabla respectiva
		sortAndPageChange.pipe(
			tap(() => {
				const campo_orden = this.sort.active;
				const orden = this.sort.direction.toUpperCase();
				const numero_pagina = this.paginator.pageIndex;
				const cantidad_registro = this.paginator.pageSize;
				const indice_inicio = numero_pagina * cantidad_registro;
				return this.obtenerTablaPruebaUnoPaginado(false, campo_orden, orden, indice_inicio, cantidad_registro)
			})
		).subscribe();
	}

	public obtenerTablaPruebaUnoPaginado(es_buscar: boolean, campo_orden: string, orden: string, indice_inicio: number, cantidad_registro: number) {
		let busquedaString:any = $('#busqueda').val();
		let busqueda: IGetTablaPruebaUnoPaginadoViewModel = {busqueda: busquedaString, campo_orden: campo_orden, orden: orden, indice_inicio: indice_inicio, cantidad_registro: cantidad_registro };

		this._tablaPruebaUnoUseCase.getTablaPruebaUnoPaginado(busqueda).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.dataSourceTablaPruebaUno = new MatTableDataSource<IGetTablaPruebaUnoPaginadoRsViewModel>(result.data!);
				} else {
					this.dataSourceTablaPruebaUno = new MatTableDataSource<IGetTablaPruebaUnoPaginadoRsViewModel>([]);
					if (es_buscar) {
						this._alertService.alertMessage(messages.informativoTitle, result.message, messages.isInfo);
					}
				}
				this.totalRegistrosTablaPruebaUno = result.total_registro!;
			});
		});
	}

	public aplicarFiltroTablaPruebaUno(event: Event) {
		const valor = (event.target as HTMLInputElement).value;
		this.dataSourceTablaPruebaUno.filter = valor.trim().toLowerCase();
		if (this.dataSourceTablaPruebaUno.paginator) {
			this.dataSourceTablaPruebaUno.paginator.firstPage();
		}
	}

}
