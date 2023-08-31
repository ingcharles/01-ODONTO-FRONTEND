import { AplicacionPageComponent } from './components/aplicacion/aplicacion-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { MenuAplicacionPageComponent } from './components/menu-aplicacion/menu-aplicacion-page.component';

@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MenuAplicacionPageComponent,
    AplicacionPageComponent
  ],
  exports: [MenuAplicacionPageComponent,],
  providers: []
})
export class HomeModule {



}
