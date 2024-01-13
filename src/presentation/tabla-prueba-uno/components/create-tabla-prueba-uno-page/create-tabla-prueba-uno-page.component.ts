/**
* Vista create-tabla-prueba-uno-page.component.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    CreateTablaPruebaUnoPageComponent
* @package presentation
* @subpackage tabla-prueba-uno
*/

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { messages } from 'src/presentation/base/messages';
import { ISaveTablaPruebaUnoViewModel,IGetTablaPruebaUnoByIdViewModel, IUpdateTablaPruebaUnoViewModel } from 'src/domain/tabla-prueba-uno/viewModels/i-tabla-prueba-uno.viewModel';
import { TablaPruebaUnoUseCase } from 'src/domain/tabla-prueba-uno/usesCases/tabla-prueba-uno.usecase';

declare var $:any;
declare var validarDecimalesJs: any;
declare var validarEnterosJs: any;

@Component({
	selector: 'tabla-prueba-uno-create-tabla-prueba-uno-page',
	templateUrl: './create-tabla-prueba-uno-page.component.html',
	styleUrls: ['./create-tabla-prueba-uno-page.component.css'],
})

export class CreateTablaPruebaUnoPageComponent {

	constructor(private _route: ActivatedRoute, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _tablaPruebaUnoUseCase: TablaPruebaUnoUseCase){
	}

	title = 'Datos TablaPruebaUno';

	public formTablaPruebaUno!: FormGroup;
	@Output() close = new EventEmitter();
	public checkedEsTablaUno: boolean = false;
	navigated = false;
	sub: any;

	saveTablaPruebaUno(): void{
		if (this.formTablaPruebaUno.invalid) {
			this.formTablaPruebaUno.markAllAsTouched();
			this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
			return;
		}

		if (this.currentTablaPruebaUno.id_tabla_prueba_uno) {
			this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmUpdate, () => {
				this.formTablaPruebaUno.value['fecha_creacion_tabla_uno'] = $('#fecha_creacion_tabla_uno').val() == "" ? null : $('#fecha_creacion_tabla_uno').val();
				this.formTablaPruebaUno.value['fecha_actual_tabla_uno'] = $('#fecha_actual_tabla_uno').val() == "" ? null : $('#fecha_actual_tabla_uno').val();

				this._tablaPruebaUnoUseCase.updateTablaPruebaUno(this.currentTablaPruebaUno as IUpdateTablaPruebaUnoViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
							this.formTablaPruebaUno.get('id_tabla_prueba_uno')!.patchValue(result.data?.id_tabla_prueba_uno);
						} else {
							this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		};

		this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {

				this.formTablaPruebaUno.value['fecha_creacion_tabla_uno'] = $('#fecha_creacion_tabla_uno').val() == "" ? null : $('#fecha_creacion_tabla_uno').val();
				this.formTablaPruebaUno.value['fecha_actual_tabla_uno'] = $('#fecha_actual_tabla_uno').val() == "" ? null : $('#fecha_actual_tabla_uno').val();

			this._tablaPruebaUnoUseCase.saveTablaPruebaUno(this.formTablaPruebaUno.value as ISaveTablaPruebaUnoViewModel).then(obs => {
				this._loaderService.display(true);
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
					} else {
						this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
					}
				});
			});
		});
	};


	ngOnInit() {
		validarEnterosJs('#numero_entero_tabla_uno', 8);
		validarDecimalesJs('#numero_decimal_tabla_uno', 8, 2);

		this.formTablaPruebaUno = new FormGroup({
			id_tabla_prueba_uno: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			nombre_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(128)])),
			apellido_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(256)])),
			numero_entero_tabla_uno: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			numero_decimal_tabla_uno: new FormControl(null, Validators.compose([Validators.max(999999999.99), Validators.pattern(this._validatorService.patternTwoDecimal)])),
			fecha_creacion_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(8)])),
			fecha_actualizacion_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(8)])),
			fecha_actual_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(8)])),
			es_tabla_uno: new FormControl(false, Validators.compose([Validators.maxLength(8)])),
			estado_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(8)])),
			telefono_tabla_uno: new FormControl(null, Validators.compose([Validators.maxLength(16)])),
		});

		this.sub = this._route.params.subscribe(params => {
			this.navigated = true;
			let id = +params['id'];
			if (id != -1) {
				this.navigated = true;
				let id_tabla_prueba_uno: IGetTablaPruebaUnoByIdViewModel = { id_tabla_prueba_uno: id };
				this._tablaPruebaUnoUseCase.getTablaPruebaUnoById(id_tabla_prueba_uno).then(obs => {
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formTablaPruebaUno.reset(result.data);
							var fechaCreacionTablaUnoString = result.data?.fecha_creacion_tabla_uno?.toString();
							if (fechaCreacionTablaUnoString != null)
							{
								const [yearFechaCreacionTablaUno, monthFechaCreacionTablaUno, dayFechaCreacionTablaUno] = fechaCreacionTablaUnoString!.split('-');
								const fechaCreacionTablaUno = {
									year: parseInt(yearFechaCreacionTablaUno), month: parseInt(monthFechaCreacionTablaUno), day:parseInt(dayFechaCreacionTablaUno.split(' ')[0].trim())
								};
								this.formTablaPruebaUno.get('fecha_creacion_tabla_uno')?.setValue(fechaCreacionTablaUno);
							}
							var fechaActualTablaUnoString = result.data?.fecha_actual_tabla_uno?.toString();
							if (fechaActualTablaUnoString != null)
							{
								const [yearFechaActualTablaUno, monthFechaActualTablaUno, dayFechaActualTablaUno] = fechaActualTablaUnoString!.split('-');
								const fechaActualTablaUno = {
									year: parseInt(yearFechaActualTablaUno), month: parseInt(monthFechaActualTablaUno), day:parseInt(dayFechaActualTablaUno.split(' ')[0].trim())
								};
								this.formTablaPruebaUno.get('fecha_actual_tabla_uno')?.setValue(fechaActualTablaUno);
							}
						} else {
							this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	};
		public onChangeEsTablaUno(event: any): void {
	this.checkedEsTablaUno = event.checked;
	}

	public cancelTablaPruebaUno(): void{
		this.close.emit(true);
		window.history.back();
	};

	private get currentTablaPruebaUno(): IUpdateTablaPruebaUnoViewModel {
		return this.formTablaPruebaUno.value as IUpdateTablaPruebaUnoViewModel;
	};

}
