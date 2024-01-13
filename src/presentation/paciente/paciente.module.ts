import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { DashboardPacientePageComponent } from './components/dashboard-paciente-page/dashboard-paciente-page.component';
import { DiagnosticoPlanModule } from '../diagnostico-plan/diagnostico-plan.module';
import { OdontogramaModule } from '../odontograma/odontograma.module';
import { ViewPacientePageComponent } from './components/view-paciente-page/view-paciente-page.component';
import { CreatePacientePageComponent } from './components/create-paciente-page/create-paciente-page.component';
import { IndexPacientePageComponent } from './components/index-paciente-page/index-paciente-page.component';
import { PacienteRouting } from './paciente.routing';


@NgModule({

  declarations: [
    CreatePacientePageComponent,
    IndexPacientePageComponent,
    DashboardPacientePageComponent,
    ViewPacientePageComponent
  ],
  imports: [
    CommonModule,
    PacienteRouting,
    FormsModule,
    ReactiveFormsModule,
    OdontogramaModule,
    DiagnosticoPlanModule,
    SharedModule,
    NgbDatepicker,
    NgbModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PacienteModule { }
