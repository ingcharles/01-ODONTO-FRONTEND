
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOdontogramaPageComponent } from './components/create-odontograma-page/create-odontograma-page.component';


const routes: Routes = [
  // {
  //   path: '', component: IndexTratramientoPageComponent
  // },
  {
    /* Ruta para la */
    path: 'odontogram/:id/:age', component: CreateOdontogramaPageComponent
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
export class OdontogramaRoutingModule { }

54.
