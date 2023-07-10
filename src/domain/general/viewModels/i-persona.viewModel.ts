import { IResponseStatusViewModel } from "./i-response-status.viewModel";

export interface IPersonaRSViewModel extends IResponseStatusViewModel {
    data?: IPersonaViewModel | null;
}
export interface IPersonaViewModel {
    codPersona: number | null;
    cedula: string | null;
    nombres: string | null;
}