export class Odontograma {
  id!: number;
  toothNumber!: number;
  patientId!: number;
  treatmentId!: string;
  toothStatusId!: number;
  active!: boolean;
  cuadrant!: string;
  face!: string;
  //diente
  tooth!: Tooth;
  toothDetails!: string;
  //dientes
  //teeth!: Tooth[];
}

export class Tooth {

  top!: {
    color: string;
    diagnostic: string;
  };
  bottom!: {
    color: string;
    diagnostic: string;
  };
  left!: {
    color: string;
    diagnostic: string;
  };
  right!: {
    color: string;
    diagnostic: string;
  };
  center!
  : {
    color: string;
    diagnostic: string;
  };
  shape!: string;

}
