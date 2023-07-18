import { IResponseStatusViewModel } from "src/domain/general/viewModels/i-response-status.viewModel";

export interface ILoginRSViewModel extends IResponseStatusViewModel {
    data?: IUathLoginViewModel | null;
}

export interface IUathLoginViewModel {
    ci: number | null;
    password: string | null;
}