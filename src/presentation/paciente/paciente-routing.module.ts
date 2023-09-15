import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePacientePageComponent } from './components/create-paciente-page/create-paciente-page.component';
import { IndexPacientePageComponent } from './components/index-paciente-page/index-paciente-page.component';


const routes: Routes = [
  {
    path: '', component: IndexPacientePageComponent
  },
  {
    /* Ruta para la */
    path: 'create-patiens/:id', component: CreatePacientePageComponent
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
export class PacienteRoutingModule { }
