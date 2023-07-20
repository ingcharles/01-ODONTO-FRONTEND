import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    /* Ruta para la */
    path: 'login', component: LoginComponent
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
export class LoginRoutingModule { }
