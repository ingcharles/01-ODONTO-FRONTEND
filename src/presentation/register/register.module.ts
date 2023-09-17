import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { ValidationService } from '../base/services/validation.service';
import { AuthMapper } from 'src/data/login/mappers/auth.mapper';
import { AuthService } from 'src/data/login/services/auth.service';
import { Globals } from '../base/services/globals';
import { RegisterPageComponent } from './components/register-page/register-page.component';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [RegisterPageComponent],
  providers: [

    ValidationService, AuthService, AuthMapper, Globals]
})
export class RegisterModule { }
