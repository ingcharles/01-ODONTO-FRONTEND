import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/presentation/base/Response';
@Component({
  selector: 'create-estado-cuenta-page',
  templateUrl: './create-estado-cuenta-page.component.html',
  styleUrls: ['./create-estado-cuenta-page.component.css']
})
export class CreateEstadoCuentaPageComponent {


  @Output() close = new EventEmitter();
  title = 'Detalles';
  subtitle = 'Detalles de pagos';
  description_subtitle = 'Detalles de pagos';
  navigated = false; // true if navigated here
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

  goBack() {
    //if (this.navigated) {
    window.history.back();
    //}
  }



}
