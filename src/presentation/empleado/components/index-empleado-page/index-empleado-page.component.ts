import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/presentation/base/Response';
@Component({
  selector: 'index-empleado-page',
  templateUrl: './index-empleado-page.component.html',
  styleUrls: ['./index-empleado-page.component.css']
})
export class IndexEmpleadoPageComponent {


  subtitle = 'Empleados';

  public error: any;
  public response: Response;
  public isRequesting: boolean = true;
  public idClinic!: number;

  constructor(
    // private employeesService: EmployeesService,
    private router: Router,
    // private appGlobals: AppGlobals
    ) {
    this.response = new Response();
  }

  getEmployees() {
    // this.idClinic = this.appGlobals.clinic.getValue().Id;
    // this.response = new Response();
    // this.employeesService
    //   .getEmployeesByClinic(this.idClinic, 'ALL')
    //   .then(response => {
    //     this.response = response;
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  delete(id:number) {
    // this.employeesService
    //   .delete(id)
    //   .then(response => {
    //     this.getEmployees();
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getEmployees();
  }




}
