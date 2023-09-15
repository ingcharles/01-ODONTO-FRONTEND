import { Component } from '@angular/core';

@Component({
  selector: 'app-create-tratramiento-page',
  templateUrl: './create-tratramiento-page.component.html',
  styleUrls: ['./create-tratramiento-page.component.css']
})
export class CreateTratramientoPageComponent {

  public newTreatment: boolean = false;
  public treatmentsTypes: any;
  addTreatmentType() {
    this.newTreatment = true;
  }

  showTreatmentType() {
    this.newTreatment = false;
  }

  selectSpeciality(value: any) {
    // this.treatmentsTypes = this.treatmentsTypesAll.filter(x => x.Parent == value);
  }
  save() {

    // if (this.treatment.TreatmentType != undefined && this.treatment.TreatmentType != "") {
    //     this.saveNewTreatmentType();
    // } else {
    //     this.saveTreatment();
    // }
  }

  saveTreatment() {
    // this.isRequesting = true;
    // this.treatment.ClinicId = this.appGlobals.clinic.getValue().Id;
    // this.treatment.Status = true;
    // this.treatmentService.save(this.treatment)
    //     .then(treatment => {
    //         this.isRequesting = false;
    //         this.notification.notifySuccess("Guardar tratamiento");
    //         window.history.back();
    //     });
  }

  cancel(/*savedTreatment: Treatment = null*/) {
    // this.close.emit(savedTreatment);
    // if (this.navigated) { window.history.back(); }
  }

}
