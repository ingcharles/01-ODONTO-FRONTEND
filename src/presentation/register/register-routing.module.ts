import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {
    path: '', component: RegisterPageComponent
  },
  // {
  //   /* Ruta para la */
  //   path: 'register', component: RegisterComponent
  // },

  // {
  //   path: 'ejemplo', component: CRUDComponent
  // },
  {
    path: '**',
    redirectTo: '',
  }
  //   {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
