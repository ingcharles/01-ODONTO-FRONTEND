import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-menu-aplicacion-page',
  templateUrl: './menu-aplicacion-page.component.html',
  styleUrls: ['./menu-aplicacion-page.component.css']
})
export class MenuAplicacionPageComponent {
  //@ViewChild(HomeComponent) childCreateActivo!: HomeComponent

  @Input() inputMenu: any;

}
