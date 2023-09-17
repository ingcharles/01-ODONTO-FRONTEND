import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDiagnosticoPlanPageComponent } from './components/create-diagnostico-plan-page/create-diagnostico-plan-page.component';
import { ConsultaModule } from '../consulta/consulta.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiagnosticoPlanRouting } from './diagnostico-plan.routing';
import { IndexDiagnosticoPlanPageComponent } from './components/index-diagnostico-plan-page/index-diagnostico-plan-page.component';



@NgModule({
  declarations: [
    CreateDiagnosticoPlanPageComponent,
    IndexDiagnosticoPlanPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ConsultaModule,
    DiagnosticoPlanRouting
  ],
  exports: [
  CreateDiagnosticoPlanPageComponent
  ]
})
export class DiagnosticoPlanModule { }
