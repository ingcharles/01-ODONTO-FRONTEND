import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePacientePageComponent } from './components/create-paciente-page/create-paciente-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexPacientePageComponent } from './components/index-paciente-page/index-paciente-page.component';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({

  declarations: [
    CreatePacientePageComponent,
    IndexPacientePageComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbDatepicker,
    NgbModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PacienteModule { }
