import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from '../base/services/validation.service';
import { AuthService } from 'src/data/login/services/auth.service';
import { AuthMapper } from 'src/data/login/mappers/auth.mapper';
import { Globals } from '../base/services/globals';




@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

    { provide: ValidationService }, { provide: AuthService }, { provide: AuthMapper }, { provide: Globals }]
})
export class LoginModule { }
