import { Tooth } from "src/presentation/odontograma/models/odontograma";

export class DiagnosticoPlan {
  id!: number;
  status!: string;
  diagnosticsAndComplications!: string;
  procedures!: string;
  prescriptions!: string;
  dateCreate!: Date;
  datePlan!: Date;
  patientId!: number;
  doctorDiagnosticId!: number;
  doctorExecuteId!: number;
  treatmentId!: number;
  treatmentAmount!: number;  //cantidadTratamiento
  payment!: number; //pago
  percentDiscountStablished!: number;
  percentSpecialDiscount!: number;
  valueType!: number;
  pay!: number;
  tooth!: Tooth;
  invoiced!: boolean;
  paymentMethodsId!: number;
  specialitieTypeId!: number;
  invoicedNumber!: string; //numeroFctura
}
