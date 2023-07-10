import { AMapper } from '../../../data/general/mappers/a-mapper';
import { IPersonaRSViewModel } from '../../../domain/general/viewModels/i-persona.viewModel';





export class PersonaMapper extends AMapper<any, any> {


    /** Recibe y mapea los datos que vienen desde el servicio  hacia la vista*/
    mapPersonaByCiFrom(item: any): IPersonaRSViewModel {
        return {
            message: item.message,
            statusCode: item.statusCode,
            ok: item.ok,
            data: item.data ? {
                codPersona: item.data.codigoPersona,
                cedula: item.data.cedulaIdentidad,
                nombres: item.data.apellidosNombres
            } : null
        }
    }



}
