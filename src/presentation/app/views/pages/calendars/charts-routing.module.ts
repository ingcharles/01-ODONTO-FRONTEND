import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCalendarComponent } from './components/index-calendar/index-calendar.component';



const routes: Routes = [
  {
    path: '',
    component: IndexCalendarComponent,
    data: {
      title: 'Calendario',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarsRoutingModule {}

