import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  //  standalone: true,
  selector: 'paciente-create-paciente-page',

  // imports: [NgbDatepicker],
  templateUrl: './create-paciente-page.component.html',
  styleUrls: ['./create-paciente-page.component.css'],


})
export class CreatePacientePageComponent {

  title = 'Datos personales';

  // @Input() patient: Patient;
  // @Input() person: Person;
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
  save(): void {

  }
  cancel(): void {

  }


  // constructor(private router: Router, private route: ActivatedRoute, private appGlobals: AppGlobals,
  //   private patientService: PatientService, private profileService: ProfileService, private fileService: FileService,
  //   private notification: NotificationMessage) {
  // }

  // ngOnInit() {

  //   var user = JSON.parse(localStorage.getItem('user')).Data;
  //   this.isSuperAdmin = user.Id == 3;

  //   this.sub = this.route.params.subscribe(params => {
  //     this.navigated = true;
  //     if (params['id'] != -1) {
  //       let id = +params['id'];
  //       this.navigated = true;
  //       this.patient = new Patient();
  //       this.person = new Person();
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
  //     } else {
  //       this.newPatient = true;
  //       this.patient = new Patient();
  //       this.person = new Person();
  //       this.patient.personalAndFamilyHistory = JSON.parse(localStorage.getItem('catalog')).Data.PERSONALANDFAMILYHISTORY;
  //       this.patient.vitalSigns = JSON.parse(localStorage.getItem('catalog')).Data.VITALSIGNS;
  //       this.patient.stomatognathicSystem = JSON.parse(localStorage.getItem('catalog')).Data.STOMATOGNATHICSYSTEM;
  //       this.patient.PatientFromPartner = false;
  //     }
  //   });
  // }

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

  // cancel(savedPatient: Patient = null) {
  //   this.close.emit(savedPatient);
  //   if (this.navigated) { window.history.back(); }
  // }
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

  // ngAfterViewInit() {
  //   $('.date-time-picker').datetimepicker();
  //   $('.time-picker').datetimepicker({ format: 'LT' });
  //   $('.date-picker').datetimepicker({ format: 'DD/MM/YYYY' });
  // }

}
