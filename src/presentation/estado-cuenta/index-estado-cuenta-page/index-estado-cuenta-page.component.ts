import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/presentation/base/Response';
@Component({
  selector: 'index-estado-cuenta-page',
  templateUrl: './index-estado-cuenta-page.component.html',
  styleUrls: ['./index-estado-cuenta-page.component.css']
})
export class IndexEstadoCuentaPageComponent {
  public sub: any;
  public error: any;
  public response!: Response;
  public totalPayment: number = 0;
  public totalAmount: number = 0;
  public totalOwed: number = 0;
  public isRequesting: boolean = true;
  public subtitle = "Estado de cuentas";

  constructor(
    // private accountingService: AccountingService,
    private route: ActivatedRoute,
    // private appGlobals: AppGlobals
    ) {

  }

  getAccountingByClinic(status:string) {
    this.isRequesting = true;
    // var start = $('#dateStart').val() == "" ? "!" : $('#dateStart').val();
    // var end = $('#dateEnd').val() == "" ? "!" : $('#dateEnd').val();
    // var query = $('#query').val() == "" ? "!" : $('#query').val();
    // start = start.replace("/", "-");
    // start = start.replace("/", "-");
    // end = end.replace("/", "-");
    // end = end.replace("/", "-");

    this.response = new Response();
    // this.accountingService
    //   .getAccountingByClinic(this.appGlobals.clinic.getValue().Id, status, start, end, query)
    //   .then(response => {
    //     this.response = response;
    //     this.totalPayment = 0;
    //     this.totalAmount = 0;
    //     this.Owed = 0;
    //     for (var i = 0; i < this.response.Data.length; i++) {
    //       this.totalPayment = this.totalPayment + parseFloat(this.response.Data[i].Payment);
    //       this.totalAmount = this.totalAmount + parseFloat(this.response.Data[i].TreatmentAmount);
    //       this.totalOwed = this.totalOwed + parseFloat(this.response.Data[i].Owed);
    //     }

    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['status']) {
        let status = params['status'];
        this.getAccountingByClinic(status);
      }
    });
  }

  ngAfterViewInit() {
    // $('.date-time-picker').datetimepicker();
    // $('.time-picker').datetimepicker({ format: 'LT' });
    // $('.date-picker').datetimepicker({ format: 'DD/MM/YYYY' });
  }

}
