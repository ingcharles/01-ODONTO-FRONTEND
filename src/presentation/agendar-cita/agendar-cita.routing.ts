import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAgendarCitaPageComponent } from './components/create-agendar-cita-page/create-agendar-cita-page.component';

const routes: Routes = [
  {
    path: 'appoitments/:id/:start', component: CreateAgendarCitaPageComponent
  },

  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendarCitaRouting { }

