import { Component } from '@angular/core';

@Component({
  selector: 'app-index-paciente',
  templateUrl: './index-paciente.component.html',
  styleUrls: ['./index-paciente.component.css']
})
export class IndexPacienteComponent {
  title = 'Pacientes';

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

  // ngOnInit() {
  //   this.idCLinic = this.appGlobals.clinic.getValue().Id;
  //   this.getPatientsByClinic(this.appGlobals.query.getValue());
  // }

  // searchPatients() {
  //   if ($('#query').val() == "") {
  //     this.appGlobals.setQuery("!");
  //   }
  //   else {
  //     this.appGlobals.setQuery($('#query').val());
  //   }
  //   this.getPatientsByClinic(this.appGlobals.query.getValue());
  // }

  // getPatientsByClinic(query) {
  //   this.isRequesting = true;

  //   var idEmployee = -1;
  //   if (this.appGlobals.owner.getValue() === false) {
  //     idEmployee = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
  //   }

  //   this.patientService
  //     .getByIdClinicByIdEmployee(this.idCLinic, idEmployee, "!", "!", query)
  //     .then(response => {
  //       this.response = response;
  //       this.getClinicsWorker();
  //     })
  //     .catch(error => this.error = error);
  // }

  // delete(Id) {
  //   this.notification.notifyDelete().then(val => {
  //     this.patientService
  //       .delete(Id)
  //       .then(response => {
  //         this.getPatientsByClinic(this.appGlobals.query.getValue());
  //       })
  //       .catch(error => this.error = error);
  //   });
  // }

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

  // selectClinicWorker(value) {
  //   this.idCLinic = value != "-1" ? value : this.appGlobals.clinic.getValue().Id;
  // }

  // ngAfterViewInit() {
  //   $('.date-time-picker').datetimepicker();
  //   $('.time-picker').datetimepicker({ format: 'LT' });
  //   $('.date-picker').datetimepicker({ format: 'DD/MM/YYYY' });
  // }
}
