import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    /* Ruta para la */
    path: 'register', component: RegisterComponent
  },

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
