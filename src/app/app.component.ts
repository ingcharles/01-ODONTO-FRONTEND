import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';
import { Globals } from 'src/presentation/base/services/globals';
import '@angular/localize/init';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { IAplicacionRsViewModel } from 'src/domain/login/viewModels/i-aplicaciones.viewModel';
// import $ from 'jquery';
// import * as aaa from '../js/plataforma'
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: '../presentation/template/template2.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // HTTP_PROVIDERS,
    Globals
  ]
})
export class AppComponent {
  title = '01-ODONTO-FRONTEND';

  constructor(private _storageUseCase: StorageUseCase, private _globals: Globals, private _router: Router, private _authUseCase: AuthUseCase) {
    // this.response = new Response();
    // document.getElementById("index-spinner").style.display = "none";

      // locale(navigator.language);


  }


  aplicacion: IAplicacionRsViewModel[] = [];


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

  ngOnInit(): void {
    // $(document).ready(function (): void  {
    //   console.log("document.getElementById");
      // var aa: Boolean = aaa.numeroALetras();




   // });


    // console.log("this._authUseCase.isLoggedIn()", this._authUseCase.isLoggedIn());
    // if (this._storageUseCase.isLoggedIn()) {

      const userData = this._storageUseCase.getUserStorage();
      console.log("userData!.userId", userData!.userId)
      this._authUseCase.aplicacion({ codigoUsuario: 1 }).then(obs => {
        //this._loaderService.display(true);
        obs.subscribe((resultAplicacion) => {

          //this._loaderService.display(false);
          // console.log("result",result);
          if (resultAplicacion.ok) {
            this.aplicacion = resultAplicacion.data!;
            console.log("resultAplicacion", resultAplicacion);
          }
        })
      });
      // this.isLoggedIn = true;
      // // this.roles = this._authUseCase.getUser().roles;
      // this.refirectToPages('');
    }
  // }


}
