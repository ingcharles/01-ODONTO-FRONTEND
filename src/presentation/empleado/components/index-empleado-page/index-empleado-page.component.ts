import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/presentation/base/Response';
import { DataGrid } from 'src/presentation/base/models/data-grid';
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
  public headers:DataGrid[]= [];
  constructor(
    // private employeesService: EmployeesService,
    private router: Router,
    // private appGlobals: AppGlobals
    ) {
    this.response = new Response();
  }

  ngOnInit() {
    this.getEmployees();
    this.headers = [

      { name: 'numeroCrca', aligment: 'center', visible: true, width: '8%', caption: 'Núm.CRCA' },
      { name: 'codigoDatoPersonal', aligment: 'center', visible: false, width: '8%', caption: 'Codigo' },
      // { name: 'estado', aligment: 'center', visible: true, width: '10%', caption: 'Estado', dataList: this.statusCrcaEstado },
      { name: 'codigoCrca', aligment: 'center', visible: false, width: '10%', caption: 'Nro. CRCA' },
      // { name: 'codigoCatalogoTipoCrca', aligment: 'center', visible: true, width: '10%', caption: 'Tipo Aporte', dataList: this.statusTipoAporte() },
      { name: 'nombreAportante', aligment: 'center', visible: true, width: '25%', caption: 'Aportante' },
      { name: 'valorNumero', aligment: 'right', visible: true, width: '10%', caption: 'Valor', format: '$,###,###,##0.00' },
      { name: 'observacionCrca', aligment: 'center', visible: true, width: '15%', caption: 'Observaciones' },
      { name: 'estadoFormulario', aligment: 'center', visible: true, width: '10%', caption: 'Estado Firmado', format: 'estadoFormulario' },
    ]
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






}
