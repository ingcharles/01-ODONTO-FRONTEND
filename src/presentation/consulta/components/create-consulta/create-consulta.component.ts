import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Consulta } from '../../models/consulta';
import { Tratamiento } from 'src/presentation/tratamiento/models/tratamiento';
import { DiagnosticoPlan } from 'src/presentation/diagnostico-plan/models/diagnostico-plan';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/presentation/base/Response';
@Component({
  selector: 'create-consulta',
  templateUrl: './create-consulta.component.html',
  styleUrls: ['./create-consulta.component.css']
})
export class CreateConsultaComponent implements OnInit {


  @Input() consultation!: Consulta;
  @Output() close = new EventEmitter();
  public navigated = false;
  public sub: any;
  public treatments!: Tratamiento[];
  public id!: number;
  public discount!: number;
  public price!: number;
  public consultations = [];
  public tab1: string = "";
  public tab2: string = "";

  public isRequesting!: boolean;
  error: any;
  @Input() diagnosisPlan!: DiagnosticoPlan;
  @Input() response: Response;

  constructor(private router: Router, private route: ActivatedRoute,
    // private appGlobals: AppGlobals,
    // private consultationService: ConsultationService, private treatmentService: TreatmentService, private notification: NotificationMessage
  ) {
    this.response = new Response();
  }

  ngOnInit() {
    // var idClinic = this.appGlobals.clinic.getValue().Id;
    this.response = new Response();
    this.consultation = new Consulta();
  }

  save() {
    this.isRequesting = true;
    // this.consultation.DoctorExecuteId = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
    this.consultation.diagnosisPlanId = this.diagnosisPlan.id;
    // this.consultationService.save(this.consultation)
    //   .then(consultation => {
    //     this.notification.notifySuccess("Guardar consulta");
    //     this.getConsultationsByDiagnosticPlanId();
    //     this.consultation = new Consulta();
    //     this.isRequesting = false;
    //   });
  }

  getConsultationsByDiagnosticPlanId() {
    // this.consultationService.getConsultationsByDiagnosticPlanId(this.diagnosisPlan.Id)
    //   .then(response => {
    //     this.response = response;
    //     this.isRequesting = false;
    //   }).catch(error => this.error = error);
  }

  goBack(consultation: any) {
    this.close.emit(consultation);
    if (this.navigated) { window.history.back(); }
  }

  cancel() {
    if (this.navigated) { window.history.back(); }
  }

  updateConsultation(item: any) {
    this.consultation = item;
    this.tab1 = "active";
    document.getElementById("tab2")!.classList.remove("active");
  }

  selectTab() {
    this.tab1 = "";
  }

}
