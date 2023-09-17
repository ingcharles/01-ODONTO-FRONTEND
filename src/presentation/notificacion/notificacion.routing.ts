
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotificacionPageComponent } from './components/create-notificacion-page/create-notificacion-page.component';


const routes: Routes = [
  {
    path: '', component: CreateNotificacionPageComponent
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
export class NotificacionRouting { }

