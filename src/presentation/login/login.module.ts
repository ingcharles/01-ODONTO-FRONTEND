import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/create/pages/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from '../base/services/validation.service';




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
  providers: [{provide: ValidationService}]
})
export class LoginModule { }
