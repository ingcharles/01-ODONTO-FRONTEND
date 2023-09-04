import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    /* Ruta para la */
    path: 'login', component: LoginPageComponent
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
export class LoginRoutingModule { }
