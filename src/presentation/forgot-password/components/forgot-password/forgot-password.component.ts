import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { messages } from 'src/presentation/base/messages';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IAuthViewModel, IForgotPasswordViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css',
  ]
})


export class ForgotPasswordComponent {


  constructor(public _fb: FormBuilder, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _authUseCase: AuthUseCase, private _router: Router) { }
  //* obtener los mensajes de la alertas configuradas en base/messages.ts
  public menssage = messages;

  isLoggedIn: boolean  = false;
  isLoginFailed: boolean  = false;
  isSendEmail: boolean = false;
  roles: string[] = [];
  // @Input() user: UserModel = new UserModel();

  forgotPasswordToggled: string = "toggled";
  forgotPasswordForm = this._fb.group({
    email: ['', [Validators.required, Validators.minLength(10)]],

  });


  redirectHome(): void {
    this._router.navigate(['/']);
    // this._router.navigateByUrl('/');
  }

  login() {

    if (this.forgotPasswordForm.invalid) {
      console.log('invalid', this.forgotPasswordForm.invalid);
      this.forgotPasswordForm.markAllAsTouched();
      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
      return;
    }

    //* se ejecuta el servicio solo si no cumple con el if anterior
    //* esto siempre y cuando viene por Nuevo Crca Numerario
    this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
      this._authUseCase.forgotPassword(this.forgotPasswordForm.value as IForgotPasswordViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {

          this._loaderService.display(false);
          if (result.ok) {
            // console.log("result.message = " + result);
            // this._authUseCase.saveUserStorage(result.data);
            // this.isLoginFailed = false;
            // this.isLoggedIn = true;
            // this.roles = this._authUseCase.getUserStorage().roles;
            // console.log('roles', this.roles);
            this.redirectHome();
            this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);


          } else {

            // this.isLoginFailed = true;
            this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
          }
        })
      });
    });
    return;
  }

  showBlock(value: string): void {
    this.initVariables();
    switch (value) {
      // case "login":
      //   this.loginToggled = "toggled";
      //   break;
      // case "register":
      //   this.registerToggled = "toggled";
      //   break;
      case "forget-password":
       this.forgotPasswordToggled = "toggled";
       break;
      // case "change-password":
      //   this.changePasswordToggled = "toggled";
      //   break;
    }
  }

  initVariables() {
    this.forgotPasswordToggled = "";
    // this.registerToggled = "";
    // this.forgetPasswordToggled = "";
    // this.changePasswordToggled = "";
    // this.noneToggled = "";
  }
}

