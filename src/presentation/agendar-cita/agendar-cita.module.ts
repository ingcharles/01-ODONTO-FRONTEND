import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAgendarCitaPageComponent } from './components/create-agendar-cita-page/create-agendar-cita-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendarCitaRouting } from './agendar-cita.routing';



@NgModule({
  declarations: [
    CreateAgendarCitaPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgendarCitaRouting
  ]
})
export class AgendarCitaModule { }
