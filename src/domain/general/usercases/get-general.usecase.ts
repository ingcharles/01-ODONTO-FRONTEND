import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AGeneralService } from '../services/a-general-service';
import { IResponseStatusViewModel } from '../viewModels/i-response-status.viewModel';
import { ICatalogoViewModel } from '../viewModels/i-catalogo.viewModel';
import { IPersonaRSViewModel } from '../viewModels/i-persona.viewModel';


/**
 * Los casos de uso solo definen como se comporta nuestro sistema,
 * definiendo los datos de entrada necesarios, y cual será su salida.
 * Los cambios en esta capa no deberían afectar a las entidades,
 * al igual que los cambios en otras capas externas no deberían afectar
 * a los casos de uso.
 */

@Injectable({ providedIn: 'root' })
export class GetGeneralUseCase {
    constructor(private _aGeneralService: AGeneralService) { }

    public getCatalogoByCodPad(body: { codigoPadre: number }): Observable<ICatalogoViewModel[]> {
        return this._aGeneralService.getCatalogoByCodPad(body);
    }

    public getPersonaByCi(body: { cedulaIdentidad: string }): Observable<IPersonaRSViewModel> {
        return this._aGeneralService.getPersonaByCi(body);
    }

    public getArchivoByCodTab(body: { codigoTabla: number, nombreTabla: string }): Observable<IResponseStatusViewModel> {
        return this._aGeneralService.getArchivoByCodTab(body);
    }

}
