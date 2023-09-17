import { Component, Input } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { Persona } from 'src/presentation/home/models/persona';
import { Cita } from 'src/presentation/agendar-cita/models/cita';
import { Response } from 'src/presentation/base/Response';
import { DiagnosticoPlan } from 'src/presentation/diagnostico-plan/models/diagnostico-plan';
import { Clinica } from 'src/presentation/clinica/models/clinica';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-paciente-page',
  templateUrl: './dashboard-paciente-page.component.html',
  styleUrls: ['./dashboard-paciente-page.component.css']
})
export class DashboardPacientePageComponent {


  title = 'Paciente';

  @Input() patient!: Paciente;
  @Input() person!: Persona;
  @Input() appoiment!: Cita;
  public navigated = false;
  public sub: any;
  public vitalSigns: any;
  public stomatognathicSystem: any;
  public response!: Response;
  private diagnosis_plans!: DiagnosticoPlan[];
  public isRequesting: boolean = true;
  public filesPatient: string[] = [];
  public profileImg: string = '../img/profile-pics/no-photo.jpg';
  public clinic!: Clinica;
  public hiddenOdonto: boolean = true;
  public imageSrcBefore: string = '';
  public imageSrcAfter: string = '';
  public isSuperAdmin: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute,
    // private appGlobals: AppGlobals, private patientService: PatientService,
    // private profileService: ProfileService, private diagnosisPlanService: DiagnosisPlanService, private fileService: FileService, private appoitmentService: AppoitmentService
    ) {
  }

  ngOnInit() {

    // var user = JSON.parse(localStorage.getItem('user')).Data;
    // this.isSuperAdmin = user.Id == 3;

    // this.clinic = user.Clinics[0];

    if (this.clinic != undefined) {
      if (this.clinic.Clinic_Specialties.length > 0 && this.clinic.Clinic_Specialties[0].SpecialtiesId != null && this.clinic.Clinic_Specialties[0].SpecialtiesId != undefined)
        this.clinic.SpecialtyId = this.clinic.Clinic_Specialties[0].SpecialtiesId;
      else
        this.clinic.SpecialtyId = -1;

      this.hiddenOdonto = false; //JSON.parse(localStorage.getItem('catalog')).Data.CLINICTYPES.filter(x => x.Id == this.clinic.SpecialtyId)[0].Description != 'ODONTO';
    }
    else
      this.hiddenOdonto = false;

    this.patient = new Paciente();
    this.person = new Persona();
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] != -1) {
        let id = +params['id'];
        this.navigated = true;

        // this.patientService.getPatient(id)
        //   .then(patient => {
        //     this.response = patient;
        //     this.patient = this.response.Data;
        //     this.person = this.patient.Person;
        //     var datePipe = new DatePipe();
        //     this.person.DateOfBirth = datePipe.transform(this.person.DateOfBirth, 'yyyy-MM-dd');

        //     this.patient.personalAndFamilyHistory = this.patient.Patients_Catalog_By_Type.PERSONALANDFAMILYHISTORY;
        //     this.patient.vitalSigns = this.patient.Patients_Catalog_By_Type.VITALSIGNS;
        //     this.patient.stomatognathicSystem = this.patient.Patients_Catalog_By_Type.STOMATOGNATHICSYSTEM;
        //     this.getFilesById();
        //     this.isRequesting = true; //TODO:false
        //     0
        //   });
      } else {
        this.navigated = false;


        // this.patient.personalAndFamilyHistory = JSON.parse(localStorage.getItem('catalog')).Data.PERSONALANDFAMILYHISTORY;
        // this.patient.vitalSigns = JSON.parse(localStorage.getItem('catalog')).Data.VITALSIGNS;
        // this.patient.stomatognathicSystem = JSON.parse(localStorage.getItem('catalog')).Data.STOMATOGNATHICSYSTEM;
      }
    });

    this.appoiment = new Cita();
    this.appoiment.DateType = "month";

  }

  delete(id:number) {

  }

  ngAfterViewInit() {

  }

  addFileStatus(status:string): void {
    var obj = document.getElementById("image-" + status);
    // var binaryString = obj.childNodes[0].childNodes[3].currentSrc;

    // var file = new File();
    // file.Model = status == "All" ? "Patient" : "Patient-" + status;
    // file.ModelId = this.patient.Id.toString();
    // file.Name = "Patient-" + this.patient.Id.toString();
    // file.Base64 = binaryString.split(',')[1];
    // if (file.Base64 != undefined) {
    //   this.fileService.save(file)
    //     .then(file => {
    //       var image = new File();
    //       image = file.Data;
    //       if (status == "All") {
    //         document.getElementById("imageSrc").src = "";
    //         this.filesPatient.push("http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + image.Id);
    //       }
    //       if (status == "Before") {
    //         this.imageSrcBefore = "http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + image.Id;
    //       }
    //       if (status == "After") {
    //         this.imageSrcAfter = "http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + image.Id;
    //       }
    //     });
   // }
  }

  close() {
    // document.getElementById("imageSrc").src = "";
  }

  getFilesById() {

    // this.fileService.getFileByModelId("Profile", this.person.Id)
    //   .then(files => {
    //     for (var i = 0; i < files.Data.length; i++) {
    //       this.profileImg = "http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + files.Data[i].Id;
    //     }
    //   });

    // this.fileService.getFileByModelId("Patient", this.patient.Id)
    //   .then(files => {
    //     this.filesPatient = [];
    //     for (var i = 0; i < files.Data.length; i++) {
    //       this.filesPatient.push("http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + files.Data[i].Id);
    //     }
    //   });

    // this.fileService.getFileByModelId("Patient-Before", this.patient.Id)
    //   .then(files => {
    //     for (var i = 0; i < files.Data.length; i++) {
    //       this.imageSrcBefore = "http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + files.Data[i].Id;
    //     }
    //   });

    // this.fileService.getFileByModelId("Patient-After", this.patient.Id)
    //   .then(files => {
    //     for (var i = 0; i < files.Data.length; i++) {
    //       this.imageSrcAfter = "http://web.odontofy.com/OdontoFyWebApi/api/File/ById/" + files.Data[i].Id;
    //     }
    //   });
  }

  zoomImage(file:string) {
    // document.getElementById("zoomImg").src = file;
  }

  deleteFile() {
    // var uelementsDeleteImage = document.getElementById("zoomImg").src.split('/');
    // var idDeleteImage = uelementsDeleteImage[uelementsDeleteImage.length - 1];
    // this.fileService.delete(idDeleteImage)
    //   .then(files => {
    //     this.getFilesById();
    //   });
  }

  createNextAppoiment() {
    if (this.appoiment.CantDateType != null) {
      this.appoiment.Status = "PLANNED";
      // this.appoiment.ClinicId = this.appGlobals.clinic.getValue().Id;
      this.appoiment.PatientId = this.patient.Id;
      this.appoiment.ClassName = "bgm-red";
      // this.appoitmentService.save(this.appoiment)
      //   .then(response => { })
      //   .catch(error => this.error = error);
    }
  }

  print() {
    let popupWinindow
    // let innerContents = document.getElementById("patientView").innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    // popupWinindow.document.open();

    // popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    // popupWinindow.document.close();
  }




}
