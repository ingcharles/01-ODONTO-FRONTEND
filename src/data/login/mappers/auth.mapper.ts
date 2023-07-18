

import { IAuthFromRsViewModel, IAuthViewModel } from 'src/domain/login/viewModels/i-auth.viewModel';
import { AMapper } from './a-mapper';
import { IAuthToModel } from '../models/i-auth.model';


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
  mapLoginFrom(item: any): IAuthFromRsViewModel {
        return {
            message: item.message,
            statusCode: item.statusCode,
            ok: item.ok,
            data: item.data ? {
                ci: item.data.ci,
                password: item.data.password
            } : null
        }
    }



}
