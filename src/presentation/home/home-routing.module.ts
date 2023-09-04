import { PerfilPageComponent } from './perfil/perfil-page.component';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAplicacionComponent } from './components/menu-aplicacion/menu-aplicacion.component';
import { AuthGuard } from '../app/shared/guards/auth.guard';


const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', component: AplicacionComponent
  },
  {
    path: 'perfil', component: PerfilPageComponent
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
