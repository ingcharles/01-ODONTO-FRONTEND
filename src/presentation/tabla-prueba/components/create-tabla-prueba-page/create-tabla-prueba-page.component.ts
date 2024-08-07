/**
* Vista create-tabla-prueba-page.component.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    CreateTablaPruebaPageComponent
* @package presentation
* @subpackage tabla-prueba
*/

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { messages } from 'src/presentation/base/messages';
import { ISaveTablaPruebaViewModel, IGetTablaPruebaByIdViewModel, IUpdateTablaPruebaViewModel } from 'src/domain/tabla-prueba/viewModels/i-tabla-prueba.viewModel';
import { TablaPruebaUseCase } from 'src/domain/tabla-prueba/usesCases/tabla-prueba.usecase';

declare var $: any;
declare var validarDecimalesJs: any;
declare var validarEnterosJs: any;

@Component({
	selector: 'tabla-prueba-create-tabla-prueba-page',
	templateUrl: './create-tabla-prueba-page.component.html',
	styleUrls: ['./create-tabla-prueba-page.component.css'],
})

export class CreateTablaPruebaPageComponent {

	constructor(private _route: ActivatedRoute, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _tablaPruebaUseCase: TablaPruebaUseCase) {

	}

	title = 'Datos TablaPrueba';

	public formTablaPrueba!: FormGroup;
	@Output() close = new EventEmitter();
	public checkedEstadoBoleano: boolean = false;
	navigated = false;
	sub: any;

	saveTablaPrueba(): void {
		if (this.formTablaPrueba.invalid) {
			this.formTablaPrueba.markAllAsTouched();
			this._alertService.alertMessage(messages.informativoTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		if (this.currentTablaPrueba.id_tabla_prueba) {
			this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmUpdate, () => {
				this.formTablaPrueba.value['fecha_tabla_prueba'] = $('#fecha_tabla_prueba').val() == "" ? null : $('#fecha_tabla_prueba').val();
				this.formTablaPrueba.value['fecha_registro'] = $('#fecha_registro').val() == "" ? null : $('#fecha_registro').val();

				this._tablaPruebaUseCase.updateTablaPrueba(this.currentTablaPrueba as IUpdateTablaPruebaViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
							this.formTablaPrueba.get('id_tabla_prueba')!.patchValue(result.data?.id_tabla_prueba);
						} else {
							this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		};

		this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {

			this.formTablaPrueba.value['fecha_tabla_prueba'] = $('#fecha_tabla_prueba').val() == "" ? null : $('#fecha_tabla_prueba').val();
			this.formTablaPrueba.value['fecha_registro'] = $('#fecha_registro').val() == "" ? null : $('#fecha_registro').val();

			this._tablaPruebaUseCase.saveTablaPrueba(this.formTablaPrueba.value as ISaveTablaPruebaViewModel).then(obs => {
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
		validarEnterosJs('#numero_entero', 8);
		validarDecimalesJs('#numero_decimal', 8, 2);

		this.formTablaPrueba = new FormGroup({
			id_tabla_prueba: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			nombre_tabla_prueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(128)])),
			fecha_tabla_prueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			numero_entero: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado_boleano: new FormControl(false, Validators.compose([Validators.requiredTrue, Validators.maxLength(8)])),
			fecha_registro: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			numero_decimal: new FormControl(null, Validators.compose([Validators.required, Validators.min(0.01), Validators.max(999999999.99), Validators.pattern(this._validatorService.patternTwoDecimal)])),
			estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(16)])),
		});

		this.sub = this._route.params.subscribe(params => {
			this.navigated = true;
			let id = +params['id'];
			if (id != -1) {
				this.navigated = true;
				let id_tabla_prueba: IGetTablaPruebaByIdViewModel = { id_tabla_prueba: id };
				this._tablaPruebaUseCase.getTablaPruebaById(id_tabla_prueba).then(obs => {
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formTablaPrueba.reset(result.data);
							var fechaTablaPruebaString = result.data?.fecha_tabla_prueba?.toString();
							if (fechaTablaPruebaString != null) {
								const [yearFechaTablaPrueba, monthFechaTablaPrueba, dayFechaTablaPrueba] = fechaTablaPruebaString!.split('-');
								const fechaTablaPrueba = {
									year: parseInt(yearFechaTablaPrueba), month: parseInt(monthFechaTablaPrueba), day: parseInt(dayFechaTablaPrueba.split(' ')[0].trim())
								};
								this.formTablaPrueba.get('fecha_tabla_prueba')?.setValue(fechaTablaPrueba);
							}
							var fechaRegistroString = result.data?.fecha_registro?.toString();
							if (fechaRegistroString != null) {
								const [yearFechaRegistro, monthFechaRegistro, dayFechaRegistro] = fechaRegistroString!.split('-');
								const fechaRegistro = {
									year: parseInt(yearFechaRegistro), month: parseInt(monthFechaRegistro), day: parseInt(dayFechaRegistro.split(' ')[0].trim())
								};
								this.formTablaPrueba.get('fecha_registro')?.setValue(fechaRegistro);
							}
						} else {
							this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	};
	public onChangeEstadoBoleano(event: any): void {
		this.checkedEstadoBoleano = event.checked;
	}

	public cancelTablaPrueba(): void {
		this.close.emit(true);
		window.history.back();
	};

	private get currentTablaPrueba(): IUpdateTablaPruebaViewModel {
		return this.formTablaPrueba.value as IUpdateTablaPruebaViewModel;
	};

}
