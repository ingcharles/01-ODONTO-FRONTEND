import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexEmpleadoPageComponent } from './components/index-empleado-page/index-empleado-page.component';
import { CreateEmpleadoPageComponent } from './components/create-empleado-page/create-empleado-page.component';
import { EmpleadoRouting } from './empleado.routing';



@NgModule({
  declarations: [
    CreateEmpleadoPageComponent,
    IndexEmpleadoPageComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRouting
  ]
})
export class EmpleadoModule { }
