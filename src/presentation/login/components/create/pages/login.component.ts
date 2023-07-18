import { Component, Directive, Input } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NgForm, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { messages } from 'src/presentation/base/messages';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { CreatePasswordStrengthValidator } from 'src/presentation/login/services/password-strength.validator';
import { AuthService } from 'src/data/login/services/auth.service';
import { IUathLoginViewModel } from 'src/domain/login/viewModels/i-auth-login.viewModel';


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


  constructor(public _fb: FormBuilder, public _validatorService: ValidationService, private _alertService: AlertsService, private _authService: AuthService) { }
  //* obtener los mensajes de la alertas configuradas en base/messages.ts
  public menssage = messages;

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



  login() {
    // if (this.loginForm.invalid) {
    //   // console.log(f.value);
    //   // f.validator
    //   //this.formCrca.markAllAsTouched();
    //   this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, messages.isWarning);
    //   // return;
    // }
    // if (this.loginForm.invalid) {
    //   console.log('invalid', this.loginForm.invalid);
    //   this.loginForm.markAllAsTouched();
    //   // this._alertService.alertMessage(messages.advertencia, messages.camposVacios, 'warning');
    //   return;
    // }

    // console.log('onSubmit', onsubmit);
     //const { ci, password } = this.loginForm.value;
    // console.log('username', username);
    const aa = this.loginForm.value as  IUathLoginViewModel;
    this._authService.login(aa).subscribe({
      next: (data1) => {
        let data: { username: string; password: string } = {
          username: 'string',
          password: 'password',
        };
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log('roles', this.roles);
        this.redirectHome();
        //this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  };


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

