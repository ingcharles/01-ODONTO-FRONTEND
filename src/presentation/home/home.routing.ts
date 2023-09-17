import { PerfilPageComponent } from './perfil/perfil-page.component';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAplicacionComponent } from './components/menu-aplicacion/menu-aplicacion.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';


const routes: Routes = [
  {
    canActivate: [AuthGuardService],
    path: '', component: AplicacionComponent
  },
  {
    path: 'profile', component: PerfilPageComponent
  },
  {
    path: 'menu-aplicacion', component: MenuAplicacionComponent
  },

  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting { }
