import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOdontogramaPageComponent } from './components/create-odontograma-page/create-odontograma-page.component';
import { OdontogramaRouting } from './odontograma.routing';

@NgModule({
  declarations: [
    CreateOdontogramaPageComponent,
  ],
  imports: [
    CommonModule,
    OdontogramaRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  CreateOdontogramaPageComponent
  ]
})
export class OdontogramaModule { }
