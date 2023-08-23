import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePacienteComponent } from './components/create-paciente/create-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexPacienteComponent } from './components/index-paciente/index-paciente.component';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({

  declarations: [
    CreatePacienteComponent,
    IndexPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbDatepicker,
    NgbModule
  ]
})
export class PacienteModule { }
