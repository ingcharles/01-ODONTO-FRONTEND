export class Empleado {
  Id!: number;
  ClinicId!: number;
  EmployeeId!: number;
  JobId!: number;
  Active!: boolean;
  PercentOfWork!: number;
  Salary!: number;
}
export interface IEmpleado {
  Id: number;
  ClinicId: number;
  EmployeeId: number;
  JobId: number;
  Active: boolean;
  PercentOfWork: number;
  Salary: number;
}


