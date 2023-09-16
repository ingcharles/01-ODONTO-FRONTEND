import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdontogramaRoutingModule } from './odontograma-routing.module';
import { CreateOdontogramaPageComponent } from './components/create-odontograma-page/create-odontograma-page.component';



@NgModule({
  declarations: [
    CreateOdontogramaPageComponent,
  ],
  imports: [
    CommonModule,
    OdontogramaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OdontogramaModule { }
