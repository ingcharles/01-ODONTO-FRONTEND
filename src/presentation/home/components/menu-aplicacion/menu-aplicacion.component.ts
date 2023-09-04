import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-menu-aplicacion',
  templateUrl: './menu-aplicacion.component.html',
  styleUrls: ['./menu-aplicacion.component.css']
})
export class MenuAplicacionComponent {
  //@ViewChild(HomeComponent) childCreateActivo!: HomeComponent

  @Input() inputMenu: any;

}
