import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from '../base/services/validation.service';
import { AuthService } from 'src/data/login/services/auth.service';
import { AuthMapper } from 'src/data/login/mappers/auth.mapper';
import { Globals } from '../base/services/globals';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

    { provide: ValidationService }, { provide: AuthService }, { provide: AuthMapper }, {provide: Globals}]
})
export class LoginModule { }
