import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateConsultaComponent } from './components/create-consulta/create-consulta.component';


@NgModule({
  declarations: [

    CreateConsultaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  CreateConsultaComponent
  ]
})
export class ConsultaModule { }
