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
import { MatSort } from '@angular/material/sort';
import { merge, tap } from 'rxjs';
import { messages } from 'src/presentation/base/messages';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IGetTablaPruebaPaginadoRsViewModel, IGetTablaPruebaPaginadoViewModel } from 'src/domain/tabla-prueba/viewModels/i-tabla-prueba.viewModel';
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
	public tablaPruebaPadre: any;
	public totalRegistrosTablaPrueba: any;
	public dataSourceTablaPrueba = new MatTableDataSource<IGetTablaPruebaPaginadoRsViewModel>([]);
	@ViewChild('paginatorTablaPrueba') paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	ngOnInit(): void {
		this.obtenerTablaPruebaPaginado(false, "id_tabla_prueba_uno", "DESC", 0, 5);
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

	public obtenerTablaPruebaPaginado(es_buscar: boolean, campo_orden: string, orden: string, indice_inicio: number, cantidad_registro: number) {
		let busquedaString:any = $('#busqueda').val();
		let busqueda: IGetTablaPruebaPaginadoViewModel = {busqueda: busquedaString, campo_orden: campo_orden, orden: orden, indice_inicio: indice_inicio, cantidad_registro: cantidad_registro };

		this._tablaPruebaUseCase.getTablaPruebaPaginado(busqueda).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.dataSourceTablaPrueba = new MatTableDataSource<IGetTablaPruebaPaginadoRsViewModel>(result.data!);
				} else {
					this.dataSourceTablaPrueba = new MatTableDataSource<IGetTablaPruebaPaginadoRsViewModel>([]);
					if (es_buscar) {
						this._alertService.alertMessage(messages.informativoTitle, result.message, messages.isInfo);
					}
				}
				this.totalRegistrosTablaPrueba = result.total_registro!;
			});
		});
	}

	public aplicarFiltroTablaPrueba(event: Event) {
		const valor = (event.target as HTMLInputElement).value;
		this.dataSourceTablaPrueba.filter = valor.trim().toLowerCase();
		if (this.dataSourceTablaPrueba.paginator) {
			this.dataSourceTablaPrueba.paginator.firstPage();
		}
	}

}
