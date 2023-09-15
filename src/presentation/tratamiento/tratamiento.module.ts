import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexTratramientoPageComponent } from './components/index-tratramiento-page/index-tratramiento-page.component';
import { CreateTratramientoPageComponent } from './components/create-tratramiento-page/create-tratramiento-page.component';
import { TratamientoRoutingModule } from './tratamiento-routing.module';



@NgModule({
  declarations: [
    IndexTratramientoPageComponent,
    CreateTratramientoPageComponent
  ],
  imports: [
    CommonModule,
    TratamientoRoutingModule
  ]
})
export class TratamientoModule { }
