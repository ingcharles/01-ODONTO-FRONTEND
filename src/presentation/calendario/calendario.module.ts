import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioPageComponent } from './components/calendario-page/calendario-page.component';
import { CalendarioRouting } from './calendario.routing';



@NgModule({
  declarations: [
    CalendarioPageComponent
  ],
  imports: [
    CommonModule,
    CalendarioRouting
  ]
})
export class CalendarioModule { }
