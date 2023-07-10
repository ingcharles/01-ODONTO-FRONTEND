import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AGeneralService } from '../domain/general/services/a-general-service';
import { GeneralService } from './general/services/general.service';
import { PersonaMapper } from './general/mappers/persona.mapper';
import { httpInterceptorProviders } from '../base/interceptors/http.interceptor';
import { AuthService } from './login/services/auth.service';



@NgModule({
    declarations: [],
    providers: [

        //CrcaMapper,providers: [],

        PersonaMapper,
        { provide: AGeneralService, useClass: GeneralService }
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class DataModule { }
