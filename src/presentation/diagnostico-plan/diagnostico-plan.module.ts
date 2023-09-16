import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDiagnosticoPlanPageComponent } from './components/create-diagnostico-plan-page/create-diagnostico-plan-page.component';
import { CreateDiagnosticoPlanComponent } from './components/create-diagnostico-plan/create-diagnostico-plan.component';
import { ConsultaModule } from '../consulta/consulta.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiagnosticoPlanRouting } from './diagnostico-plan.routing';



@NgModule({
  declarations: [
    CreateDiagnosticoPlanPageComponent,
    CreateDiagnosticoPlanComponent,
    CreateDiagnosticoPlanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ConsultaModule,
    DiagnosticoPlanRouting
  ]
})
export class DiagnosticoPlanModule { }
