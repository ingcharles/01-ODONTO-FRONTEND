import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEstadoCuentaPageComponent } from './create-estado-cuenta-page/create-estado-cuenta-page.component';
import { IndexEstadoCuentaPageComponent } from './index-estado-cuenta-page/index-estado-cuenta-page.component';
import { CreateDetailEstadoCuentaPageComponent } from './create-detail-estado-cuenta-page/create-detail-estado-cuenta-page.component';
import { EstadoCuentaRouting } from './estado-cuenta.routing';



@NgModule({
  declarations: [
    CreateEstadoCuentaPageComponent,
    IndexEstadoCuentaPageComponent,
    CreateDetailEstadoCuentaPageComponent
  ],
  imports: [
    CommonModule,
    EstadoCuentaRouting
  ]
})
export class EstadoCuentaModule { }
