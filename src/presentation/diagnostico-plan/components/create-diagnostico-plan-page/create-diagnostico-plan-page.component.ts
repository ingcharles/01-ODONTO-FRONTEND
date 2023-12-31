import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiagnosticoPlan } from '../../models/diagnostico-plan';
import { Tratamiento } from 'src/presentation/tratamiento/models/tratamiento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'create-diagnostico-plan-page',
  templateUrl: './create-diagnostico-plan-page.component.html',
  styleUrls: ['./create-diagnostico-plan-page.component.css']
})
export class CreateDiagnosticoPlanPageComponent {


  @Input() diagnosisPlan!: DiagnosticoPlan;
  @Output() close = new EventEmitter();
  @Output() response = new EventEmitter();

  public navigated = false;
  public sub: any;
  public treatments!: Tratamiento[];
  public treatmentsAll: Tratamiento[] = [];
  public id!: number;
  public discount!: number;
  public price!: number;
  public isRequesting!: boolean;
  public specialitiesTypes: any;
  error: any;

  constructor(private router: Router, private route: ActivatedRoute
    // private appGlobals: AppGlobals,
    // private diagnosisPlanService: DiagnosisPlanService, private treatmentService: TreatmentService, private notification: NotificationMessage
  ) {
  }

  ngOnInit() {
    // this.specialitiesTypes = JSON.parse(localStorage.getItem('catalog')).Data.SPECIALTIES;
    this.diagnosisPlan = new DiagnosticoPlan();
    // var idClinic = this.appGlobals.clinic.getValue().Id;
    // this.treatmentService.getTreatmentsByClinic(idClinic)
    //   .then(treatments => {
    //     this.treatmentsAll = treatments.Data;
    //     this.treatments = treatments.Data;
    //   });
  }

  save() {
    this.isRequesting = true;
    // this.diagnosisPlan.DoctorDiagnosticId = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
    this.diagnosisPlan.doctorExecuteId = this.diagnosisPlan.doctorDiagnosticId;
    // this.diagnosisPlan.PatientId = this.appGlobals.patient.getValue().Id;
    // this.diagnosisPlan.tooth = "4C";

    if (this.diagnosisPlan.valueType == 3) {
      this.diagnosisPlan.percentSpecialDiscount = this.diagnosisPlan.treatmentAmount / this.price * 100;
    }

    // this.diagnosisPlanService.save(this.diagnosisPlan)
    //   .then(diagnosisPlan => {
    //     this.notification.notifySuccess("Guardar plan diagn&oacute;stico");
    //     this.diagnosisPlanService
    //       .getDiagnosisPlansByPatient(this.diagnosisPlan.PatientId)
    //       .then(response => {
    //         this.response.emit(response);
    //       })
    //       .catch(error => this.error = error);
    //     this.isRequesting = false;
    //   });
  }

  goBack(diagnosisPlan: any) {
    this.close.emit(diagnosisPlan);
    if (this.navigated) { window.history.back(); }
  }

  getAmount(typeValue: number) {
    this.diagnosisPlan.percentDiscountStablished = 0; //Porcentaje de descuento establecido
    this.diagnosisPlan.valueType = typeValue;

    for (var i = 0; i < this.treatments.length; i++) {
      if (this.treatments[i].id == this.diagnosisPlan.treatmentId) {
        this.price = this.treatments[i].price;
        if (typeValue == 1) {
          this.diagnosisPlan.treatmentAmount = this.treatments[i].price;
        }
        if (typeValue == 2) {
          this.diagnosisPlan.treatmentAmount = this.diagnosisPlan.treatmentAmount - this.treatments[i].price * this.treatments[i].discount / 100;
          this.diagnosisPlan.percentDiscountStablished = this.treatments[i].discount;
        }
        if (typeValue == 3) {
          this.diagnosisPlan.percentSpecialDiscount = this.diagnosisPlan.treatmentAmount / this.treatments[i].price * 100;
        }
      }
    }
  }

  cancel() {
    if (this.navigated) { window.history.back(); }
  }

  selectSpeciality(value: Event) {
    // this.treatments = this.treatmentsAll.filter(x => x.CCatalog.Parent == value.target.value);
  }


}
