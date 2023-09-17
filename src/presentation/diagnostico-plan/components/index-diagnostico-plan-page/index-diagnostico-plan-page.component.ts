import { Component, Input } from '@angular/core';
import { Cita } from 'src/presentation/agendar-cita/models/cita';
import { Response } from 'src/presentation/base/Response';
import { DiagnosticoPlan } from '../../models/diagnostico-plan';
import { Persona } from 'src/presentation/home/models/persona';
import { Paciente } from 'src/presentation/paciente/models/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/presentation/consulta/models/consulta';
@Component({
  selector: 'index-diagnostico-plan-page',
  templateUrl: './index-diagnostico-plan-page.component.html',
  styleUrls: ['./index-diagnostico-plan-page.component.css']
})
export class IndexDiagnosticoPlanPageComponent {
  public sub: any;
  public error: any;
  public response: Response;
  public responsePatient!: Response;
  @Input() patientSelect!: Paciente;
  @Input() personSelect!: Persona;
  @Input() diagnosisPlan: DiagnosticoPlan;
  @Input() responseConsultation!: Response;
  @Input() appoiment!: Cita;
  @Input() consultation!: Consulta;
  public amountPending: number = 0;
  public pay: number = 0;
  public totalPayment: number = 0;
  public totalAmount: number = 0;
  public totalPending: number = 0;
  public paymentMethods: any;
  public allEmployees!: any[];
  doctorExcecuteId: number = -1;

  public isRequesting: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute
    // , private diagnosisPlanService: DiagnosisPlanService, private patientService: PatientService,
    // private appGlobals: AppGlobals, private consultationService: ConsultationService, private appoitmentService: AppoitmentService,
    // private notification: NotificationMessage, private employeesService: EmployeesService
  ) {
    this.response = new Response();
    this.diagnosisPlan = new DiagnosticoPlan();
  }

  getDiagnosisPlan(idPatient: number) {
    // this.diagnosisPlanService
    //   .getDiagnosisPlansByPatient(idPatient)
    //   .then(response => {
    //     this.response = response;
    //     this.totalPayment = 0;
    //     this.totalAmount = 0;
    //     this.totalPending = 0;
    //     for (var i = 0; i < this.response.Data.length; i++) {
    //       this.totalPayment = this.totalPayment + parseFloat(this.response.Data[i].Payment);
    //       this.totalAmount = this.totalAmount + parseFloat(this.response.Data[i].TreatmentAmount);
    //       this.totalPending = this.totalAmount - this.totalPayment;
    //     }
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  // details(patient: any) {
  //   alert(patient.name);
  // }

  // execute(patient: any) {
  //   alert(patient.name);
  // }

  ngOnInit() {
    this.paymentMethods = [
      { Id: 1, Name: "payment1" },
      { Id: 2, Name: "payment2" },
      { Id: 3, Name: "payment3" },
    ]
    // this.paymentMethods = JSON.parse(localStorage.getItem('catalog')).Data.PAYMENTMETHODS;
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] != -1) {
        let id = +params['id'];
        this.getDiagnosisPlan(id);
        this.patientSelect = new Paciente();
        this.personSelect = new Persona();
        // this.patientService.getPatient(id)
        //   .then(patient => {
        //     this.responsePatient = patient;
        //     this.patientSelect = this.responsePatient.Data;
        //     this.personSelect = this.patientSelect.Person;
        //     this.appGlobals.setPatient(this.patientSelect);
        //   });
      }
    });
    this.appoiment = new Cita();
    this.appoiment.DateType = "month";
    this.getEmployees();
    // this.doctorExcecuteId = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
  }

  goBack() {
    window.history.back();
  }

  selectTreatment(Id: number, TreatmentAmount: number, Payment: number) {
    this.diagnosisPlan.Id = Id;
    this.diagnosisPlan.TreatmentAmount = TreatmentAmount;
    this.diagnosisPlan.Payment = Payment;
    this.diagnosisPlan.PaymentMethodsId = -1;
    this.diagnosisPlan.Invoiced = false;
    this.amountPending = this.diagnosisPlan.TreatmentAmount - this.diagnosisPlan.Payment;
  }

  payment() {
    this.diagnosisPlan.Pay = this.diagnosisPlan.Pay == undefined ? 0 : this.diagnosisPlan.Pay;
    this.consultation = new Consulta();
    this.consultation.DoctorExecuteId = this.doctorExcecuteId;
    this.consultation.Diagnosis_PlanId = this.diagnosisPlan.Id;
    this.consultation.Payment = parseFloat(this.diagnosisPlan.Pay.toString());
    this.consultation.DiagnosisPlanStatus = this.diagnosisPlan.Status != undefined ? this.diagnosisPlan.Status : "FINISHED";
    this.consultation.Invoiced = this.diagnosisPlan.Invoiced;
    this.consultation.InvoicedNumber = this.diagnosisPlan.InvoicedNumber;
    if (this.diagnosisPlan.PaymentMethodsId != -1)
      this.consultation.PaymentMethodsId = this.diagnosisPlan.PaymentMethodsId;
    // this.consultationService.save(this.consultation)
    //   .then(consultation => {
    //     $('#modalPayment').modal('hide');
    //     this.notification.notifySuccess("Pagar tratamiento");
    //     this.diagnosisPlan.Pay = 0;
    //     this.getDiagnosisPlan(this.appGlobals.patient.getValue().Id);
    //   });

  }

  delete(id: number) {
    // this.diagnosisPlanService
    //   .delete(id)
    //   .then(response => {
    //     this.getDiagnosisPlan(this.patientSelect.Id)
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  close() {

  }

  goToOdontogram() {
    window.location.href = "#/odontogram/" + this.patientSelect.Id + "/" + this.personSelect.Age;
  }

  selectDiagnosisPlan(Id: number) {
    this.diagnosisPlan = new DiagnosticoPlan();
    // this.diagnosisPlanService.getDiagnosisPlanById(Id)
    //   .then(diagnosisplan => {
    //     this.diagnosisPlan = diagnosisplan.Data;
    //     this.appGlobals.setDiagnosisPlan(this.diagnosisPlan);
    //   });
  }

  selectDiagnosisPlanConsultation(Id: number) {
    this.selectDiagnosisPlan(Id);
    this.getConsultationsByDiagnosticPlanId(Id);
  }

  getConsultationsByDiagnosticPlanId(Id: number) {
    // this.consultationService.getConsultationsByDiagnosticPlanId(Id)
    //   .then(response => {
    //     this.responseConsultation = response;
    //     this.isRequesting = false;
    //   }).catch(error => this.error = error);
  }

  handleResponseUpdated(data: any) {
    this.response = data;
  }

  createNextAppoiment() {
    if (this.appoiment.CantDateType != null) {
      this.appoiment.Status = "SCHEDULED";
      // this.appoiment.ClinicId = this.appGlobals.clinic.getValue().Id;
      this.appoiment.PatientId = this.patientSelect.Id;
      this.appoiment.ClassName = "bgm-red";
      // this.appoitmentService.save(this.appoiment)
      //   .then(response => {
      //     this.notification.notifySuccess("Guardar recordatorio de cita");
      //   })
      //   .catch(error => this.error = error);
    }
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

  getStatus(status: string) {
    switch (status) {
      case "PAID":
        return "PAGADO";
      case "ADVANCED":
        return "ADELANTADO";
      case "INPROCESS":
        return "EN PROCESO";
      case "PENDING":
        return "PENDIENTE";
      case "FINISHED":
        return "TERMINADO"
      default:
        return "PENDIENTE"
    }
  }

  setStatus(status: string) {
    this.diagnosisPlan.Status = status;
  }

  print() {
    let popupWinindow
    let innerContents = document.getElementById("treatmentsList");
    // $('th', innerContents).remove('.actions');
    // $('td', innerContents).remove('.actions');
    let header = '<h2>Plan diagnóstico y tratamientos a ejecutar.</h2>'
    // let clinic = '<h3>Cl&iacute;nica: ' + this.appGlobals.clinic.getValue().Name + '</h3>'
    // let doctor = '<h4>Atendido por: ' + this.appGlobals.userName.getValue() + '</h4>';
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    // popupWinindow.document.open();
    // popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + header + clinic + doctor + innerContents.innerHTML + '</html>');
    // popupWinindow.document.close();
  }

}
