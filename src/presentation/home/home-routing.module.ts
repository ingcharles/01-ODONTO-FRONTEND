import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../app/shared/guards/auth.guard';
import { MenuAplicacionComponent } from './components/menu-aplicacion/menu-aplicacion.component';


const routes: Routes = [
  {
    // canActivate: [AuthGuard],
    path: '', component: HomeComponent
  },
  {
    path: 'menu-aplicacion', component: MenuAplicacionComponent
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
