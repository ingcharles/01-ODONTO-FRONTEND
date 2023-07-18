import { IAuditoriaModel } from "src/data/general/models/i-auditoria.model";

export interface IUathLoginModel extends IAuditoriaModel{
    ci: number | null;
    password: string | null;
}