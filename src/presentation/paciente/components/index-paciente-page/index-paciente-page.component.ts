import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { messages } from 'src/presentation/base/messages';
import { PacienteUseCase } from 'src/domain/paciente/useCases/paciente.usecase';
import { IGetPacienteRsViewModel, IGetPacienteViewModel } from 'src/domain/paciente/viewModels/i-paciente.viewModel';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'paciente-index-paciente-page',
  templateUrl: './index-paciente-page.component.html',
  styleUrls: ['./index-paciente-page.component.css']
})
export class IndexPacientePageComponent {
  // , private _route: ActivatedRoute
  constructor(private _router: Router, private _alertService: AlertsService, private _loaderService: LoaderService, private _pacienteUseCase: PacienteUseCase){}

  public title:string = 'Pacientes';
  public datosGridPaciente: IGetPacienteRsViewModel[] = [];
  error: any;
  // response: Response;
  // responseClinics: Response;
  clinicsWorker: any;
  clinicsOwner: any;
  clinicWorker: number = -1;
  clinicOwner: number = -1;
  viewOwnerClinic: boolean = false;
  // idCLinic: number;

  public isRequesting: boolean = true;

  // constructor(private router: Router, private patientService: PatientService, private appGlobals: AppGlobals,
  //   private dashBoardService: DashBoardService, private notification: NotificationMessage, private clinicService: ClinicService) {
  //   this.response = new Response();
  // }
  //displayedColumns: string[] = ['id_paciente', 'nombre', 'apellido', 'dni', 'email', 'celular', 'telefono', 'fecha_nacimiento', 'sexo','estado'];
  dataSource = new MatTableDataSource<IGetPacienteRsViewModel>();
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    //   this.idCLinic = this.appGlobals.clinic.getValue().Id;
    //   this.getPatientsByClinic(this.appGlobals.query.getValue());
    this.obtenerPaciente();

  }


  obtenerPaciente() {

    let busquedaString:any = $('#busqueda').val();
    let busqueda: IGetPacienteViewModel = { busqueda: busquedaString};

    this._pacienteUseCase.getPaciente(busqueda).then(obs => {
      this._loaderService.display(true);
      obs.subscribe((result) => {
        this._loaderService.display(false);
        if (result.ok) {
          this.datosGridPaciente = result.data!;
        } else {
          this.datosGridPaciente = [];
          this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
        }
        this.dataSource = new MatTableDataSource<IGetPacienteRsViewModel>(this.datosGridPaciente);
      });
    });

  }

  delete(Id: number) {
    //   this.notification.notifyDelete().then(val => {
    //     this.patientService
    //       .delete(Id)
    //       .then(response => {
    //         this.getPatientsByClinic(this.appGlobals.query.getValue());
    //       })
    //       .catch(error => this.error = error);
    //   });
  }

  // getClinicsWorker() {
  //   let idEmploye = (JSON.parse(localStorage.getItem('user')).Data.Employees.length > 0 ? JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id : -1);
  //   if (idEmploye != -1) {
  //     this.dashBoardService
  //       .getGetClinicsByEmployeeId(idEmploye)
  //       .then(respon => {
  //         this.responseClinics = respon;
  //         this.clinicsWorker = this.responseClinics.Data;
  //         this.isRequesting = false;
  //       })
  //       .catch(error => this.error = error);
  //   }
  // }

  selectClinicWorker(value: number) {
    //   this.idCLinic = value != "-1" ? value : this.appGlobals.clinic.getValue().Id;
  }

  //ngAfterViewInit() {
  //   $('.date-time-picker').datetimepicker();
  //   $('.time-picker').datetimepicker({ format: 'LT' });
  //   $('.date-picker').datetimepicker({ format: 'DD/MM/YYYY' });
  //}

  // this.datosGrid = [
  //   { id_paciente: 1, nombre: 'Hydrogen', apellido: 'AHydrogen', dni: '1722039953', email:'e.du.ingcharles@hotmail.com', celular:'0996421114', telefono: '025592254', fecha_nacimiento: new Date('2022-12-12'), sexo: 'H', estado: 'active' },
  //   { id_paciente: 2, nombre: 'Helium', apellido: 'AHydrogen', dni: '1722039953', email:'e.du.ingcharles@hotmail.com', celular:'0996421114', telefono: '025592254', fecha_nacimiento: new Date('2022-12-12'), sexo: 'He', estado: 'active' },
    // { id_paciente: 3, nombre: 'Lithium', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Li', estado: 'active' },
    // { id_paciente: 4, nombre: 'Beryllium', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Be', estado: 'active' },
    // { id_paciente: 5, nombre: 'Boron', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'B', estado: 'active' },
    // { id_paciente: 6, nombre: 'Carbon', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'C', estado: 'active' },
    // { id_paciente: 7, nombre: 'Nitrogen', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'N', estado: 'active' },
    // { id_paciente: 8, nombre: 'Oxygen', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'O', estado: 'active' },
    // { id_paciente: 9, nombre: 'Fluorine', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'F', estado: 'active' },
    // { id_paciente: 10, nombre: 'Neon', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Ne', estado: 'active' },
    // { id_paciente: 11, nombre: 'Sodium', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Na', estado: 'active' },
    // { id_paciente: 12, nombre: 'Magnesium', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Mg', estado: 'active' },
    // { id_paciente: 13, nombre: 'Aluminum', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Al', estado: 'active' },
    // { id_paciente: 14, nombre: 'Silicon', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Si', estado: 'active' },
    // { id_paciente: 15, nombre: 'Phosphorus', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'P', estado: 'active' },
    // { id_paciente: 16, nombre: 'Sulfur', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'S', estado: 'active' },
    // { id_paciente: 17, nombre: 'Chlorine', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Cl', estado: 'active' },
    // { id_paciente: 18, nombre: 'Argon', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Ar', estado: 'active' },
    // { id_paciente: 19, nombre: 'Potassium', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'K', estado: 'active' },
    // { id_paciente: 20, nombre: 'Calcium', apellido: 'AHydrogen', fecha_nacimiento: new Date('2022-12-12'), sexo: 'Ca', estado: 'active' },
  //];

}



