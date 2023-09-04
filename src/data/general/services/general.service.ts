import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AGeneralService } from '../../../domain/general/services/a-general-service';
import { IResponseStatusViewModel } from '../../../domain/general/viewModels/i-response-status.viewModel';
import { ICatalogoViewModel } from '../../../domain/general/viewModels/i-catalogo.viewModel';
import { IPersonaRSViewModel } from '../../../domain/general/viewModels/i-persona.viewModel';
import { PersonaMapper } from '../mappers/persona.mapper';
import { StatusResponseService } from 'src/data/base/status-response.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService extends AGeneralService {

  private url: string = environment.apiUrl;
  constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService, private _personaMapper: PersonaMapper) { super(); }

  public getCatalogoByCodPad(body: { codigoPadre: number }): Observable<ICatalogoViewModel[]> {
    const url = `${this.url}Catalogo/GetCatalogoByCodPad`
    return this._http.post<any>(url, body);
  }

  public getPersonaByCi(body: { cedulaIdentidad: string }): Observable<IPersonaRSViewModel> {
    const url = `${this.url}Persona/GetPersonaByCi`
    return this._http.post<any>(url, body).pipe(
      map((result) => {
        return this._personaMapper.mapPersonaByCiFrom(result);
      }),
      catchError(error => {
        return of(this._statusResponseService.error(error))
      })
    );

  }

  public getArchivoByCodTab(body: { codigoTabla: number, nombreTabla: string }): Observable<IResponseStatusViewModel> {
    const url = `${this.url}General/GetArchivoByCodTab`
    return this._http.post<any>(url, body).pipe(
      map(result => {
        return result;
      }),
      catchError(error => {
        return of(this._statusResponseService.error(error))
      })
    );
  }
}
