import { Injectable } from '@angular/core';
import { IResponseStatusErrorViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';

// import { PersonaRSViewModel } from 'src/domain/viewModels/persona.viewModel';

@Injectable({ providedIn: 'root' })
export class StatusResponseService {
    constructor() { }

    error(httpErrorResponse: any): IResponseStatusErrorViewModel {
        let { error, ok } = httpErrorResponse;
        let responseStatus: IResponseStatusErrorViewModel = <IResponseStatusErrorViewModel>{}
        if (error.StatusCode == 404 || error.StatusCode == 500) {
            responseStatus = { message: error.Message, statusCode: error.StatusCode, ok }
        }
        return responseStatus;
    }

}