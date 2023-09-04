import { Component, Directive, Input } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AbstractControl, FormBuilder, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { messages } from 'src/presentation/base/messages';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { CreatePasswordStrengthValidator } from 'src/presentation/login/services/password-strength.validator';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IAuthViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { Route, Router } from '@angular/router';
import { Globals } from 'src/presentation/base/services/globals';
import { IAuthTokenRsViewModel } from '../../../../domain/login/viewModels/i-auth.viewModel';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';


@Directive({
  selector: "[passwordStrength]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthDirective,
    multi: true
  }]
})
export class PasswordStrengthDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return CreatePasswordStrengthValidator()(control);
  }
}
@Component({
  selector: 'login-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css',
  ]
})


export class LoginPageComponent {


  constructor(public _fb: FormBuilder, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _authUseCase: AuthUseCase, private _storageUseCase: StorageUseCase, private _router: Router, private _globals: Globals) { }

  //* obtener los mensajes de la alertas configuradas en base/messages.ts
  public menssage = messages;

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  @Input() user: UserModel = new UserModel();

  loginToggled: string = "toggled";
  loginForm = this._fb.group({
    ci: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8), this.createPasswordStrengthValidator()]],
  });



  ngOnInit(): void {
    // console.log("this._authUseCase.isLoggedIn()", this._authUseCase.isLoggedIn());
    if (this._storageUseCase.isLoggedIn()) {
      this.isLoggedIn = true;
      // this.roles = this._authUseCase.getUser().roles;
      this.refirectToPages('');
    }
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? { passwordStrength: true } : null;
    }
  }



  refirectToPages(value: string): void {
    this._router.navigate(['/' + value]);
  }

  login() {
    // if (this.loginForm.invalid) {
    //   // console.log(f.value);
    //   // f.validator
    //   //this.formCrca.markAllAsTouched();
    //   this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, messages.isWarning);
    //   // return;
    // }
    if (this.loginForm.invalid) {
      // console.log('invalid', this.loginForm.invalid);
      this.loginForm.markAllAsTouched();
      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
      return;
    }

    //* se ejecuta el servicio solo si no cumple con el if anterior
    //* esto siempre y cuando viene por Nuevo Crca Numerario
    //this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
    this._authUseCase.login(this.loginForm.value as IAuthViewModel).then(obs => {
      this._loaderService.display(true);
      this._globals.setLoginStatus(false);
      this.isLoginFailed = true;
      obs.subscribe((result) => {

        this._loaderService.display(false);
        // console.log("result",result);
        // console.log("result.falos= ", this._validatorService.isEmptyObject(result));
        if (result.ok) {



          result.token!.userId = result.data?.codigoUsuario!;
          result.token!.firstName = result.data?.nombreUsuario!;


          this._storageUseCase.saveUserStorage(result.token!);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this._storageUseCase.getUserStorage();
          this._globals.setUserName(result.data?.nombreUsuario!);
          // this.roles = this._authUseCase.getUserStorage().roles;
          // console.log('roles', this.roles);
          //this.redirectHome();


          this.refirectToPages('')


        } else {

          // if (this._validatorService.isEmptyObject(result)) {
          //   this._alertService.alertMessage(messages.advertenciaTitle, messages.serviceFail, messages.isWarning);
          //   return;
          // }
          //this.errorMessage = err.error.message;


          this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);

        }
      })
    }).catch(err => {
      this._globals.setLoginStatus(false);
      this._globals.setIsRequestingGlobal(false);
      console.log("try cath login failed");
    });
    // });
    //return;
  }

}

