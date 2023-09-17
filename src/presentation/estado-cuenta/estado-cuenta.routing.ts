import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexEstadoCuentaPageComponent } from './index-estado-cuenta-page/index-estado-cuenta-page.component';
import { CreateEstadoCuentaPageComponent } from './create-estado-cuenta-page/create-estado-cuenta-page.component';


const routes: Routes = [
  {
    path: ':status', component: IndexEstadoCuentaPageComponent
  },
  {
    path: ':id/:status', component: CreateEstadoCuentaPageComponent
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
export class EstadoCuentaRouting { }
