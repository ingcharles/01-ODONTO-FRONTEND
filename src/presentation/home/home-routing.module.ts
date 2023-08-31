import { AplicacionPageComponent } from './components/aplicacion/aplicacion-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/shared/guards/auth.guard';
import { MenuAplicacionPageComponent } from './components/menu-aplicacion/menu-aplicacion-page.component';


const routes: Routes = [
  {
    // canActivate: [AuthGuard],
    path: '', component: AplicacionPageComponent
  },
  {
    path: 'menu-aplicacion', component: MenuAplicacionPageComponent
  },
  // {
  //   /* Ruta para la */
  //   path: 'forgot-password', component: HomeComponent
  // },


  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
