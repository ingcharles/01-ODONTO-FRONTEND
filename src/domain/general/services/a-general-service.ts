import { Observable } from "rxjs";
import { IResponseStatusViewModel } from "../viewModels/i-response-status.viewModel";
import { ICatalogoViewModel } from "../viewModels/i-catalogo.viewModel";
import { IPersonaRSViewModel } from "../viewModels/i-persona.viewModel";

/** Clase absatracta que viene hacer los casos de uso y que varias apis puedan utilizar los casoos de usos */
/** Cuando utilicemos la capa de infraestructura extendamos del gateway y no del caso de uso  resumen: que queremos no del como   */
export abstract class AGeneralService {
    public abstract getCatalogoByCodPad(body: { codigoPadre: number }): Observable<ICatalogoViewModel[]>;
    public abstract getPersonaByCi(body: { cedulaIdentidad: string }): Observable<IPersonaRSViewModel>;
    public abstract getArchivoByCodTab(body: { codigoTabla: number, nombreTabla: string }): Observable<IResponseStatusViewModel>;
}
