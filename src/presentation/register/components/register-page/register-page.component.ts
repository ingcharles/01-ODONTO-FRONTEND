
  import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { IRegisterViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { messages } from 'src/presentation/base/messages';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { Globals } from 'src/presentation/base/services/globals';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { ValidationService } from 'src/presentation/base/services/validation.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(public _fb: FormBuilder, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _authUseCase: AuthUseCase, private _router: Router, private _globals: Globals) { }

  //* obtener los mensajes de la alertas configuradas en base/messages.ts
  public menssage = messages;

  registerToggled: string = "toggled";
  registerForm = this._fb.group({
    ci: [null, [Validators.required, Validators.minLength(10)]],
    names: [null, [Validators.required, Validators.maxLength(100)]],
    lastNames: [null, [Validators.required, Validators.maxLength(100)]],
    email: [null, [Validators.required, Validators.pattern(this._validatorService.emailPattern)]],
    password: [null, [Validators.required, Validators.minLength(8), this.createPasswordStrengthValidator()]],
    confirmPassword: [null],
    licenseAgreement: [false],
    isProfesional: [null],
    isClinic: [null]
  });

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

  ngOnInit() {
  }


  // register() {
  //   this.appGlobals.setIsRequestingGlobal(true);
  //   this.isRequesting = true;
  //   if (/*this.user.LicenseAgreement && (*/this.user.ImProfesional || this.user.IHaveClinic/*)*/) {
  //     this.user.ConfirmPassword = this.user.Password;
  //     this.user.LicenseAgreement = true;
  //     this.loginService
  //       .register(this.user)
  //       .then(response => {
  //         if (response.Code != "ERROR") {
  //           this.login();
  //         }
  //         else {
  //           this.error = true;
  //           this.appGlobals.setLoginStatus(false);
  //           localStorage.setItem("token", "");
  //           this.response.Message = response.Message;
  //           this.isRequesting = false;
  //           this.appGlobals.setIsRequestingGlobal(false);
  //           this.registerToggled = "toggled";
  //           this.loginToggled = "";
  //         }
  //       })
  //       .catch(error => {
  //         this.appGlobals.setLoginStatus(false);
  //         this.error = true;
  //         this.isRequesting = false;
  //         this.appGlobals.setIsRequestingGlobal(false);
  //         this.registerToggled = "toggled";
  //         this.loginToggled = "";
  //       });
  //   } else {
  //     this.error = true;
  //     this.isRequesting = false;
  //     this.appGlobals.setIsRequestingGlobal(false);
  //     this.registerToggled = "toggled";
  //     this.response.Message = "Debe cumplir los Requerimientos";
  //   }
  // }

  //public isRequesting: boolean = false;
  register() {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
      return;
    }

    this._globals.setIsRequestingGlobal(true);
    //this.isRequesting = true;
    if (this.registerForm.value['isProfesional'] || this.registerForm.value['isClinic']) {
      this.registerForm.get('password')!.patchValue(this.registerForm.get('password')!.value);
      //formGroup.get('codigoCatalogoTipoAportanteCrca')?.value;

      this.registerForm.get('licenseAgreement')!.setValue(true);

      //* se ejecuta el servicio solo si no cumple con el if anterior
      //* esto siempre y cuando viene por Nuevo Crca Numerario
      this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
        this._authUseCase.register(this.registerForm.value as IRegisterViewModel).then(obs => {
          this._loaderService.display(true);
          obs.subscribe((result) => {

            this._loaderService.display(false);
            if (result.ok) {
              console.log("result.message = " + result);
              // this._authUseCase.saveUserStorage(result.data);
              // this.isLoginFailed = false;
              // this.isLoggedIn = true;
              // this.roles = this._authUseCase.getUserStorage().roles;
              // console.log('roles', this.roles);
              this._globals.setLoginStatus(false);
              this._globals.setIsRequestingGlobal(false);
              //this.redirectLogin();
              this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
              //  this.loginForm.get('codigoCrca')!.patchValue(result.data?.codigoCrca);

            } else {
              //this.errorMessage = err.error.message;
              // console.log("result.falos= " + result.ok);
              // this.isLoginFailed = true;
              this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
            }
          })
        }).catch(err => {
          this._globals.setLoginStatus(false);
          // this.error = true;
          // this.isRequesting = false;
          this._globals.setIsRequestingGlobal(false);
          // this.registerToggled = "toggled";
          // this.loginToggled = "";
        });
      });


      // //this.user.LicenseAgreement = true;
      // this.loginService
      //   .register(this.user)
      //   .then(response => {
      //     if (response.Code != "ERROR") {
      //       this.login();
      //     }
      //     else {
      //       this.error = true;
      //       this.appGlobals.setLoginStatus(false);
      //       localStorage.setItem("token", "");
      //       this.response.Message = response.Message;
      //       this.isRequesting = false;
      //       this.appGlobals.setIsRequestingGlobal(false);
      //       this.registerToggled = "toggled";
      //       this.loginToggled = "";
      //     }
      //   })
      //   .catch(error => {
      //     this.appGlobals.setLoginStatus(false);
      //     this.error = true;
      //     this.isRequesting = false;
      //     this.appGlobals.setIsRequestingGlobal(false);
      //     this.registerToggled = "toggled";
      //     this.loginToggled = "";
      //   });
    } else {
      // this.error = true;
      //this.isRequesting = false;
      this._globals.setIsRequestingGlobal(false);
      this.registerToggled = "toggled";
      //this.response.Message = "Debe cumplir los Requerimientos";
    }
  }
  refirectToPages(value: string): void {
    this._router.navigate(['/' + value]);
  }


  // redirectLogin(): void {
  //   this._router.navigate(['/login']);
  //   // this._router.navigateByUrl('/');
  // }

  // showBlock(value: string): void {
  //   this.initVariables();
  //   switch (value) {
  //     // case "login":
  //     //   this.loginToggled = "toggled";
  //     //   break;
  //      case "register":
  //       this.registerToggled = "toggled";
  //      break;
  //     // case "forget-password":
  //     //   this.forgetPasswordToggled = "toggled";
  //     //   break;
  //     // case "change-password":
  //     //   this.changePasswordToggled = "toggled";
  //     //   break;
  //   }
  // }
  initVariables() {
    this.registerToggled = "";
    // this.registerToggled = "";
    // this.forgetPasswordToggled = "";
    // this.changePasswordToggled = "";
    // this.noneToggled = "";
  }
  //* se ejecuta el servicio solo si no cumple con el if anterior
  //* esto siempre y cuando viene por Nuevo Crca Numerario
  //   this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
  //     this._authUseCase.login(this.loginForm.value as IAuthViewModel).then(obs => {
  //       this._loaderService.display(true);
  //       obs.subscribe((result) => {

  //         this._loaderService.display(false);
  //         if (result.ok) {
  //           console.log("result.message = " + result);
  //           this._authUseCase.saveUserStorage(result.data);
  //           this.isLoginFailed = false;
  //           this.isLoggedIn = true;
  //           this.roles = this._authUseCase.getUserStorage().roles;
  //           console.log('roles', this.roles);
  //           this.redirectHome();
  //           this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
  //           //  this.loginForm.get('codigoCrca')!.patchValue(result.data?.codigoCrca);

  //         } else {
  //           //this.errorMessage = err.error.message;
  //           console.log("result.falos= " + result.ok);
  //           this.isLoginFailed = true;
  //           this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
  //         }
  //       })
  //     });
  //   });
  //   return;


}
