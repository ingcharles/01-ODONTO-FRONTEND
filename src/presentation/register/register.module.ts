import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { ValidationService } from '../base/services/validation.service';
import { AuthMapper } from 'src/data/login/mappers/auth.mapper';
import { AuthService } from 'src/data/login/services/auth.service';
import { Globals } from '../base/services/globals';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [RegisterComponent],
  providers: [

    ValidationService, AuthService, AuthMapper, Globals]
})
export class RegisterModule { }
