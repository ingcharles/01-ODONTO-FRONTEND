import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/presentation/base/Response';
import { Paciente } from 'src/presentation/paciente/models/paciente';
@Component({
  selector: 'create-detail-estado-cuenta-page',
  templateUrl: './create-detail-estado-cuenta-page.component.html',
  styleUrls: ['./create-detail-estado-cuenta-page.component.css']
})
export class CreateDetailEstadoCuentaPageComponent {

  @Output() close = new EventEmitter();
  public title = 'Detalles';
  public sub_title = 'Detalles de pagos';
  public sub_title_description = 'Detalles de pagos';
  public navigated = false; // true if navigated here
  sub: any;
  public cat: any;
  public response!: Response;
  error: any;

  constructor(
    // private accountingService: AccountingService,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] != -1) {
        let id = +params['id'];
        let status = params['status'];
        this.navigated = true;
        this.response = new Response();
        // this.accountingService
        //   .getAccountingByPatient(id, status)
        //   .then(response => {
        //     this.response = response;
        //   })
        //   .catch(error => this.error = error);
      } else {
        this.navigated = false;
        this.response = new Response();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(savedPatient: Paciente) {
    this.close.emit(savedPatient);
    if (this.navigated) { window.history.back(); }
  }


}
