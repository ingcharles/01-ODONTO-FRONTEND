import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/presentation/base/services/alerts.service';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { messages } from 'src/presentation/base/messages';
import { IGetPacienteByIdViewModel, ISavePacienteViewModel, IUpdatePacienteViewModel } from 'src/domain/paciente/viewModels/i-paciente.viewModel';
import { PacienteUseCase } from 'src/domain/paciente/useCases/paciente.usecase';

declare var $: any;
@Component({
  selector: 'paciente-create-paciente-page',
  templateUrl: './create-paciente-page.component.html',
  styleUrls: ['./create-paciente-page.component.css'],
})
export class CreatePacientePageComponent {

  constructor(private _route: ActivatedRoute, private _alertService: AlertsService, private _loaderService: LoaderService, private _pacienteUseCase: PacienteUseCase) { }

  // constructor(private router: Router, private route: ActivatedRoute,
  //   //  private appGlobals: AppGlobals,
  // //   private patientService: PatientService, private profileService: ProfileService, private fileService: FileService,
  // //   private notification: NotificationMessage
  // ) {
  //  }
  title = 'Datos personales';

  @Input() patient!: Paciente;
  // @Input() person!: Persona;
  @Output() close = new EventEmitter();
  navigated = false; // true if navigated here
  sub: any;
  vitalSigns: any;
  stomatognathicSystem: any;
  // response: Response;
  // public isRequesting: boolean;
  imageSrc: string = '';
  isSuperAdmin: boolean = false;
  newPatient: boolean = false;
  savePaciente(): void {
    if (this.formPaciente.invalid) {
      this.formPaciente.markAllAsTouched();
      this._alertService.alertMessage(messages.advertenciaTitle, messages.camposVacios, 'warning');
      return;
    }


    console.log('currentPaciente',this.currentPaciente);
    //* entra editar Paciente
    if (this.currentPaciente.id_paciente) {
      console.log('currentPacienteaa',this.currentPaciente);
      this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmUpdate, () => {
        this.currentPaciente.fecha_nacimiento = $('#fecha_nacimiento').val();
          this._pacienteUseCase.updatePaciente(this.currentPaciente as IUpdatePacienteViewModel).then(obs => {
              obs.subscribe((result) => {
                  if (result.ok) {
                      this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);

                  } else {
                      this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
                  }
              })
          });
      });
      return;
    }

    this._alertService.alertConfirm(messages.confirmacionTitle, messages.confirmSave, () => {
      // var datePipe = new DatePipe('en-US');
      console.log("ssss", this.formPaciente.value["fecha_nacimiento"]);
      // console.log("a",$('#fecha_nacimiento').val());
      // this.formPaciente.value["fecha_nacimiento"] = datePipe.transform(this.formPaciente.value["fecha_nacimiento"], 'yyyy-MM-dd');

      this.formPaciente.value['fecha_nacimiento'] = $('#fecha_nacimiento').val();
      this._pacienteUseCase.savePaciente(this.formPaciente.value as ISavePacienteViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {

          this._loaderService.display(false);
          if (result.ok) {

            this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);

          } else {

            this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
          }
        })
      });
    });

  };

  // email: string;
  // emailControl: AbstractControl;
  public formPaciente!: FormGroup;
  // emailControl!: AbstractControl;
  ngOnInit() {

    this.formPaciente = new FormGroup({
      id_paciente: new FormControl(null),
      dni: new FormControl('', Validators.compose([Validators.required])),
      nombre: new FormControl('', Validators.compose([Validators.required])),
      apellido: new FormControl('', Validators.compose([Validators.required])),
      celular: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl('', Validators.compose([Validators.email])),
      sexo: new FormControl('', Validators.compose([Validators.required])),
      fecha_nacimiento: new FormControl('', Validators.compose([Validators.required])),
      direccion: new FormControl(''),
    });


    // this.emailControl = this.myForm.controls['email'];

    //   var user = JSON.parse(localStorage.getItem('user')).Data;
    //  this.isSuperAdmin = user.Id == 3;
    this.patient = new Paciente();
    //  this.person = new Persona();
    this.sub = this._route.params.subscribe(params => {
      this.navigated = true;
      if (params['id'] != -1) {
        let id = +params['id'];
        this.navigated = true;
        console.log("aaaa");
        let id_paciente: IGetPacienteByIdViewModel = { id_paciente: id };
        this._pacienteUseCase.getPacienteById(id_paciente).then(obs => {
          this._loaderService.display(true);
          obs.subscribe((result) => {

            this._loaderService.display(false);
            console.log("result", result);
            if (result.ok) {

              //this._alertService.alertMessage(messages.exitoTitle, result.message, messages.isSuccess);
              this.formPaciente.reset(result.data);
              var fechaNacimientoString = result.data?.fecha_nacimiento?.toString();
              const [year, month, day] = fechaNacimientoString!.split('-');
              const fechaNacimiento = {
                year: parseInt(year), month: parseInt(month), day:
                  parseInt(day.split(' ')[0].trim())
              };

              this.formPaciente.get('fecha_nacimiento')?.setValue(fechaNacimiento);
            } else {

              this._alertService.alertMessage(messages.advertenciaTitle, result.message, messages.isWarning);
            }
          });
        });
        //       this.patientService.getPatient(id)
        //         .then(patient => {
        //           this.response = patient;
        //           this.patient = this.response.Data;
        //           this.person = this.patient.Person;
        //           var datePipe = new DatePipe();
        //           this.person.DateOfBirth = datePipe.transform(this.person.DateOfBirth, 'dd/MM/yyyy');
        //           this.patient.personalAndFamilyHistory = this.patient.Patients_Catalog_By_Type.PERSONALANDFAMILYHISTORY;
        //           this.patient.vitalSigns = this.patient.Patients_Catalog_By_Type.VITALSIGNS;
        //           this.patient.stomatognathicSystem = this.patient.Patients_Catalog_By_Type.STOMATOGNATHICSYSTEM;
        //           this.getFilesById();
        //         });
      } else {
        // this.newPatient = true;

        // this.patient.personalAndFamilyHistory = JSON.parse(localStorage.getItem('catalog')).Data.PERSONALANDFAMILYHISTORY;
        // this.patient.vitalSigns = JSON.parse(localStorage.getItem('catalog')).Data.VITALSIGNS;
        // this.patient.stomatognathicSystem = JSON.parse(localStorage.getItem('catalog')).Data.STOMATOGNATHICSYSTEM;
        // this.patient.patientFromPartner = false;
      }
    });
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  // save() {
  //   this.patient.ClinicId = this.appGlobals.clinic.getValue().Id;
  //   this.person.Active = true;
  //   this.isRequesting = true;
  //   this.person.DateOfBirth = $('#DateOfBirth').val();
  //   this.person.strDateOfBirth = $('#DateOfBirth').val();
  //   this.person.Role = "PATIENT";

  //   var binaryString = document.getElementById("imageSrc").src;
  //   this.person.Image = binaryString.split(',').length > 1 ? binaryString.split(',')[1] : "";
  //   this.profileService.save(this.person)
  //     .then(response_person => {
  //       this.patient.PersonId = response_person.Data.Id;
  //       this.patientService.save(this.patient)
  //         .then(patient => {
  //           localStorage.setItem("current_patient", JSON.stringify(patient.Data));
  //           this.isRequesting = false;
  //           this.notification.notifySuccess("Guardar paciente");
  //           window.history.back();
  //         });
  //     });
  // }
  // savedPatient: Paciente = null
  cancelPaciente() {
    this.close.emit(true);
    if (this.navigated) { window.history.back(); }
  }
  // goBack(savedPatient: Patient = null) {
  //   this.close.emit(savedPatient);
  //   if (this.navigated) { window.history.back(); }
  // }

  // getFilesById() {

  //   this.fileService.getFileByModelId("Profile", this.person.Id)
  //     .then(files => {
  //       for (var i = 0; i < files.Data.length; i++) {
  //         this.imageSrc = "http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + files.Data[i].Id;
  //       }
  //     });
  // }

  ngAfterViewInit() {
    // $('.date-time-picker').datetimepicker();
    // $('.time-picker').datetimepicker({ format: 'LT' });
    //$('#fecha_nacimiento').datetimepicker({ format: 'DD/MM/YYYY' });
  }

  /**
  ** Método get que permite obtener el valor del formulario convertir a tipo ClaseCrca
  * @returns {IUpdatePacienteViewModel}
  */
  private get currentPaciente(): IUpdatePacienteViewModel {
    return this.formPaciente.value as IUpdatePacienteViewModel;

  }

}
