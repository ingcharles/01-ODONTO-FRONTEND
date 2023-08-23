import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePacienteComponent } from './components/create-paciente/create-paciente.component';


const routes: Routes = [
  // {
  //   path: '', component: LoginComponent
  // },
  {
    /* Ruta para la */
    path: 'create-patiens/:id', component: CreatePacienteComponent
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
