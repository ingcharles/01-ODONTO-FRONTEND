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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  ]
})


export class LoginComponent {


  constructor(public _fb: FormBuilder, public _validatorService: ValidationService, private _alertService: AlertsService, private _loaderService: LoaderService, private _authUseCase: AuthUseCase, private _router: Router) { }
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
  //   loginForm = new FormGroup({
  //   name: new FormControl(this.user.id, [
  //     Validators.required,
  //     Validators.minLength(4),
  //     //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
  //   ]),
  //   // alterEgo: new FormControl(this.hero.alterEgo),
  //   // power: new FormControl(this.hero.power, Validators.required)
  // });

  // loginForm!: FormGroup;
  // ngOnInit(): void {


  // }

  // get name() { return this.heroForm.get('name'); }

  // get power() { return this.heroForm.get('power'); }

  // this.password = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern("[^ @]*@[^ @]*"),
  //   emailDomainValidator
  // ]);


  redirectHome(): void {
    this._router.navigate(['/']);
    // this._router.navigateByUrl('/');
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
      console.log('invalid', this.loginForm.invalid);
      this.loginForm.markAllAsTouched();
      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
      return;
    }

    //* se ejecuta el servicio solo si no cumple con el if anterior
    //* esto siempre y cuando viene por Nuevo Crca Numerario
    this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
      this._authUseCase.login(this.loginForm.value as IAuthViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {

          this._loaderService.display(false);
          if (result.ok) {
            console.log("result.message = " + result);
            this._authUseCase.saveUserStorage(result.data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this._authUseCase.getUserStorage().roles;
            console.log('roles', this.roles);
            this.redirectHome();
            this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
            //  this.loginForm.get('codigoCrca')!.patchValue(result.data?.codigoCrca);

          } else {
            //this.errorMessage = err.error.message;
            console.log("result.falos= " + result.ok);
            this.isLoginFailed = true;
            this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
          }
        })
      });
    });
    return;
  }
  // this._authService.login(aa).subscribe({
  //   next: (data1) => {
  //     let data: { username: string; password: string } = {
  //       username: 'string',
  //       password: 'password',
  //     };
  //     this.storageService.saveUser(data);

  //     this.isLoginFailed = false;
  //     this.isLoggedIn = true;
  //     this.roles = this.storageService.getUser().roles;
  //     console.log('roles', this.roles);
  //     this.redirectHome();
  //     //this.reloadPage();
  //   },
  //   error: (err) => {
  //     this.errorMessage = err.error.message;
  //     this.isLoginFailed = true;
  //   },
  // });


  // /**
  //    ** Método que permite guardar o actualizar crca en numerario
  //    *  @returns {Promise<void>}
  //    */
  // public async saveCrcaNumerario(): Promise<void> {
  //   //* verifica y muestra alerta si el formulario está completo y válido caso contrario muestra campos vacios
  //   if (this.formCrca.invalid) {
  //     this.formCrca.markAllAsTouched();
  //     this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, messages.isWarning);
  //     return;
  //   }

  //   if (this.codigoCatalogoFuenteIngreso === catalogo.COD_UNI_FUE_OP_AFI) {
  //     this.formCrca.get('afiliados')!.patchValue(this.dataExcelList);
  //     if (this.dataExcelList.length <= 0) {
  //       this._alertService.alertMessage(messages.advertenciaTitle, messages.documentoExcelVacio, messages.isWarning);
  //       return;
  //     }
  //   }

  //   //* verificar y muestra alerta que si el formulario tiene documentos de respaldos
  //   this.formCrca.get('documentos')!.patchValue(this.listFiles);
  //   if (this.listFiles.length <= 0) {
  //     this._alertService.alertMessage(messages.advertenciaTitle, messages.documentosRespaldosVacios, messages.isWarning);
  //     return;
  //   }

  //   //* variables con todos lo campos que necesita el servicio
  //   //* entra al if si existe el codigoCrca esta vacio --- Editar Crca Numerario
  //   if (this.currentCrca.codigoCrca) {
  //     this._alertService.alertConfirAndButton(messages.confirmacionTitle, messages.confirmUpdate, () => {
  //       this._updateCrcaUseCase.updateCrcaNumerario(this.currentCrca as ICrcaFormViewModel).then(obs => {
  //         this._loaderService.display(true);
  //         obs.subscribe((result) => {
  //           this._loaderService.display(false);
  //           this.isDisabledSaveCrca = false;
  //           if (result.ok) {
  //             this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
  //           } else {
  //             this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
  //           }
  //         })
  //       });
  //     }, () => { this.isDisabledSaveCrca = false; }, () => { this.isDisabledSaveCrca = true; });
  //     return;
  //   }

  //   //* se ejecuta el servicio solo si no cumple con el if anterior
  //   //* esto siempre y cuando viene por Nuevo Crca Numerario
  //   this._alertService.alertConfirAndButton(messages.confirmacionTitle, messages.confirmSave, () => {
  //     this._saveCrcaUseCase.saveCrcaNumerario(this.formCrca.value as ICrcaFormViewModel).then(obs => {
  //       this._loaderService.display(true);
  //       obs.subscribe((result) => {
  //         this._loaderService.display(false);
  //         if (result.ok) {
  //           this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
  //           this.formCrca.get('codigoCrca')!.patchValue(result.data?.codigoCrca);
  //           this.isVisibleGenerar = true;
  //           this.isVisibleCancelCrca = false;
  //           this.isVisibleClearCrca = false;
  //           this.isReadOnlyEdit = true;
  //           this.isVisibleEraserCrca = false;
  //           this.isDisabledLoadExcel = true;
  //           this.isVisibleClearAfiliado = false;
  //           this.isVisibleSaveCrca = false;
  //           this.isDisabledLoadPdf = true;
  //           this.isVisibleNumCrca = true;
  //         } else {
  //           this.isDisabledSaveCrca = false;
  //           this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
  //         }
  //       })
  //     });
  //   }, () => { this.isDisabledSaveCrca = false; }, () => { this.isDisabledSaveCrca = true; });
  //   return;
  // }


  // /**
  //  ** Método para salir del formulario y navegar a la pantalla principal
  //  *  @returns {void}
  //  */
  // public closeFormCrca(): void {
  //   //* navegar al formulario que esta configurado en app-routing.module.ts
  //   this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmCancel, () => {
  //     this.router.navigateByUrl('crca');
  //   });
  // }


  // /**
  //  ** Método que permite obtener el valor de campo aporte en
  //  *  @param {any} event que se ejecuta al cambiar el valor
  //  *  @returns {void}
  //  */
  // public changeAporteEn(event: any): void {
  //   if (event.selectedItem != null) {
  //     this.formCrca.get('lote')!.patchValue('');
  //     this.formCrca.get('numeroCuenta')!.patchValue('');
  //     this.formCrca.get('fechaTransferencia')!.patchValue('');
  //     this.formCrca.get('numeroCT')!.patchValue('');
  //     this.formCrca.get('codigoCatalogoBanco')!.patchValue(0);
  //     //this.formCrca.get('aporteEnOtros')!.patchValue('');

  //     const codigoUnicoAporteEn = event.selectedItem.codigoUnico;

  //     //* entra cuando el tipo de aporte sea cheque y transferencia
  //     if (codigoUnicoAporteEn === catalogo.COD_UNI_APORTE_EN_CHEQUE || codigoUnicoAporteEn === catalogo.COD_UNI_APORTE_EN_TRANSFERENCIA) {
  //       if (codigoUnicoAporteEn === catalogo.COD_UNI_APORTE_EN_TRANSFERENCIA) {
  //         this.isVisibleAporteEnT = true;
  //         document.getElementById("numeroCT")!.innerHTML = "Nro. Transferencia";
  //       } else {
  //         this.isVisibleAporteEnT = false;
  //         document.getElementById("numeroCT")!.innerHTML = "Nro. Cheque";
  //       }
  //       this.isVisibleAporteEnCT = true;
  //     } else {
  //       this.isVisibleAporteEnCT = false;
  //       this.isVisibleAporteEnT = false;
  //     }

  //     //* entra cuando el tipo de aporte sea cheque y transferencia
  //     if (codigoUnicoAporteEn === catalogo.COD_UNI_APORTE_EN_TARJETA_CREDITO || codigoUnicoAporteEn === catalogo.COD_UNI_APORTE_EN_TARJETA_DEBITO) {
  //       this.isVisibleAporteEnTCTD = true;
  //     } else {
  //       this.isVisibleAporteEnTCTD = false;
  //     }


  //   }
  // }


  // login(f: NgForm) {
  //   if (f.invalid) {
  //     console.log(f.value);
  //     f.validator
  //     //this.formCrca.markAllAsTouched();
  //      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, messages.isWarning);
  //     // return;
  //   }
  // };

  showBlock(value: string): void {
    this.initVariables();
    switch (value) {
      case "login":
        this.loginToggled = "toggled";
        break;
      // case "register":
      //   this.registerToggled = "toggled";
      //   break;
      // case "forget-password":
      //   this.forgetPasswordToggled = "toggled";
      //   break;
      // case "change-password":
      //   this.changePasswordToggled = "toggled";
      //   break;
    }
  }

  initVariables() {
    this.loginToggled = "";
    // this.registerToggled = "";
    // this.forgetPasswordToggled = "";
    // this.changePasswordToggled = "";
    // this.noneToggled = "";
  }
}

