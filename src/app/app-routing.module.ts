import { AplicacionPageComponent } from '../presentation/home/components/aplicacion/aplicacion-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/presentation/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AplicacionPageComponent,
    //component: AppComponent
  },
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
  {
    path: 'patiens',
    loadChildren: () =>
      import('../presentation/paciente/paciente.module').then((m) => m.PacienteModule)
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
