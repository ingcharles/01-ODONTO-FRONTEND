import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCalendarComponent } from './components/index-calendar/index-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarsRoutingModule } from './charts-routing.module';



@NgModule({
  declarations: [
    IndexCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarsRoutingModule,
    FullCalendarModule
  ]
})
export class CalendarsModule { }
