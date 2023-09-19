import { Persona } from "src/presentation/home/models/persona";

export class Paciente {
  id!: number;
  school!: string;
  nameFather!: string;
  lastNamesFather!: string;
  workFather!: string;
  nameMother!: string;
  lastNamesMother!: string;
  workMother!: string;
  reasonForConsultation!: string;
  currentProblem!: string;
  personalAndFamilyHistory: any;
  vitalSigns: any;
  stomatognathicSystem: any;
  notePersonalAndFamilyRecord!: string;
  noteReviewSystemStomatognathic!: string;
  personId!: number;
  person!: Persona;
  clinicId!: number;
  patientsCatalog: any;
  patientsCatalogByType: any;
  age!: number;
  patientFromPartner!: boolean;
}

// export interface IPaciente {
//   Id: number;
//   School: string;
//   NameFather: string;
//   LastNamesFather: string;
//   WorkFather: string;
//   NameMother: string;
//   LastNamesMother: string;
//   WorkMother: string;
//   ReasonForConsultation: string;
//   CurrentProblem: string;
//   personalAndFamilyHistory: any;
//   vitalSigns: any;
//   stomatognathicSystem: any;
//   NotePersonalAndFamilyRecord: string;
//   NoteReviewSystemStomatognathic: string;
//   PersonId: number;
//   Person: any;
//   ClinicId: number;
//   Patients_Catalog: any;
//   Patients_Catalog_By_Type: any;
//   Age: number;
//   PatientFromPartner: boolean;
// }


