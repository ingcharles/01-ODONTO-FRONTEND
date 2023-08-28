import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';
import { Router } from '@angular/router';

@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {

  // constructor(/*public _fb: FormBuilder, public _validatorService: ValidationService,
  //    private _alertService: AlertsService, private _loaderService: LoaderService,*/
  //   private _authUseCase: AuthUseCase, private _storageUseCase: StorageUseCase,
  //   private _router: Router) { }





}
