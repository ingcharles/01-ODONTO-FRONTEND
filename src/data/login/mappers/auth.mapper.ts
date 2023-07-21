


import { AMapper } from './a-mapper';
import { IAuthFromRsModel, IAuthToModel, IForgotPasswordFromRsModel, IForgotPasswordToModel, IRegisterFromRsModel, IRegisterToModel } from '../models/i-auth.model';
import { IAuthFromRsViewModel, IAuthViewModel, IForgotPasswordFromRsViewModel, IForgotPasswordViewModel, IRegisterFromRsViewModel, IRegisterViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';


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
      } : null
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
}
