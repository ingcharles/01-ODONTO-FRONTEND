
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';
import { MenuAplicacionComponent } from './components/menu-aplicacion/menu-aplicacion.component';
import { PerfilPageComponent } from './perfil/perfil-page.component';


@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MenuAplicacionComponent,
    AplicacionComponent,
    PerfilPageComponent
  ],
  exports: [MenuAplicacionComponent],
  providers: []
})
export class HomeModule {



}
