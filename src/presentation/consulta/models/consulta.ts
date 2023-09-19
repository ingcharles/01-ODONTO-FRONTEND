export class Consulta {
  id!: number;
  payment!: number;
  procedures!: string;
  prescriptions!: string;
  observations!: string;
  dateExecute!: Date;
  diagnosisPlanId!: number;
  doctorExecuteId!: number;
  diagnosisPlanStatus!: string;
  invoiced!: boolean;
  paymentMethodsId!: number;
  invoicedNumber!: string;
}
