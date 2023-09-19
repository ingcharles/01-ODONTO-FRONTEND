import { Component } from '@angular/core';
import { Response } from 'src/presentation/base/Response';
import { Dashboard } from '../../models/dashboard';
import { Referido } from 'src/presentation/referido/models/referido';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {



  public title = 'Cambiar'
  private todo!: Dashboard;
  private referred!: Referido;
  public totalPatients!: number;
  public totalAmountOwed!: number;
  public totalSales!: number;
  public totalAmount!: number;
  public response!: Response;
  public todo_list!: Dashboard[];

  public isRequesting: boolean = true;

  error: any;
  sub: any;
  clinicsWorker: any;
  clinicsOwner: any;
  clinicWorker: number = -1;
  clinicOwner: number = -1;
  viewOwnerClinic: boolean = false;
  loadClinicData: boolean = false;
  loadDashboardList: boolean = false;

  constructor(private route: ActivatedRoute,
    // private dashBoardService: DashBoardService, private appGlobals: AppGlobals, private clinicService: ClinicService,
    // private notificationService: NotificationService, private referralsService: ReferralsService,
    // private _runtimeCompiler: RuntimeCompiler,
    //  private notification: NotificationMessage
  ) {

  }

  ngOnInit() {
    this.todo = new Dashboard();
    this.referred = new Referido();
    this.referred.description = "Te invito a ser parte de la plataforma OdondoSystem";
    this.sub = this.route.params.subscribe(params => {
      // if (params.type == "owner") {
      //   this.selectClinicOwner(params.id, params.name);
      //   this.getAllDataInit();
      // }
      // else if (params.type == "worker") {
      //   this.selectClinicWorker(params.id, params.name);
      //   this.getAllDataInit();
      // }
      // else {
      //   this.appGlobals.setNumberNotifications(1);
      //   if (this.appGlobals.isUserLoggedIn.getValue()) {
      //     this.getClinicOwner();
      //     this.getClinicsWorker();
      //     this.getClinicsOwner();
      //   }
      // }
      this.isRequesting = false;
    });
  }

  getClinicOwner() {
    // this.clinicsOwner = JSON.parse(localStorage.getItem('user')).Data.Clinics;
    // if (this.clinicsOwner.length == 1) {
    //   this.appGlobals.setClinic({ "Id": this.clinicsOwner[0].Id, "Name": this.clinicsOwner[0].Name });
    //   if (this.appGlobals.owner.getValue() === null || this.appGlobals.owner.getValue() == false)
    //     this.appGlobals.setOwner(true);
    //   this.viewOwnerClinic = this.clinicsOwner[0].Active;
    //   this.clinicWorker = -1;
    // }
  }

  getClinicsWorker() {
    // let idEmploye = (JSON.parse(localStorage.getItem('user')).Data.Employees.length > 0 ? JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id : -1);
    // if (idEmploye != -1) {
    //   this.dashBoardService
    //     .getGetClinicsByEmployeeId(idEmploye)
    //     .then(response => {
    //       this.response = response;
    //       this.clinicsWorker = response.Data;
    //       this.appGlobals.setClinicsWorkers(response);
    //       if (!this.viewOwnerClinic && parseInt(response.Total) > 0) {
    //         this.appGlobals.setClinic({ "Id": this.clinicsWorker[0].Id, "Name": this.clinicsWorker[0].Name });
    //         this.clinicWorker = this.clinicsWorker[0].Id;
    //         this.appGlobals.setOwner(false);
    //       }

    //       this.clearCache(this.response);
    //       this.getAllDataInit();
    //     })
    //     .catch(error => this.error = error);
    // }
  }

  selectClinicOwner(value: number, name: string) {
    // this.appGlobals.setClinic({ "Id": value, "Name": name });
    // this.appGlobals.setOwner(true);
    this.clinicWorker = -1;
    this.definePermission("ADMIN");
  }

  selectClinicWorker(value: number, name: string) {
    // this.appGlobals.setClinic({ "Id": value, "Name": name });
    // this.appGlobals.setOwner(false);
    this.clinicOwner = -1;
    this.definePermission("DOCTOR");
  }

  getAllDataInit() {
    // if (this.appGlobals.clinic.getValue().Id != -1) {
    //   if (this.appGlobals.owner.getValue() === true)
    //     this.clinicOwner = this.appGlobals.clinic.getValue().Id;
    //   else
    //     this.clinicWorker = this.appGlobals.clinic.getValue().Id;
    // }
    // else {
    //   this.clinicWorker = -1;
    //   this.clinicOwner = -1;
    // }
    // if (this.appGlobals.owner.getValue() === true || this.appGlobals.roleAdmin.getValue() === true) {
    //   this.getClinicData();
    // }
    // else {
    //   this.loadClinicData = true;
    //   this.getDashboardList();
    //   this.getNotifications();
    // }
  }

  getClinicData() {
    // let clinic = this.appGlobals.clinic.getValue();
    // this.dashBoardService
    //   .getGetClinicData(clinic.Id)
    //   .then(response => {
    //     this.totalPatients = response.Data.Result.totalPatients;
    //     this.totalAmountOwed = response.Data.Result.totalAmountOwed;
    //     this.totalAmount = response.Data.Result.totalAmount;
    //     this.totalSales = response.Data.Result.totalSales;
    //     this.clearCache(response);
    //     this.loadClinicData = true;
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);

    // this.loadClinicData = true;
    // this.isRequesting = false;

    this.getNotifications();
    this.getDashboardList();
  }
  getDashboardList() {
    // if (localStorage.getItem('user') != "" && localStorage.getItem('user') != null) {
    //   let person = JSON.parse(localStorage.getItem('user')).Data;
    //   let clinic = this.appGlobals.clinic.getValue();
    //   this.dashBoardService.getDashboardList(clinic.Id, person.Id)
    //     .then(response => {
    //       this.todo_list = response.Data;
    //       this.clearCache(response);
    //       this.loadDashboardList = true;
    //       this.isRequesting = false;
    //     })
    //     .catch(error => this.error = error);
    //}
  }

  allDashboardList() {
    if (localStorage.getItem('user') != "" && localStorage.getItem('user') != null) {
      // let person = JSON.parse(localStorage.getItem('user')).Data;
      // let clinic = this.appGlobals.clinic.getValue();
      // this.dashBoardService.getAllDashboardList(clinic.Id, person.Id)
      //   .then(response => {
      //     this.todo_list = response.Data;
      //     this.clearCache(response);
      //     this.loadDashboardList = true;
      //   })
      //   .catch(error => this.error = error);
    }
  }

  getNotifications() {
    // if (localStorage.getItem('user') != "" && localStorage.getItem('user') != null) {
    //   let person = JSON.parse(localStorage.getItem('user')).Data;
    //   let clinic = this.appGlobals.clinic.getValue();
    //   var idEmployee = -1;
    //   if (this.appGlobals.owner.getValue() === false) {
    //     idEmployee = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
    //   }
    //   this.notificationService.getNotificationsByClinicId(clinic.Id, idEmployee)
    //     .then(response => {
    //       this.clearCache(response);
    //       this.appGlobals.setNotifications(response);
    //     })
    //     .catch(error => this.error = error);
    // }
  }

  getClinicsOwner() {
    // if (localStorage.getItem('user') != "" && localStorage.getItem('user') != null) {
    //   let person = JSON.parse(localStorage.getItem('user')).Data;
    //   this.clinicService.getByOwnerId(person.Id)
    //     .then(response => {
    //       this.appGlobals.setClinicsOwners(response);
    //     })
    //     .catch(error => this.error = error);
    //}
  }

  save() {
    // let person = JSON.parse(localStorage.getItem('user')).Data;
    // let clinic = this.appGlobals.clinic.getValue();

    // this.todo.ClinicId = clinic.Id;
    // this.todo.PersonId = person.Id;
    // this.todo.Status = 'ADD';
    // this.dashBoardService.saveDashboardList(this.todo)
    //   .then(res_todo => {
    //     this.getDashboardList();
    //   });
  }

  sendReferral() {
    // let person = JSON.parse(localStorage.getItem('user')).Data;

    // this.referred.PersonId = person.Id;
    // this.referralsService.save(this.referred)
    //   .then(rf => {
    //     this.referred = new Referido();
    //     this.referred.Description = "Estimado colega te invito a ser parte de la plataforma OdondoFy";
    //     this.notification.notifySuccess("Invitaci&oacute;n enviada");
    //   });
  }

  update(value: Event, t: Dashboard, index: number) {
    // const check = value.target.checked;
    // t.Status = 'UNCHECK';
    // if (check) {
    //   t.Status = 'CHECK';
    // }
    // this.dashBoardService.saveDashboardList(t)
    //   .then(res_todo => {
    //     this.todo_list[index] = t;
    //   });
  }

  archive(t: Dashboard, index: number) {
    t.Status = 'ARCHIVE';
    // this.dashBoardService.saveDashboardList(t)
    //   .then(res_todo => {
    //     this.todo_list.splice(index, 1);
    //   });
  }

  delete(t: Dashboard, index: number) {
    // this.dashBoardService.deleteDashboardList(t)
    //   .then(res_todo => {
    //     this.todo_list.splice(index, 1);
    //   });
  }

  definePermission(roles: string) {
    // this.appGlobals.setRoleAdmin(false);
    // this.appGlobals.setRoleSecretary(false);
    // this.appGlobals.setRoleDoctor(false);
    // this.appGlobals.setRoleBase(false);
    // if (roles.indexOf("ADMIN") !== -1)
    //   this.appGlobals.setRoleAdmin(true);
    // if (roles.indexOf("ADMIN") !== -1 || roles.indexOf("SECRETARY") !== -1)
    //   this.appGlobals.setRoleSecretary(true);
    // if (roles.indexOf("ADMIN") !== -1 || roles.indexOf("SECRETARY") !== -1 || roles.indexOf("DOCTOR") !== -1)
    //   this.appGlobals.setRoleDoctor(true);
    // if (roles.indexOf("ADMIN") !== -1 || roles.indexOf("SECRETARY") !== -1 || roles.indexOf("DOCTOR") !== -1 || roles.indexOf("BASE") !== -1)
    //   this.appGlobals.setRoleBase(true);
  }

  clearCache(response: Response) {
    if (response.Version != localStorage.getItem("version")) {
      var token = localStorage.getItem("token");
      // this._runtimeCompiler.clearCache();
      localStorage.setItem("version", response.Version);
      // localStorage.setItem("token", token);
    }
  }


}
