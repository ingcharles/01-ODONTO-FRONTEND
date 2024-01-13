import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AGeneralService } from '../domain/general/services/a-general-service';
import { GeneralService } from './general/services/general.service';
import { PersonaMapper } from './general/mappers/persona.mapper';
import { httpInterceptorProviders } from '../base/interceptors/http.interceptor';
import { AuthService } from './login/services/auth.service';
import { AuthMapper } from './login/mappers/auth.mapper';
import { TablaPruebaUseCase } from 'src/domain/tabla-prueba/usesCases/tabla-prueba.usecase';
import { TablaPruebaService } from './tabla-prueba/services/tabla-prueba.services';



@NgModule({
    declarations: [],
    providers: [

        //CrcaMapper,providers: [],

        PersonaMapper,
      AuthMapper,

        { provide: GeneralService},
        // { provide: TablaPruebaService }
        // { provide: TablaPruebaService },
        // { provide: TablaPruebaUseCase }
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class DataModule { }
