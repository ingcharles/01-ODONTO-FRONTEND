import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexEmpleadoPageComponent } from './components/index-empleado-page/index-empleado-page.component';
import { CreateEmpleadoPageComponent } from './components/create-empleado-page/create-empleado-page.component';
const routes: Routes = [
  {
    path: '', component: IndexEmpleadoPageComponent
  },
  {
    path: ':id', component: CreateEmpleadoPageComponent
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
export class EmpleadoRouting { }
