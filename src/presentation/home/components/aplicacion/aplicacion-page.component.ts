import { AppService } from '../../../../app/app.service';
import { LoaderService } from '../../../base/services/loader.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthUseCase } from 'src/domain/login/useCases/auth-usecase';
import { StorageUseCase } from 'src/domain/login/useCases/storage-usecase';
import { IAplicacionRsViewModel } from 'src/domain/login/viewModels/i-aplicaciones.viewModel';
import { IMenuItemRsViewModel } from 'src/domain/login/viewModels/i-menu.viewModel';

@Component({
  selector: 'home-aplicacion-page',
  templateUrl: './aplicacion-page.component.html',
  styleUrls: ['./aplicacion-page.component.css']
})
export class AplicacionPageComponent {
  constructor(private _storageUseCase: StorageUseCase, private _loaderService: LoaderService, private _appService: AppService, private _authUseCase: AuthUseCase) {

  }
  @Input() inputAplicacion: any;
  @Output() ouputOpenAplicacion: EventEmitter<any> = new EventEmitter();

  aplicacion: IAplicacionRsViewModel[] = [];
  ngOnInit(): void {

    //Obtiene el id del usuario logueado mediante session storage
    const userData = this._storageUseCase.getUserStorage();
    this._authUseCase.aplicacion({ codigoUsuario: userData!.userId }).then(obs => {
      this._loaderService.display(true);
      obs.subscribe((resultAplicacion) => {

        this._loaderService.display(false);
        // console.log("result",result);
        if (resultAplicacion.ok) {
          this.aplicacion = resultAplicacion.data!;
          console.log("resultAplicacion", resultAplicacion);
        }
      })
    });
  }

  openAplication(data: any): void {

    this._authUseCase.menu({ codigoAplicacion: data.codigo, codigoUsuario: data.codigoUsuario }).then(obs => {
      this._loaderService.display(true);
      obs.subscribe((resultMenu) => {

        this._loaderService.display(false);

        if (resultMenu.ok) {
          const menu: any[] = []
          const menuItem: IMenuItemRsViewModel[] = []
          resultMenu.data!.forEach(element => {
            var item: any = {};

            var codigo: number = element.codigo!;
            var codigoPadre: any = element.codigoPadre;


            const found = menuItem.find((obj) => {
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
                icono: element.icono,
                link: element.link,
                codigoPadre: element.codigoPadre,
                estado: element.estado,

              };

              menu.push(menuItem[codigo]);



            }


          });
          this._appService.setMenuItem = menu!;
          console.log("source", menu);
        }
      })
    });
  }

}
