import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/presentation/base/Response';

@Component({
  selector: 'create-notificacion-page',
  templateUrl: './create-notificacion-page.component.html',
  styleUrls: ['./create-notificacion-page.component.css']
})
export class CreateNotificacionPageComponent {

  public sub: any;
  public error: any;
  public response!: Response;
  public responsePerson!: Response;
  public totalPayment: number = 0;
  public totalAmount: number = 0;
  public isRequesting: boolean = true;
  subtitle = "Alertas";
  isSuperAdmin: boolean = false;

  constructor(
    // private notificationService: NotificationService,
    private route: ActivatedRoute,
    // private appGlobals: AppGlobals, private appoitmentService: AppoitmentService, private profileService: ProfileService
    ) {
  }

  getNotificationsByClinicId() {
    this.isRequesting = true;
    var idEmployee = -1;
    // if (this.appGlobals.owner.getValue() === false) {
    //   idEmployee = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
    // }
    this.response = new Response();
    // this.notificationService
    //   .getNotificationsByClinicId(this.appGlobals.clinic.getValue().Id, idEmployee)
    //   .then(response => {
    //     this.response = response;
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  onChangeApp(value:string, item:any) {
    item.appoitment.Status = value;
    switch (value) {
      case "PLANNED":
        item.appoitment.ClassName = "bgm-red";
        break;
      case "SCHEDULED":
        item.appoitment.ClassName = "bgm-orange";
        break;
      case "CONFIRMED":
        item.appoitment.ClassName = "bgm-green";
        break;
      case "CANCELLED":
        item.appoitment.ClassName = "bgm-black";
        break;
      case "NOTASSIST":
        item.appoitment.ClassName = "bgm-gray";
        break;
      default:
    }

    // this.appoitmentService
    //   .save(item.appoitment)
    //   .then(response => {
    //     this.getNotificationsByClinicId();
    //   })
    //   .catch(error => this.error = error);
  }

  ngOnInit() {
    // var user = JSON.parse(localStorage.getItem('user')).Data;
    // this.isSuperAdmin = user.Id == 3;
    this.getNotificationsByClinicId();
  }

  openWhatsApp(item:any) {
    var code = "593"
    item.mobile = item.mobile[0] == "0" ? item.mobile : "0" + item.mobile;
    var phone = code + item.mobile;

    var when = "";
    if (item.cantDays == 0)
      when = " para el dia de Hoy"
    if (item.cantDays == 1)
      when = " dento de " + item.cantDays + " un dia";
    if (item.cantDays > 1)
      when = " dento de " + item.cantDays + " dias";

    var linkConfirm = "http://web.odontofy.com/OdontoFyWebApi/api/Appoitment/Status/CONFIRMED/" + item.appoitment.Id;

    var linkCancel = "http://web.odontofy.com/OdontoFyWebApi/api/Appoitment/Status/CANCELLED/" + item.appoitment.Id;

    var title = "EL ODONTOLOGO ";
    if (!item.profesional.p.Sex)
      title = "LA ODONTOLOGA ";

    var profesional = title + item.profesional.p.Name + " " + item.profesional.p.LastNames;

    var text = 'LE RECORDAMOS LA CITA DE: ' + item.title + when + " CON " + profesional + ". Para confirmar su cita presione el siguiente link: " + linkConfirm + " o para cancelar presione: " + linkCancel;

    window.open(
      'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURI(text),
      '_blank'
    );
  }


}
