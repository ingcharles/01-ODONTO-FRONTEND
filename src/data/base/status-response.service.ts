import { Injectable } from '@angular/core';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';

@Injectable({ providedIn: 'root' })
export class StatusResponseService {
    constructor() { }

    error(httpErrorResponse: any): IResponseStatusViewModel {
        let { error, ok } = httpErrorResponse;
        let responseStatus: IResponseStatusViewModel = <IResponseStatusViewModel>{}
        if (error.StatusCode == 404 || error.StatusCode == 500) {
            responseStatus = { message: error.Message, statusCode: error.StatusCode, ok }
        }
        return responseStatus;
    }

}