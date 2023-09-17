import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { Persona } from 'src/presentation/home/models/persona';
import { Response } from 'src/presentation/base/Response';
import { DiagnosticoPlan } from 'src/presentation/diagnostico-plan/models/diagnostico-plan';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'view-paciente-page',
  templateUrl: './view-paciente-page.component.html',
  styleUrls: ['./view-paciente-page.component.css']
})
export class ViewPacientePageComponent {


  title = 'Información personal';

  @Input() patient!: Paciente;
  @Input() person!: Persona;
  @Output() close = new EventEmitter();
  public navigated = false;
  public sub: any;
  public vitalSigns: any;
  public stomatognathicSystem: any;
  public response!: Response;
  private diagnosis_plans!: DiagnosticoPlan[];

  constructor(
    private router: Router, private route: ActivatedRoute,
    // private appGlobals: AppGlobals,
    // private patientService: PatientService, private profileService: ProfileService, private diagnosisPlanService: DiagnosisPlanService
  ) {
  }

  ngOnInit() {
    this.patient = new Paciente();
    this.person = new Persona();
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] != -1) {
        let id = +params['id'];
        this.navigated = true;

        //   this.patientService.getPatient(id)
        //     .then(patient => {
        //       this.response = patient;
        //       this.patient = this.response.Data;
        //       this.person = this.patient.Person;
        //       var datePipe = new DatePipe();
        //       this.person.DateOfBirth = datePipe.transform(this.person.DateOfBirth, 'yyyy-MM-dd');

        //       this.patient.personalAndFamilyHistory = this.patient.Patients_Catalog_By_Type.PERSONALANDFAMILYHISTORY;
        //       this.patient.vitalSigns = this.patient.Patients_Catalog_By_Type.VITALSIGNS;
        //       this.patient.stomatognathicSystem = this.patient.Patients_Catalog_By_Type.STOMATOGNATHICSYSTEM;


        //     });
        // } else {
        this.navigated = false;

        // this.patient.personalAndFamilyHistory = JSON.parse(localStorage.getItem('catalog')).Data.PERSONALANDFAMILYHISTORY;
        // this.patient.vitalSigns = JSON.parse(localStorage.getItem('catalog')).Data.VITALSIGNS;
        // this.patient.stomatognathicSystem = JSON.parse(localStorage.getItem('catalog')).Data.STOMATOGNATHICSYSTEM;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancel(savedPatient: Paciente) {
    this.close.emit(savedPatient);
    if (this.navigated) { window.history.back(); }
  }

  goBack(savedPatient: Paciente) {
    this.close.emit(savedPatient);
    if (this.navigated) { window.history.back(); }
  }



}
