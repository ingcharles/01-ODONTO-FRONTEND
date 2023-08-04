import { Component } from '@angular/core';
import { Globals } from 'src/presentation/base/services/globals';

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

  constructor(public _globals: Globals) {
    // this.response = new Response();
    // document.getElementById("index-spinner").style.display = "none";
  }

  logout(){

  }

  clearCache(){

  }
}
