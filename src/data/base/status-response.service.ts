import { Injectable } from '@angular/core';
import { IResponseStatusViewModel } from 'src/domain/general/viewModels/i-response-status.viewModel';

@Injectable({ providedIn: 'root' })
export class StatusResponseService {
  constructor() { }

  error(httpErrorResponse: any): IResponseStatusViewModel {
    let { error, ok } = httpErrorResponse;
    const { StatusCode } = error || {}
    const { status } = error || {}
    let responseStatus: IResponseStatusViewModel = <IResponseStatusViewModel>{}
    // console.error("error.StatusCode", error.StatusCode);
    // var existePropiedadFantasma = StatusCode;
    // console.log("existePropied", existePropiedadFantasma);
    if (StatusCode)
      if (error.StatusCode == 404 || error.StatusCode == 500) {
        responseStatus = { message: error.Message, statusCode: error.StatusCode, ok }
      } else if (!StatusCode && status) {
        if (error.status == 401) {

          responseStatus = { message: error.message, statusCode: error.status, ok }

        }
      }
    return responseStatus;
  }

}
