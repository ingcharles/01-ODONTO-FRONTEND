import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { ValidationService } from '../base/services/validation.service';


@NgModule({
  imports: [

      CommonModule,
    RegisterRoutingModule,
      FormsModule,
      ReactiveFormsModule

  ],
  declarations: [RegisterComponent],
  providers: [

    { provide: ValidationService }/*, { provide: AuthService }, { provide: AuthMapper }*/]
})
export class RegisterModule { }
