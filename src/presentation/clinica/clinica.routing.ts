import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClinicaPageComponent } from './components/create-clinica-page/create-clinica-page.component';
const routes: Routes = [
  {
    path: '', component: CreateClinicaPageComponent
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
export class ClinicaRouting { }
