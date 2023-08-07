import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/presentation/home/components/home/home.component';
import { AuthGuard } from 'src/presentation/app/shared/guards/auth.guard';

const routes: Routes = [
//   {
//     path: '',
//     // canActivate: [AuthGuard],
//     // component: HomeComponent
// component: AppComponent
//   },
  {
    path: 'home',

    loadChildren: () =>
      import('../presentation/home/home.module').then((m) => m.HomeModule)
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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
