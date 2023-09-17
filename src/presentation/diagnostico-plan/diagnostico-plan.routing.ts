import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDiagnosticoPlanPageComponent } from './components/index-diagnostico-plan-page/index-diagnostico-plan-page.component';
import { CreateDiagnosticoPlanPageComponent } from './components/create-diagnostico-plan-page/create-diagnostico-plan-page.component';

const routes: Routes = [
  {
    path: 'index-diagnosis-plan-page/:id', component: IndexDiagnosticoPlanPageComponent
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

