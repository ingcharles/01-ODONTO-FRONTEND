import { IMenuItemRsViewModel, IMenuRsViewModel } from './../domain/login/viewModels/i-menu.viewModel';
import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  templateUrl: '../presentation/template/template.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // HTTP_PROVIDERS,
    Globals
  ]
})
export class AppComponent {
  title = '01-ODONTO-FRONTEND';

  constructor(private _storageUseCase: StorageUseCase, private _globals: Globals, private _router: Router, private _authUseCase: AuthUseCase, private ref: ElementRef) {
    // this.response = new Response();
    // document.getElementById("index-spinner").style.display = "none";

    // locale(navigator.language);
    // _router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const tree = _router.parseUrl(_router.url);
    //     if (tree.fragment) {
    //       const element = document.querySelector("#" + tree.fragment);
    //       // if (element) { element.scrollIntoView(element!); }
    //     }
    //   }
    // });

  }

  menuItem: IMenuItemRsViewModel[] = []
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

  onPress() {
    console.log("clicked", this.ref.nativeElement);
    this._authUseCase.menu({ codigoAplicacion: 1, codigoUsuario: 1 }).then(obs => {
      //this._loaderService.display(true);
      obs.subscribe((resultMenu) => {

        //this._loaderService.display(false);
        // console.log("result",result);
        if (resultMenu.ok) {
          // this.menuItem = resultMenu.data!;
          console.log("resultMenu", resultMenu);
          const menu: any[] = []
          const menuItem: IMenuItemRsViewModel[] = []

          resultMenu.data!.forEach(element => {
            var item: any = {};
            // if (element.codigoPadre) {
            var codigo: number = element.codigo!; // id_opcion
            //var nombre: string = element.nombre!; // nombre_opcion
            // var icon = fila[k][2]; // icono
            // var url = fila[k][3]; // url
            var orden: number = 0; // orden
            var codigoPadre: any = element.codigoPadre; // id_padre


            const found = menuItem.find((obj) => {
              console.log("found", obj);
              if (obj !== undefined) {
                return obj.codigoPadre === codigoPadre;
              } else {
                return false;
              }
            });
            if (menuItem[codigoPadre]) {

              item = {
                codigo: element.codigo,
                nombre: element.nombre,
                // codigoPadre: element.codigoPadre,
                icono: element.icono,
                link: element.link,
                codigoPadre: element.codigoPadre,
                estado: element.estado,
              };
              if (!menuItem[codigoPadre].menuItem) {
                menuItem[codigoPadre].menuItem = [];
              }

              menuItem[codigoPadre].menuItem![menuItem[codigoPadre].menuItem!.length] = item;
              menuItem[codigo] = item;

            } else {

              menuItem[codigo] = {
                codigo: element.codigo,
                nombre: element.nombre,
                // codigoPadre: element.codigoPadre,
                icono: element.icono,
                link: element.link,
                codigoPadre: element.codigoPadre,
                estado: element.estado,

              };

              menu.push(menuItem[codigo]);

              // source.push(items.codigo);

            }


          });
          this.menuItem = menu!;
          console.log("source", menu);
        }
      })
    });

    // document.querySelector('#menuAplicacion')!.innerHTML = `<a (click)="this.goTo('/patiens')"  routerLinkActive="active">Contact</a>
    // <ul class="main-menu">
    //       <li class="active"><a [routerLink]="['/dashboard']"><i class="md fa-solid fa-house"></i> Inicio</a></li>
    //       <li>
    //         <!--[hidden]="!appGlobals.roleDoctor.getValue()"-->
    //         <a id="menu-calendar" [routerLink]="['/calendar']"><i class="md fa-solid fa-calendar-day"></i> Agenda</a>
    //       </li>
    //       <li class="sub-menu">
    //         <a href=""><i class="md fa-solid fa-users"></i> Pacientes</a>

    //         <ul>
    //           <li><a id="data-personal" class="menu-table" [routerLink]="['/patiens/create-patiens',1]"><i
    //                 class="md fa-solid fa-users"></i> Historias
    //               clínicas</a></li>
    //           <li><a id="data-personal" class="menu-table" [routerLink]="['/notifications']">Notificaciones</a></li>
    //         </ul>
    //       </li>
    //       <!-- [hidden]="!_globals.roleAdmin.getValue()" -->
    //       <li class="sub-menu">
    //         <a href=""><i class="md fa-solid fa-file-lines"></i> Reportes</a>

    //         <ul>
    //           <li><a class="menu-table" [routerLink]="['/accounting-all', 'all']">Estados de cuentas</a></li>
    //           <li><a class="menu-table" [routerLink]="['/charts/sale']">Ventas</a></li>
    //           <li><a class="menu-table" [routerLink]="['/billing']">Facturas</a></li>
    //           <!--li><a class="menu-table" [routerLink]="['/charts/appoitment']">Citas</a></li>
    //                         <li><a class="menu-table" [routerLink]="['/charts/patient']">Pacientes</a></li-->
    //         </ul>
    //       </li>
    //       <!-- [hidden]="!_globals.roleAdmin.getValue()" -->
    //       <li class="sub-menu">
    //         <a href=""><i class="md fa-solid fa-gear"></i> Configuración</a>

    //         <ul>
    //           <li><a class="menu-table" [routerLink]="['/clinics']">Clínica</a></li>
    //           <li><a class="menu-table" [routerLink]="['/employees']">Empleados</a></li>
    //           <li><a class="menu-table" [routerLink]="['/treatments']">Tratamientos</a></li>
    //         </ul>
    //       </li>

    //       <li>
    //         <a id="refresh" (click)="clearCache()"><i class="md md-refresh"></i> Actualizar versi&oacute;n</a>
    //       </li>
    //     </ul>
    // `;
    // '<object type="text/html" data="../presentation/home/components/menu-aplicacion/menu-aplicacion.component.html" ></object>';
    //document.querySelector('#comp-render').innerHTML = '<object type="text/html" data="mycomp.html" ></object>';
  }

  goTo(location: string): void {
    console.log('sss');
    // window.location.hash = '';
    // window.location.hash = location;
    // return
    this._router.navigateByUrl(location)
  }
  // ngAfterViewChecked():void {

  //     document.querySelector('#' + item.elementID);

  // }

  menuItem1: any = [{
    nombre: 'Canine1',
    codigo: 1,
    route: true,
    children:
      [
        {
          nombre: 'Dog1',
          codigo: 2,
          route: false
        },
        {
          nombre: 'Wolve1',
          codigo: 2,
          route: false
        }
      ]
  },
  {
    nombre: 'Canine2',
    route: true,
    codigo: 3,
    children:
      [
        {
          nombre: 'Dog2',
          route: false,
          codigo: 4,
        },
        {
          nombre: 'Wolve2',
          route: false,
          codigo: 4,
        }
      ]
  },
  ]
}
