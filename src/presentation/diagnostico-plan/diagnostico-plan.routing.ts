import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDiagnosticoPlanPageComponent } from './components/create-diagnostico-plan-page/create-diagnostico-plan-page.component';
import { CreateDiagnosticoPlanComponent } from './components/create-diagnostico-plan/create-diagnostico-plan.component';

const routes: Routes = [
  {
    path: 'create-diagnosis-plan/:id', component: CreateDiagnosticoPlanComponent
  },
  {
    /* Ruta para la */
    path: 'create-diagnosis-plan-page/:id', component: CreateDiagnosticoPlanPageComponent
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
export class DiagnosticoPlanRouting { }

