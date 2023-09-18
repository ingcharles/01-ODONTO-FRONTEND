import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexEmpleadoPageComponent } from './components/index-empleado-page/index-empleado-page.component';
import { CreateEmpleadoPageComponent } from './components/create-empleado-page/create-empleado-page.component';
import { EmpleadoRouting } from './empleado.routing';
import { IndexDataGridEmpleadoComponent } from './components/index-data-grid-empleado/index-data-grid-empleado.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateEmpleadoPageComponent,
    IndexEmpleadoPageComponent,
    IndexDataGridEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRouting,
    SharedModule
  ]
})
export class EmpleadoModule { }
