
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/data/login/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,


  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // providers: [httpInterceptorProviders,  AuthService],
})
export class PagesModule {
}
