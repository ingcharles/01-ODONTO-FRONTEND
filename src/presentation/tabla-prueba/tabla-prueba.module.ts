/**
* Modulo tabla-prueba.module.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    NgModule
* @package presentation
* @subpackage tabla-prueba
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ValidationService } from '../base/services/validation.service';
import { IndexTablaPruebaPageComponent } from './components/index-tabla-prueba-page/index-tabla-prueba-page.component';
import { CreateTablaPruebaPageComponent } from './components/create-tabla-prueba-page/create-tabla-prueba-page.component';
import { TablaPruebaRouting } from './tabla-prueba.routing';

@NgModule({
	declarations: [
		CreateTablaPruebaPageComponent,
		IndexTablaPruebaPageComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbDatepicker,
		SharedModule,
		NgbModule,
		NgbModule,
		MatSlideToggleModule,
		MatTableModule,
		MatPaginatorModule,
		TablaPruebaRouting
	],
	providers: [
		{provide: ValidationService }
	]
})

export class TablaPruebaModule { }
