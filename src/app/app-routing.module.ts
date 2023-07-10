import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/presentation/login/components/create/pages/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
//   path: '',
//   redirectTo: '/login',
//   pathMatch: 'full'
// },
//   // {
//   //   path: 'login',
//   //   component: LoginComponent,
//   // },
//   {
//     path: 'login',
//     loadChildren: () =>
//       import('../presentation/login/login.module').then((m) => m.LoginModule)
//   },

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
