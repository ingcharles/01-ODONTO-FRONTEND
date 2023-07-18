import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../data/login/services/auth.service';
import { StorageService } from '../../../../../data/login/services/storage.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { messages } from 'src/presentation/base/messages';
import { AlertsService } from 'src/presentation/base/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //* obtener los mensajes de la alertas configuradas en base/messages.ts
  public menssage = messages;

  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private fb: FormBuilder,
    private _alertService: AlertsService
  ) { }

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],

    // email: ['', Validators.required],
    // saleForces: []
  });

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.redirectHome();
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('invalid', this.loginForm.invalid);
      this.loginForm.markAllAsTouched();
      // this._alertService.alertMessage(messages.advertencia, messages.camposVacios, 'warning');
      return;
    }

    console.log('onSubmit', onsubmit);
    const { username, password } = this.form;
    console.log('username', username);
    this.authService.login(username, password).subscribe({
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
  }

  redirectHome(): void {
    this.router.navigate(['/']);
  }

  reloadPage(): void {
    window.location.reload();
  }

  /**
   ** Method que valida si el campo es valido
   * @param field string -> nombre del campo colocado el fieldControlName
   * @returns true o false
   */
  public isValidField(field: string): boolean | null {
    // obterner validacion de servicio
    return (
      this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].touched
    );
  }

  /**
   ** Method que valida si el campo es valido
   * @param field string -> nombre del campo colocado el fieldControlName
   * @returns true o false
   */
  public isValidFieldRequired(field: string): boolean | null {
    // obterner validacion de servicio
    return (
      this.loginForm.controls[field].errors?.['required'] &&
      this.loginForm.controls[field].touched
    );
  }

  /**
   ** Method que valida si el campo es valido
   * @param field string -> nombre del campo colocado el fieldControlName
   * @returns true o false
   */
  public isValidFieldMinlength(field: string): boolean | null {
    // obterner validacion de servicio
    return (
      this.loginForm.controls[field].errors?.['minlength'] &&
      this.loginForm.controls[field].touched
    );
  }
}
