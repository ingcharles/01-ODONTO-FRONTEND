
import { AplicacionComponent } from '../presentation/home/components/aplicacion/aplicacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/presentation/shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: AplicacionComponent,
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
  {
    path: 'treatments',
    loadChildren: () =>
      import('../presentation/tratamiento/tratamiento.module').then((m) => m.TratamientoModule)
  },
  {
    path: 'odontogram',
    loadChildren: () =>
      import('../presentation/odontograma/odontograma.module').then((m) => m.OdontogramaModule)
  },
  {
    path: 'appoitments',
    loadChildren: () =>
      import('../presentation/agendar-cita/agendar-cita.module').then((m) => m.AgendarCitaModule)
  },
  {
    path: 'diagnosis',
    loadChildren: () =>
      import('../presentation/diagnostico-plan/diagnostico-plan.module').then((m) => m.DiagnosticoPlanModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../presentation/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('../presentation/calendario/calendario.module').then((m) => m.CalendarioModule),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('../presentation/empleado/empleado.module').then((m) => m.EmpleadoModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('../presentation/notificacion/notificacion.module').then((m) => m.NotificacionModule),
  },
    {
      path: 'clinics',
    loadChildren: () =>
      import('../presentation/clinica/clinica.module').then((m) => m.ClinicaModule),
  },
  {
    path: 'accounting-all',
    loadChildren: () =>
      import('../presentation/estado-cuenta/estado-cuenta.module').then((m) => m.EstadoCuentaModule),
  },
  {
    path: 'accounting',
    loadChildren: () =>
      import('../presentation/estado-cuenta/estado-cuenta.module').then((m) => m.EstadoCuentaModule),
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
