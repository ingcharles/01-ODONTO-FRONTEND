import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from '../base/services/validation.service';
import { AuthService } from 'src/data/login/services/auth.service';
import { AuthMapper } from 'src/data/login/mappers/auth.mapper';
import { Globals } from '../base/services/globals';

@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotPasswordComponent],
  providers: [

    ValidationService, AuthService, AuthMapper, Globals]
})
export class ForgotPasswordModule { }
