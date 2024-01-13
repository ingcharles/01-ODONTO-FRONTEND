import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PacienteService } from 'src/data/paciente/services/paciente.service';
import { ISavePacienteViewModel, ISavePacienteFromRsViewModel, IGetPacienteFromRsViewModel, IGetPacienteViewModel, IGetPacienteByIdViewModel, IGetPacienteByIdFromRsViewModel, IUpdatePacienteViewModel, IUpdatePacienteFromRsViewModel} from "../viewModels/i-paciente.viewModel";

@Injectable({ providedIn: 'root' })
export class PacienteUseCase {

  constructor(private _pacienteService: PacienteService) { }

  public async savePaciente(paciente: ISavePacienteViewModel): Promise<Observable<ISavePacienteFromRsViewModel>> {
    return await this._pacienteService.savePaciente(paciente);
  }

  public async getPaciente(busqueda: IGetPacienteViewModel): Promise<Observable<IGetPacienteFromRsViewModel>> {
    return await this._pacienteService.getPaciente(busqueda);
  }

  public async getPacienteById(id_paciente: IGetPacienteByIdViewModel): Promise<Observable<IGetPacienteByIdFromRsViewModel>> {
    return await this._pacienteService.getPacienteById(id_paciente);
  }

  public async updatePaciente(paciente: IUpdatePacienteViewModel): Promise<Observable<IUpdatePacienteFromRsViewModel>> {
    return await this._pacienteService.updatePaciente(paciente);
  }

}
