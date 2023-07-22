import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { messages } from 'src/presentation/base/messages';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { IAuthViewModel, IForgotPasswordViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { Router } from '@angular/router';
import { Globals } from 'src/presentation/base/services/globals';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css',
  ]
})


export class ForgotPasswordComponent {


  constructor(public _fb: FormBuilder, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _authUseCase: AuthUseCase, private _router: Router, private _globals: Globals) { }
  //* obtener los mensajes de la alertas configuradas en base/messages.ts
  public menssage = messages;

  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  isSendEmail: boolean = false;
  roles: string[] = [];

  forgotPasswordForm = this._fb.group({
    ci: ['', [Validators.required, Validators.minLength(10)]],
    email: [null, [Validators.required, Validators.pattern(this._validatorService.emailPattern)]],

  });


  redirectHome(): void {
    this._router.navigate(['/']);
  }


  forgetPassword() {

    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
      return;
    }

    this._globals.setIsRequestingGlobal(true);

    //* se ejecuta el servicio solo si no cumple con el if anterior
    //* esto siempre y cuando viene por Nuevo Crca Numerario
    this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
      this._authUseCase.forgotPassword(this.forgotPasswordForm.value as IForgotPasswordViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {

          this._loaderService.display(false);
          if (result.ok) {
            this.isSendEmail = true;
            this.redirectHome();
            this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
            this._globals.setIsRequestingGlobal(false);

          } else {

            this._globals.setIsRequestingGlobal(false);
            this._globals.setLoginStatus(false);
            this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
          }
        })
      });
    });
  }

  refirectToPages(value: string): void {
    this._router.navigate(['/' + value]);

  }


}

