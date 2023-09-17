import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/presentation/home/models/persona';
import { Clinica } from '../../models/clinica';
import { Response } from 'src/presentation/base/Response';

@Component({
  selector: 'create-clinica-page',
  templateUrl: './create-clinica-page.component.html',
  styleUrls: ['./create-clinica-page.component.css']
})
export class CreateClinicaPageComponent {


  public title = 'Perfil';
  public subtitle = 'Información del perfil  ';
  public description_subtitle = 'Complete toda la información para el uso posterior de la plataforma';

  @Input() person!: Persona;
  @Input() clinic!: Clinica;
  @Output() close = new EventEmitter();
  public error: any;
  public response: Response;
  public catalogs: any[] =[];
  public paymentsTypes: any[] = [];
  public catalogsSpecialty: any[] = [];

  public isRequesting: boolean = true;
  public clinicType: string = '';
  isSuperAdmin: boolean = false;

  constructor(
    // private profileService: ProfileService, private clinicService: ClinicService, private employeesService: EmployeesService,
    // private appGlobals: AppGlobals, private loginService: LoginService, private notification: NotificationMessage
    ) {
    this.response = new Response();
    this.clinic = new Clinica();
  }

  ngOnInit() {
    this.clinic = new Clinica();
    this.getClinic();
  }

  getClinic() {
    // var user = JSON.parse(localStorage.getItem('user')).Data;
    // this.isSuperAdmin = user.Id == 3;
    // var idCLinic = this.appGlobals.clinic.getValue().Id;
    // this.clinicService.getClinicById(idCLinic)
    //   .then(response => {
    //     this.response = response;
    //     this.clinic = this.response.Data;

    //     if (this.clinic.PaymentPlanId == null || this.clinic.PaymentPlanId == undefined)
    //       this.clinic.PaymentPlanId = -1;

    //     if (this.clinic.Clinic_Specialties.length > 0 && this.clinic.Clinic_Specialties[this.clinic.Clinic_Specialties.length - 1].SpecialtiesId != null && this.clinic.Clinic_Specialties[this.clinic.Clinic_Specialties.length - 1].SpecialtiesId != undefined) {
    //       this.clinic.SpecialtyId = this.clinic.Clinic_Specialties[this.clinic.Clinic_Specialties.length - 1].SpecialtiesId;
    //     }
    //     else
    //       this.clinic.SpecialtyId = -1;

    //     this.clinic.Banck = -1;
    //     this.getCatalogs();
    //   });
  }

  editCLinic(load:boolean = false) {
    if (load)
      this.isRequesting = true;
    // this.clinicService.save(this.clinic)
    //   .then(clinic => {
    //     this.isRequesting = false;
    //     this.notification.notifySuccess("Guardar cl&iacute;nica");
    //   });
  }

  loadProfile() {
    // let idUser = JSON.parse(localStorage.getItem("user")).Data.AspNetUser.Id;
    // this.profileService
    //   .getProfilebyUserId(idUser)
    //   .then(response => {
    //     localStorage.setItem("user", JSON.stringify(response));
    //     this.appGlobals.setUserName(response.Data.Name + " " + response.Data.LastNames);
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  getCatalogs() {
    // this.catalogs = JSON.parse(localStorage.getItem('catalog')).Data.JOBSTYPES;
    // this.paymentsTypes = JSON.parse(localStorage.getItem('catalog')).Data.PAYMENTPLAN;
    // this.formatPaymentsTypes(this.clinic.PaymentPlanId);
    // this.catalogsSpecialty = JSON.parse(localStorage.getItem('catalog')).Data.CLINICTYPES;
    this.isRequesting = false;
  }

  cancel(savedPerson: Persona, savedClinic: Clinica) {
    this.close.emit(savedPerson);
    this.close.emit(savedClinic);
    window.history.back();
  }

  activeClinic() {
    this.clinic.Active = true;
    this.editCLinic(false);
  }

  selectPlan(plan:any) {
    this.formatPaymentsTypes(plan.Id);
    this.clinic.PaymentPlanId = plan.Id;
    this.clinic.Active = true;
    this.editCLinic(false);
  }

  cancelMembership() {
    this.clinic.PaymentPlanId = -2;
    this.clinic.Active = false;
    this.editCLinic(false);
  }

  getValue(text:string, position:number) {
    var elements = text.split(",");
    return elements[position];
  }

  getFeatures(text:string) {
    var elements = text.split(",");
    return elements.slice(4, elements.length);
  }

  formatPaymentsTypes(planId:number) {
    for (var item of this.paymentsTypes) {
      item.Value = planId == item.Id;
      item.Class = planId == item.Id ? 'select-plan' : '';
      item.Show = item.Id == "154" ? (this.clinic.PaymentPlanId == 154 || this.isSuperAdmin) : true;
    }
  }

  ngAfterViewInit() {
    // $('.date-time-picker').datetimepicker();
    // $('.time-picker').datetimepicker({ format: 'LT' });
    // $('.date-picker').datetimepicker({ format: 'DD/MM/YYYY' });
  }

}



