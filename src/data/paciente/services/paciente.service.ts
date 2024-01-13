import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatusResponseService } from 'src/data/base/status-response.service';
// import { APacienteService } from 'src/domain/paciente/a-services/a-paciente.service';
import { ISavePacienteFromRsViewModel, ISavePacienteViewModel, IGetPacienteByIdFromRsViewModel, IGetPacienteByIdViewModel, IGetPacienteFromRsViewModel, IGetPacienteViewModel, IUpdatePacienteFromRsViewModel, IUpdatePacienteViewModel } from 'src/domain/paciente/viewModels/i-paciente.viewModel';

const apiUrl: string = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
// extends APacienteService
export class PacienteService {
  constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
    //super();
  }

  public async savePaciente(paciente: ISavePacienteViewModel): Promise<Observable<ISavePacienteFromRsViewModel>> {
    paciente.auditoria = 'transaccionAuditoria';
    const url = `${apiUrl}Paciente/SavePaciente`;
    return this._http.post<any>(url, paciente).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }

  public async getPaciente(busqueda: IGetPacienteViewModel): Promise<Observable<IGetPacienteFromRsViewModel>> {
    const url = `${apiUrl}Paciente/GetPaciente`;
    return this._http.post<any>(url, busqueda).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }

  public async getPacienteById(id_paciente: IGetPacienteByIdViewModel): Promise<Observable<IGetPacienteByIdFromRsViewModel>> {
    const url = `${apiUrl}Paciente/GetPacienteById`;
    return this._http.post<any>(url, id_paciente).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }

  public async updatePaciente(paciente: IUpdatePacienteViewModel): Promise<Observable<IUpdatePacienteFromRsViewModel>> {
    paciente.auditoria = 'transaccionAuditoria';
    const url = `${apiUrl}Paciente/UpdatePaciente`;
    return this._http.post<any>(url, paciente).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => {
        return of(this._statusResponseService.error(error));
      })
    );
  }

}
