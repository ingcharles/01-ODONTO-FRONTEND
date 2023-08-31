import { Injectable } from '@angular/core';
import { IMenuItemRsViewModel } from 'src/domain/login/viewModels/i-menu.viewModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  menuItem: IMenuItemRsViewModel[] = [];

  public set setMenuItem(v: IMenuItemRsViewModel[]) {
    this.menuItem = v;
  }


  public get getMenuItem(): IMenuItemRsViewModel[] {
    return this.menuItem;
  }

}
