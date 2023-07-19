

import { IAuthFromRsViewModel, IAuthViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { AMapper } from './a-mapper';
import { IAuthFromRsModel, IAuthToModel } from '../models/i-auth.model';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';
import { Observable } from 'rxjs';


export class AuthMapper extends AMapper<any, any> {

    /** Recibe y mapea los datos que vienen de la vista hacia el servicio */
  async mapLoginTo(item: IAuthViewModel): Promise<IAuthToModel> {

    const valor: IAuthToModel = {
            auditoria: "2edf8b3e2f5a424fa8333ba742154869|1202|151|192.168.1.1|Chrome|I|Guardar información del Crca en Numerario|01",
            ci: item.ci,
            password: item.password,
        }
    console.log("valor1", valor);
        return valor;

    }

  // async mapCrcaNumerarioTo(item: ICrcaFormViewModel): Promise<ICrcaNumerarioModel> {
    /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
   mapLoginFrom(item: IAuthFromRsModel): IAuthFromRsViewModel {
     console.log("item", item);
    const valor: IAuthFromRsViewModel = {
            message: item.message,
            statusCode: item.statusCode,
            ok: item.ok,
            data: item.data ? {
                codigoUsuario: item.data.codigoUsuario,
               // password: item.data.password
            } : null
        }
     console.log("valor", valor);
    return valor;
    }



}
