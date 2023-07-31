import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../app/shared/guards/auth.guard';


const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', component: HomeComponent
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
