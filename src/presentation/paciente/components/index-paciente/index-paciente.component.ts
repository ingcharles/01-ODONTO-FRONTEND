import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbola'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    //   this.idCLinic = this.appGlobals.clinic.getValue().Id;
    //   this.getPatientsByClinic(this.appGlobals.query.getValue());
  }

  searchPatients() {
    //   if ($('#query').val() == "") {
    //     this.appGlobals.setQuery("!");
    //   }
    //   else {
    //     this.appGlobals.setQuery($('#query').val());
    //   }
    //   this.getPatientsByClinic(this.appGlobals.query.getValue());
  }

  getPatientsByClinic(query: any) {
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


}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
