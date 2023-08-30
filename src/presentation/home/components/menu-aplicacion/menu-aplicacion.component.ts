import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-aplicacion',
  templateUrl: './menu-aplicacion.component.html',
  styleUrls: ['./menu-aplicacion.component.css']
})
export class MenuAplicacionComponent {

  @Input() varMenu: any;

}
