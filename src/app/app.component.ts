import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';
import { Globals } from 'src/presentation/base/services/globals';
import '@angular/localize/init';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: '../presentation/template/template.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // HTTP_PROVIDERS,
    Globals
  ]
})
export class AppComponent {
  title = '01-ODONTO-FRONTEND';

  constructor(private _storageUseCase: StorageUseCase, private _globals: Globals) {
    // this.response = new Response();
    // document.getElementById("index-spinner").style.display = "none";

      // locale(navigator.language);


  }

  get getUserName(): string {

    return this._globals.userName.getValue();
  }
  get getOwner(): boolean {

    return this._globals.owner.getValue();
  }


  // logout() {

  // }
  logout = () => {
    this._storageUseCase.cleanUserStorage();
    // sessionStorage.removeItem("access_token");
    this._globals.refirectToPages('login');
  }
  clearCache() {

  }

}
