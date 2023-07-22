import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


const routes: Routes = [
  {
    path: '', component: ChangePasswordComponent
  },
  {
    /* Ruta para la */
    path: 'change-password', component: ChangePasswordComponent
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
export class ChangePasswordRoutingModule { }
