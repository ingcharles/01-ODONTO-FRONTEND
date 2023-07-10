import { Component, Input } from '@angular/core';
import { UserModel } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
]
})


export class LoginComponent {

  @Input() user: UserModel = new UserModel();

  loginToggled: string = "toggled";


  login() {};

  showBlock(value: string):void {
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

