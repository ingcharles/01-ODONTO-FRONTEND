import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent

  },
   {
    path: 'login',
    loadChildren: () =>
      import('../presentation/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../presentation/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('../presentation/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule)
  },
  {
    path: 'change-password',
    loadChildren: () =>
      import('../presentation/change-password/change-password.module').then((m) => m.ChangePasswordModule)
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
