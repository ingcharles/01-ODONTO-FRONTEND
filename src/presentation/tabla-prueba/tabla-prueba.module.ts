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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
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
		MatSlideToggleModule,
		MatTableModule,
		MatPaginatorModule,
		MatInputModule,
		MatSortModule,
		NgxMaskDirective,
		NgxMaskPipe,
		TablaPruebaRouting
	],
	providers: [
		provideNgxMask(),
		{provide: ValidationService }
	]
})

export class TablaPruebaModule { }
