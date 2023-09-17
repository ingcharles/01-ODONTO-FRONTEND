import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cita } from '../../models/cita';
import { Response } from 'src/presentation/base/Response';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'create-agendar-cita-page',
  templateUrl: './create-agendar-cita-page.component.html',
  styleUrls: ['./create-agendar-cita-page.component.css']
})
export class CreateAgendarCitaPageComponent {


  // title = 'Cita';
  // sub_title = 'Agendar una  cita';
  // sub_title_description = 'Define la fecha y la hora de una cita';


  @Input() appoitment!: Cita;
  @Output() close = new EventEmitter();

  // public isRequesting: boolean;
  public navigated!: boolean;
  public sub: any;
  public allPatients!: any;
  public allEmployees!: any;
  public response!: Response;
  idPatient = -1;
  error: any;
  $: any;

  constructor(
    private router: Router, private route: ActivatedRoute,
    // private appoitmentService: AppoitmentService,
    // private patientService: PatientService, private appGlobals: AppGlobals, private employeesService: EmployeesService,
    // private notification: NotificationMessage
    ) {
  }

  ngOnInit() {
    this.initListener();
    this.getPatients();
    this.getEmployees();
    // this.isRequesting = true;
    this.navigated = true;
    this.appoitment = new Cita();
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] != -1) {
        let id = +params['id'];
        // this.appoitmentService.getAppoitment(id)
        //   .then(appoitment => {
        //     this.response = appoitment;
        //     this.appoitment = this.response.Data;
        //     var datePipe = new DatePipe();
        //     this.appoitment.Hour = this.appoitment.strHour;
        //     this.appoitment.StartDate = datePipe.transform(this.appoitment.StartDate, 'dd/MM/yyyy');
        //     localStorage.setItem("idPatient", this.appoitment.PatientId.toString());
        //     this.setPatientName();
        //     this.isRequesting = false;
        //   });
      } else {
        // this.appoitment = new Cita();
        this.appoitment.PatientId = -1;
        this.appoitment.EmployeeId = -1;
        this.appoitment.Duration = 30;
        this.appoitment.ClassName = "bgm-orange";
        // this.isRequesting = false;
      }

      if (params['start'] != "!") {
        this.appoitment.StartDate = params['start'];
        this.appoitment.StartDate = this.appoitment.StartDate.replace("-", "/");
        this.appoitment.StartDate = this.appoitment.StartDate.replace("-", "/");
      }
    });
    let current_patient = localStorage.getItem("current_patient");

    if (current_patient != "" && current_patient != null) {
      this.appoitment.PatientId = JSON.parse(current_patient).Id;
      localStorage.removeItem("current_patient");
    }

    // (function () {
    //   if ($('.selectpickers')[0]) {
    //     $('.selecstpicker').selectpicker();
    //   }
    // })();

  }

  save() {
    // this.isRequesting = true;
    // this.appoitment.strStartDate = $('#StartDate').val();
    // this.appoitment.strHour = $('#EndDate').val();
    // this.appoitment.ClinicId = this.appGlobals.clinic.getValue().Id;
    // this.appoitment.PatientId = this.appoitment.PatientId == -1 ? parseInt(localStorage.getItem("idPatient")) : this.appoitment.PatientId;

    switch (this.appoitment.ClassName) {
      case "bgm-red":
        this.appoitment.Status = "PLANNED";
        break;
      case "bgm-orange":
        this.appoitment.Status = "SCHEDULED";
        break;
      case "bgm-green":
        this.appoitment.Status = "CONFIRMED";
        break;
      case "bgm-black":
        this.appoitment.Status = "CANCELLED";
        break;
      case "bgm-gray":
        this.appoitment.Status = "NOTASSIST";
        break;

      default: {
        this.appoitment.ClassName = "bgm-orange";
        this.appoitment.Status = "SCHEDULED";
      }
        break;
    }

    // this.appoitmentService.save(this.appoitment)
    //   .then(appoitment => {
    //     this.isRequesting = false;
    //     this.notification.notifySuccess("Guardar cita");
    //     window.history.back();
    //   });
  }


  getPatients() {
    // var idCLinic = this.appGlobals.clinic.getValue().Id;

    var idEmployee = -1;
    // if (this.appGlobals.owner.getValue() === false && (JSON.parse(localStorage.getItem('user')).Data.Clinics.length == 0 || JSON.parse(localStorage.getItem('user')).Data.Clinics[0].Active))
    //   idEmployee = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;

    // this.patientService
    //   .getByIdClinicByIdEmployee(idCLinic, idEmployee, "!", "!", "!")
    //   .then(response => {
    //     this.allPatients = response.Data;
    //     this.setPatientName();
    //   })
    //   .catch(error => this.error = error);
  }

  setPatientName() {
    // if (this.allPatients != undefined && this.allPatients.length > 0) {
    //   for (var item of this.allPatients) {
    //     if (item.patient.Id == this.appoitment.PatientId)
    //       this.appoitment.PatientName = item.LastNames + " " + item.Name;
    //   }
    // }
  }

  getEmployees() {
    // var idCLinic = this.appGlobals.clinic.getValue().Id;
    // this.employeesService
    //   .getEmployeesByClinic(idCLinic, 'DOCTOR')
    //   .then(response => {
    //     this.allEmployees = response.Data;
    //   })
    //   .catch(error => this.error = error);
  }

  cancel(savedAppoiment: Cita) {
    this.close.emit(savedAppoiment);
    window.history.back();
  }

  goBack(savedAppoiment: Cita) {
    this.close.emit(savedAppoiment);
    if (this.navigated) { window.history.back(); }
  }

  selectTagColor(color:string) {
    this.appoitment.ClassName = color;
  }

  ngAfterViewInit() {
    // $('.date-time-picker').datetimepicker();
    // $('.time-picker').datetimepicker({ format: 'LT' });
    // $('.date-picker').datetimepicker({ format: 'DD/MM/YYYY' });

    this.loadData(this.appoitment.PatientId);
  }

  selectOption(id:number) {
    alert(id);
    console.log(1);
  }

  initListener() {
    localStorage.setItem("idPatient", "-1");
    // (function () {
    //   $("#patientId").bind('input', function () {
    //     var inputValue = $('#patientId').val();
    //     var x = document.getElementById("text_editors");
    //     var i;
    //     for (i = 0; i < x.options.length; i++) {
    //       if (inputValue == x.options[i].value) {
    //         localStorage.setItem("idPatient", x.options[i].getAttribute('id'));
    //       }
    //     }
    //   });
    // })();
  }

  loadData(PatientId:number) {
    (function () {
      var x = document.getElementById("text_editors");
      var i;
      // for (i = 0; i < x.options.length; i++) {
      //   if (PatientId == parseInt(x.options[i].getAttribute('id'))) {
      //     $('#patientId').val(x.options[i].value);
      //   }
      // }
    })();
  }

  delete() {
    // this.isRequesting = true;
    // this.appoitmentService.delete(this.appoitment)
    //   .then(appoitment => {
    //     this.notification.notifySuccess("Cita eliminada");
    //     this.isRequesting = false;
    //     window.history.back();
    //   });
  }


}
