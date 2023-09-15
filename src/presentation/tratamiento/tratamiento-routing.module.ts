import { TratamientoModule } from './tratamiento.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTratramientoPageComponent } from './components/index-tratramiento-page/index-tratramiento-page.component';
import { CreateTratramientoPageComponent } from './components/create-tratramiento-page/create-tratramiento-page.component';
// import { CreatePacientePageComponent } from './components/create-paciente-page/create-paciente-page.component';
// import { IndexPacientePageComponent } from './components/index-paciente-page/index-paciente-page.component';


const routes: Routes = [
  {
    path: '', component: IndexTratramientoPageComponent
  },
  {
    /* Ruta para la */
    path: 'create-treatments/:id', component: CreateTratramientoPageComponent
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
export class TratamientoRoutingModule { }
