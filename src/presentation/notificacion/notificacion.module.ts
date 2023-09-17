import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNotificacionPageComponent } from './components/create-notificacion-page/create-notificacion-page.component';
import { NotificacionRouting } from './notificacion.routing';



@NgModule({
  declarations: [
    CreateNotificacionPageComponent
  ],
  imports: [
    CommonModule,
    NotificacionRouting
  ]
})
export class NotificacionModule { }
