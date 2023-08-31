



import { AMapper } from './a-mapper';
import { IAuthFromRsModel, IAuthToModel, IForgotPasswordFromRsModel, IForgotPasswordToModel, IRefreshTokenFromRsModel, IRefreshTokenModel, IRegisterFromRsModel, IRegisterToModel } from '../models/i-auth.model';
import { IAuthFromRsViewModel, IAuthTokenRsViewModel, IAuthViewModel, IForgotPasswordFromRsViewModel, IForgotPasswordViewModel, IRegisterFromRsViewModel, IRegisterViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { IAplicacionFromRsViewModel, IAplicacionMenuRsViewModel, IAplicacionRsViewModel } from 'src/domain/login/viewModels/i-aplicaciones.viewModel';
import { IAplicacionFromModel, IAplicacionFromRsModel, IAplicacionMenuToModel, IAplicacionToModel } from '../models/i-aplicacion.model';
import { IMenuFromModel, IMenuFromRsModel, IMenuToModel } from '../models/i-menu.model';
import { IMenuFromRsViewModel } from 'src/domain/login/viewModels/i-menu.viewModel';


export class AuthMapper extends AMapper<any, any> {

  /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapLoginTo(item: IAuthViewModel): Promise<IAuthToModel> {
    const valor: IAuthToModel = {
      auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
      ci: item.ci,
      password: item.password,
    }
    return valor;
  }

  /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
  mapLoginFrom(item: IAuthFromRsModel): IAuthFromRsViewModel {
    console.log("item", item);
    const valor: IAuthFromRsViewModel = {
      message: item.message,
      statusCode: item.statusCode,
      ok: item.ok,
      data: item.data ? {
        codigoUsuario: item.data.codigoUsuario,
        nombreUsuario: item.data.nombreUsuario,
      } : null,
      token: item.token,
    }
    console.log("valor", valor);
    return valor;
  }


  /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapRegisterTo(item: IRegisterViewModel): Promise<IRegisterToModel> {
    const valor: IRegisterToModel = {
      auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
      names: item.names,
      lastNames: item.lastNames,
      ci: item.ci,
      email: item.email,
      password: item.password,
      confirmPassword: item.confirmPassword,
      licenseAgreement: item.licenseAgreement,
      isProfesional: item.isProfesional,
      isClinic: item.isClinic,
    }
    return valor;
  }

  /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
  mapRegisterFrom(item: IRegisterFromRsModel): IRegisterFromRsViewModel {
    console.log("item", item);
    const valor: IRegisterFromRsViewModel = {
      message: item.message,
      statusCode: item.statusCode,
      ok: item.ok,
      data: item.data ? {
        codigoUsuario: item.data.codigoUsuario,
      } : null
    }
    console.log("valor", valor);
    return valor;
  }

  /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapForgotPasswordTo(item: IForgotPasswordViewModel): Promise<IForgotPasswordToModel> {
    const valor: IForgotPasswordToModel = {
      auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
      email: item.email,
    }
    return valor;
  }

  /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
  mapForgotPasswordFrom(item: IForgotPasswordFromRsModel): IForgotPasswordFromRsViewModel {
    console.log("item", item);
    const valor: IForgotPasswordFromRsViewModel = {
      message: item.message,
      statusCode: item.statusCode,
      ok: item.ok,
      data: item.data ? {
        codigoUsuario: item.data.codigoUsuario,
      } : null
    }
    console.log("valor", valor);
    return valor;
  }

  /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapRefreshTokenTo(item: IAuthTokenRsViewModel): Promise<IRefreshTokenModel> {
    const valor: IRefreshTokenModel = {
      auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
      codigoUsuario: item.userId!,
      refreshToken: item.refreshToken!,
    }
    return valor;
  }

  /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
  mapRefreshTokenFrom(item: IRefreshTokenFromRsModel): IAuthFromRsViewModel {
    console.log("item", item);
    const valor: IAuthFromRsViewModel = {
      message: item.message,
      statusCode: item.statusCode,
      ok: item.ok,
      data: item.data ? {
        codigoUsuario: item.data.codigoUsuario,
        nombreUsuario: item.data.nombreUsuario,
      } : null,
      token: item.token ? {
        userId: item.data!.codigoUsuario,
        refreshToken: item.token.refreshToken,
        firstName: item.data!.nombreUsuario,
        accessToken: item.token.accessToken,
      } : null
    }
    // console.log("valor", valor);
    return valor;
  }

  /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapAplicacionTo(item: IAuthViewModel): Promise<IAuthToModel> {
    const valor: IAuthToModel = {
      auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
      codigoUsuario: item.codigoUsuario
    }
    return valor;
  }

  /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
  mapAplicacionFrom(param: IAplicacionFromRsModel): IAplicacionFromRsViewModel {
    console.log("item", param);
    return {
      ...param, data: param.data?.map((item: IAplicacionFromModel) => {
        return {
          codigo: item.codigo,
          nombre: item.nombre,
          descripcion: item.descripcion,
          icono: item.icono,
          color: item.color,
          nemonico: item.nemonico,
          estado: item.estado,
          codigoUsuario: item.codigoUsuario
        };
      })
    }
  }


  /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapMenuTo(item: IAplicacionMenuRsViewModel): Promise<IAplicacionMenuToModel> {
    const valor: IAplicacionMenuToModel = {
      auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
      codigoUsuario: item.codigoUsuario,
      codigoAplicacion: item.codigoAplicacion
    }
    return valor;
  }

  /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
  mapMenuFrom(param: IMenuFromRsModel): IMenuFromRsViewModel {
    console.log("item", param);
    return {
      ...param, data: param.data?.map((item: IMenuFromModel) => {
        return {
          codigo: item.codigo,
          nombre: item.nombre,
          descripcion: item.descripcion,
          icono: item.icono,
          link: item.link,
          codigoPadre: item.codigoPadre,
          estado: item.estado
        };
      })


    }

  }

}
