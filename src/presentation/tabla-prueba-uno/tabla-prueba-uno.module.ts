/**
* Modulo tabla-prueba-uno.module.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    NgModule
* @package presentation
* @subpackage tabla-prueba-uno
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
import { IndexTablaPruebaUnoPageComponent } from './components/index-tabla-prueba-uno-page/index-tabla-prueba-uno-page.component';
import { CreateTablaPruebaUnoPageComponent } from './components/create-tabla-prueba-uno-page/create-tabla-prueba-uno-page.component';
import { TablaPruebaUnoRouting } from './tabla-prueba-uno.routing';

@NgModule({
	declarations: [
		CreateTablaPruebaUnoPageComponent,
		IndexTablaPruebaUnoPageComponent,
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
		TablaPruebaUnoRouting
	],
	providers: [
		provideNgxMask(),
		{provide: ValidationService }
	]
})

export class TablaPruebaUnoModule { }
