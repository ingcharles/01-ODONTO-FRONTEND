import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/presentation/home/models/persona';
import { Paciente } from 'src/presentation/paciente/models/paciente';
import { Odontograma } from '../../models/odontograma';
import { DiagnosticoPlan } from 'src/presentation/diagnostico-plan/models/diagnostico-plan';
import { Response } from 'src/presentation/base/Response';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'create-odontograma-page',
  templateUrl: './create-odontograma-page.component.html',
  styleUrls: ['./create-odontograma-page.component.css']
})
export class CreateOdontogramaPageComponent {

  title = 'Odontograma';
  subtitle = 'Odontograma de';
  description_subtitle = '';

  @Input() odontogram!: Odontograma;
  @Output() closeE = new EventEmitter();

  public isRequesting: boolean = true;
  public legend!: string;
  sub: any;
  error: any;
  private response!: Response;
  private treatments!: Response;
  public responseATLeft: any[] = [];
  public responseATRight: any[] = [];
  public responseADLeft: any[] = [];
  public responseADRight: any[] = [];
  public responseCTLeft: any[] = [];
  public responseCTRight: any[] = [];
  public responseCDLeft: any[] = [];
  public responseCDRight: any[] = [];

  // public teeths!: any[];
  public age!: number;
  public id!: number;
  @Input()  patientSelect!: Paciente;
  @Input() personSelect!: Persona;
  public catalogs!: any[];
  public diagnosisPlan!: DiagnosticoPlan;
  responsePatient: any;

  constructor(
    private router: Router, private route: ActivatedRoute,
    //private odontogramService: OdontogramService,
    // private appGlobals: AppGlobals, private patientService: PatientService, private diagnosisPlanService: DiagnosisPlanService,
    // private treatmentService: TreatmentService
    ) {
  }

  ngOnInit() {
    this.odontogram = new Odontograma();
    this.inittooth();

     this.sub = this.route.params.subscribe(params => {
       if (params['id'] != -1) {
         this.id = +params['id'];
           this.getOdontogramByPatientId(this.id);
    //     this.odontogram.PatientId = this.id;

    //     this.patientSelect = new Patient();
    //     this.personSelect = new Person();
    //     this.patientService.getPatient(this.id)
    //       .then(patient => {
    //         this.responsePatient = patient;
    //         this.patientSelect = this.responsePatient.Data;
    //         this.personSelect = this.patientSelect.Person;
    //         this.appGlobals.setPatient(this.patientSelect);
    //         this.age = this.personSelect.Age;
          // });
    this.catalogs = [
      { Description: "bgm-black|Descipción diagnóstico 1|triangle|right|1-2", Name:"Diagnóstico 1"},
      { Description: "bgm-orange|Descipción diagnóstico 2|equis|left|1-2", Name: "Diagnóstico 2" },
      { Description: "bgm-green|Descipción diagnóstico 3|screw|bottom|1-2", Name: "Diagnóstico 3" },//Tornillo
      { Description: "bgm-red|Descipción diagnóstico 4|circle|all|1-2", Name: "Diagnóstico 4" },
      { Description: "bgm-gray|Descipción diagnóstico 5|asterisk|center|1-2-10", Name: "Diagnóstico 5" },
      { Description: "bgm-blue|Descipción diagnóstico 6|asterisk|all|1-2-10", Name: "Diagnóstico 6" },
    ]

        //  this.catalogs = JSON.parse(localStorage.getItem('catalog')).Data.ODONTOGRAMSTATUS;

    //     var idClinic = this.appGlobals.clinic.getValue().Id;
    //     this.treatmentService.getTreatmentsByClinic(idClinic)
    //       .then(treatments => {
    //         this.treatments = treatments.Data;
    //       });

      }
      if (params['age'] != -1) {
        this.age = +params['age'];
      }
    });

  }

  getOdontogramByPatientId(idPatient:number) {
    this.response = new Response();
    //tooth: { Top: { Color: string, Diagnostic: string }, Bottom: { Color: string, Diagnostic: string }, Left: { Color: string, Diagnostic: string }, Right: { Color: string, Diagnostic: string }, Center: { Color: string, Diagnostic: string }, Shape: string };
//  case "PLANNED":
//     item.appoitment.ClassName = "bgm-red";
//     break;
//             case "SCHEDULED":
//     item.appoitment.ClassName = "bgm-orange";
//     break;
//             case "CONFIRMED":
//     item.appoitment.ClassName = "bgm-green";
//     break;
//             case "CANCELLED":
//     item.appoitment.ClassName = "bgm-black";
//     break;
//             case "NOTASSIST":
//     item.appoitment.ClassName = "bgm-gray";
//     break;
//             default:
    // <select class="form-control" id = "statusAppoitment"[ngClass] = "item.appoitment.ClassName"(change) = "onChangeApp($event.target.value, item)" >
    //   <option class="bgm-red" value = "PLANNED"[selected] = "item.appoitment.Status == 'PLANNED'" > Planificado < /option>
    //     < option class="bgm-orange" value = "SCHEDULED"[selected] = "item.appoitment.Status == 'SCHEDULED'" > Agendado < /option>
    //       < option class="bgm-green" value = "CONFIRMED"[selected] = "item.appoitment.Status == 'CONFIRMED'" > Confirmado < /option>
    //         < option class="bgm-black" value = "CANCELLED"[selected] = "item.appoitment.Status == 'CANCELLED'" > Cancelado < /option>
    //           < option class="bgm-gray" value = "NOTASSIST"[selected] = "item.appoitment.Status == 'NOTASSIST'" > No Asistido </>
    this.response.Data = [
      //PIEZA ADULTO 11 A 18 SUPERIOR IZQUIERDA
      { toothNumber: 11, tooth: { top: { color: "bgm-red", diagnostic:"Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape:"triangle-bgm-red-all" }},
      { toothNumber: 12, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },
      { toothNumber: 13, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },
      { toothNumber: 14, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },
      { toothNumber: 15, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },
      { toothNumber: 16, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },
      { toothNumber: 17, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },
      { toothNumber: 18, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "triangle-bgm-blue-all" } },

      //PIEZA ADULTO 21 A 28 SUPERIOR DERECHA
      { toothNumber: 21, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 22, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 23, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 24, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 25, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 26, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 27, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },
      { toothNumber: 28, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-red-all" } },

      //PIEZA ADULTO 31 A 38 SUPERIOR DERECHA
      { toothNumber: 31, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 32, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 33, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 34, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 35, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 36, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 37, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },
      { toothNumber: 38, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "equis-bgm-blue-all " } },

      //PIEZA NIÑOS 41 A 48 INFERIOR IZQUIERDA
      { toothNumber: 41, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 42, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 43, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 44, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 45, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 46, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 47, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },
      { toothNumber: 48, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-blue-all " } },

      //PIEZA NIÑOS 51 A 55 SUPERIOR IZQUIERDA
      { toothNumber: 51, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-red-all " } },
      { toothNumber: 52, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-red-all " } },
      { toothNumber: 53, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-red-all " } },
      { toothNumber: 54, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-red-all " } },
      { toothNumber: 55, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "screw-bgm-red-all " } },

      //PIEZA NIÑOS 61 A 65 SUPERIOR DERECHA
      { toothNumber: 61, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-red-all" } },
      { toothNumber: 62, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-red-all" } },
      { toothNumber: 63, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-red-all" } },
      { toothNumber: 64, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-red-all" } },
      { toothNumber: 65, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-red-all" } },

      //PIEZA NIÑOS 71 A 55 INFERIOR DERECHA
      { toothNumber: 71, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-blue-all" } },
      { toothNumber: 72, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-blue-all" } },
      { toothNumber: 73, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-blue-all" } },
      { toothNumber: 74, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-blue-all" } },
      { toothNumber: 75, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "circle-bgm-blue-all" } },

      //PIEZA NIÑOS 81 A 85 INFERIOR IZQUIERDA
      { toothNumber: 81, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "asterisk-bgm-red-all" } },
      { toothNumber: 82, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "asterisk-bgm-blue-all" } },
      { toothNumber: 83, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "" }, bottom: { color: "" }, right: { color: "" }, center: { color: "" }, shape: "" } },
      { toothNumber: 84, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "" }, bottom: { color: "" }, right: { color: "" }, center: { color: "" }, shape: "" } },
      { toothNumber: 85, tooth: { top: { color: "bgm-red", diagnostic: "Diagnostico1" }, left: { color: "bgm-green" }, bottom: { color: "bgm-orange" }, right: { color: "bgm-black" }, center: { color: "" }, shape: "asterisk-bgm-blue-all" } },


      //  { toothNumber: 21 }, { toothNumber: 41 }, { toothNumber: 31 }
    ]
    // this.odontogramService
    //   .getOdontogramByPatientId(idPatient)
    //   .then(response => {
    //     this.response = response;
    console.log("this.response.Data ", this.response.Data );
        for (var item of this.response.Data) {
          if (item.toothNumber > 10 && item.toothNumber < 19) {
            this.responseATLeft.push(item);
          }
          if (item.toothNumber > 20 && item.toothNumber < 29) {
            this.responseATRight.push(item);
          }
          if (item.toothNumber > 40 && item.toothNumber < 49) {
            this.responseADLeft.push(item);
          }
          if (item.toothNumber > 30 && item.toothNumber < 39) {
            this.responseADRight.push(item);
          }

          if (item.toothNumber > 50 && item.toothNumber < 56) {
            this.responseCTLeft.push(item);
          }
          if (item.toothNumber > 60 && item.toothNumber < 66) {
            this.responseCTRight.push(item);
          }
          if (item.toothNumber > 80 && item.toothNumber < 86) {
            this.responseCDLeft.push(item);
          }
          if (item.toothNumber > 70 && item.toothNumber < 76) {
            this.responseCDRight.push(item);
          }
        }
    //     this.isRequesting = false;
    //   })
    //   .catch(error => this.error = error);
  }

  showOdontogram(toothNumber:number) {
    this.odontogram = new Odontograma();
    this.inittooth();
    this.odontogram.toothNumber = toothNumber;
    for (var item of this.response.Data) {
      if (item.toothNumber == toothNumber) {
        this.odontogram.tooth = item.tooth;
      }
    }
  }


  save() {
    this.odontogram.active = true;
    this.odontogram.patientId = this.id;
    this.odontogram.toothDetails = JSON.stringify(this.odontogram.tooth);
    // this.odontogramService.save(this.odontogram)
    //   .then(odontogram => {

    //     if (this.odontogram.toothStatusId != 0) {
    //       for (var i = 0; i < this.treatments.length; i++) {

    //         if (this.treatments[i].TreatmentsTypeId == this.odontogram.toothStatusId) {
    //           this.diagnosisPlan = new Diagnosis_Plan();
    //           this.diagnosisPlan.DoctorDiagnosticId = JSON.parse(localStorage.getItem('user')).Data.Employees[0].Id;
    //           this.diagnosisPlan.DoctorExecuteId = this.diagnosisPlan.DoctorDiagnosticId;
    //           this.diagnosisPlan.PatientId = this.id;
    //           this.diagnosisPlan.TreatmentId = this.treatments[i].Id;
    //           this.diagnosisPlan.TreatmentAmount = this.treatments[i].Price;
    //           this.diagnosisPlan.PercentSpecialDiscount = this.treatments[i].Discount;
    //           this.diagnosisPlan.tooth = this.odontogram.toothNumber.toString();

    //           this.diagnosisPlanService.save(this.diagnosisPlan)
    //             .then(diagnosisPlan => {
    //               this.isRequesting = false;
    //             });
    //         }
    //       }
    //     }

    //   });
  }

  close() {
    this.inittooth();
  }

  goBack() {
    window.history.back();
  }

  selectSquare(face:string) {
    this.odontogram.face = face;
    console.log("this.odontogram.face", this.odontogram.face);
    console.log("this.odontogram.tooth.top.color",this.odontogram.tooth.top.color);
    switch (this.odontogram.face) {
      case "top":
        this.odontogram.tooth.top.color = (this.odontogram.tooth.top.color == '' ? 'bgm-gray' : '');
        break;
      case "bottom":
        this.odontogram.tooth.bottom.color = (this.odontogram.tooth.bottom.color == '' ? 'bgm-gray' : '');
        break;
      case "left":
        this.odontogram.tooth.left.color = (this.odontogram.tooth.left.color == '' ? 'bgm-gray' : '');
        break;
      case "right":
        this.odontogram.tooth.right.color = (this.odontogram.tooth.right.color == '' ? 'bgm-gray' : '');
        break;
      case "center":
        this.odontogram.tooth.center.color = (this.odontogram.tooth.center.color == '' ? 'bgm-gray' : '');
        break;
    }
  }

  selectTagColor(description:string, name:string) {

    var color = "";
    var diagnostic = "";
    var shape = "";
    var face = "";
    var treatmentsTypeIds = [];

    var res = description.split("|");
    color = res[0];
    diagnostic = res[1];
    shape = res[2];
    face = res[3];
    treatmentsTypeIds = res[4].split("-");

    var countFaces = 0;
    console.log("face", shape + "-" + color + "-" + face);
    if (face == "all") {
      this.odontogram.tooth.shape = shape + "-" + color + "-" + face;
      this.odontogram.tooth.center.color = "";
      this.odontogram.tooth.top.diagnostic = "";
      this.odontogram.tooth.bottom.diagnostic = "";
      this.odontogram.tooth.left.diagnostic = "";
      this.odontogram.tooth.right.diagnostic = "";

      this.odontogram.tooth.top.diagnostic = diagnostic;
      this.odontogram.tooth.bottom.diagnostic = diagnostic;
      this.odontogram.tooth.left.diagnostic = diagnostic;
      this.odontogram.tooth.right.diagnostic = diagnostic;
      this.odontogram.tooth.center.diagnostic = diagnostic;
      countFaces += 1;
    }
    else {
      if (this.odontogram.tooth.top.color != "") {
        this.odontogram.tooth.top.color = color;
        this.odontogram.tooth.top.diagnostic = diagnostic;
        this.odontogram.tooth.shape = "";
        countFaces += 1;
      }
      if (this.odontogram.tooth.bottom.color != "") {
        this.odontogram.tooth.bottom.color = color;
        this.odontogram.tooth.bottom.diagnostic = diagnostic;
        this.odontogram.tooth.shape = "";
        countFaces += 1;
      }
      if (this.odontogram.tooth.left.color != "") {
        this.odontogram.tooth.left.color = color;
        this.odontogram.tooth.left.diagnostic = diagnostic;
        this.odontogram.tooth.shape = "";
        countFaces += 1;
      }
      if (this.odontogram.tooth.right.color != "") {
        this.odontogram.tooth.right.color = color;
        this.odontogram.tooth.right.diagnostic = diagnostic;
        this.odontogram.tooth.shape = "";
        countFaces += 1;
      }
      if (this.odontogram.tooth.center.color != "") {
        this.odontogram.tooth.center.color = color;
        this.odontogram.tooth.center.diagnostic = diagnostic;
        this.odontogram.tooth.shape = "";
        countFaces += 1;
      }
    }

    if (countFaces > 3)
      countFaces = 3;

    this.odontogram.toothStatusId = parseInt(treatmentsTypeIds[countFaces - 1]);
    this.legend = name;
  }

  inittooth() {
    this.odontogram.tooth = { top: { color: '', diagnostic: '' }, bottom: { color: '', diagnostic: '' }, left: { color: '', diagnostic: '' }, right: { color: '', diagnostic: '' }, center: { color: '', diagnostic: '' }, shape: '' };
  }

}
