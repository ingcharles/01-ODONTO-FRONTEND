import { LoaderService } from './../presentation/base/services/loader.service';
import { IMenuItemRsViewModel } from './../domain/login/viewModels/i-menu.viewModel';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';
import { Globals } from 'src/presentation/base/services/globals';
import '@angular/localize/init';
import { IAplicacionRsViewModel } from 'src/domain/login/viewModels/i-aplicaciones.viewModel';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AppService } from './app.service';
import { loadMessages, locale } from 'devextreme/localization';
import * as deMessages from "devextreme/localization/messages/es.json";
// import $ from 'jquery';
// import * as aaa from '../js/plataforma'
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    // HTTP_PROVIDERS,
    Globals
  ]
})
export class AppComponent {
  title = '01-ODONTO-FRONTEND';

  constructor(private _storageUseCase: StorageUseCase, private _globals: Globals,
    private _loaderService: LoaderService,
    private _appService: AppService, private ref: ChangeDetectorRef) {

    loadMessages(deMessages);
    locale(navigator.language);
  }

  showLoader: boolean = false;

  //public menuItem: IMenuItemRsViewModel[] = []
  aplicacion: IAplicacionRsViewModel[] = [];


  public get getMenuItem(): IMenuItemRsViewModel[] {
    return this._appService.getMenuItem;
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
  ngOnInit() {
    this._loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }


  ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }


}
