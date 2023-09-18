import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValidationService } from 'src/presentation/base/services/validation.service';
import { DataGrid } from 'src/presentation/base/models/data-grid';

@Component({
  selector: 'app-index-data-grid-empleado',
  templateUrl: './index-data-grid-empleado.component.html',
  styleUrls: ['./index-data-grid-empleado.component.css']
})
export class IndexDataGridEmpleadoComponent {


  constructor(public _validator: ValidationService) { }
  /**
   * methodo que se ejecuta cuando se cambia de seleccion
   * @param valor objeto seleccionado
   */
  public onSelectionChangedLibrary(valor: any) {
    this.onSelectionChanged.emit(valor);
  }
  /** bandera para verificar si ya se termino de cargar los datos */
  public hasLoader: boolean = false;

  //**  variable de salida cuando escucha el evento de selection change del DataGrid*/
  @Output()
  onSelectionChanged = new EventEmitter<any>();

  //**  variable de entrada de los datos que se van a mostrar en el grid*/
  @Input()
  public datasource: any[] = [];

  /** Variable de entrada para indicar que columna va a ser como llave primaria */
  @Input()
  public keyExpr: string = '';

  /** Variable de entrada para indicar tipo de seleccion puede ser
   * single
   * multiple
   */
  @Input()
  public selection_mode: string = ''

  /** Variable de entrada para activar o desactivar el filtro del grid */
  @Input()
  public filterActive: boolean = false

  /** Variable  de entrada de tipo array<HeadersDataGrid> que permite obtener los campos que se van a mostrar y diferentes attributos*/
  @Input()
  public headers: DataGrid[] = []

  // /** Variable  de entrada para mostrar las columnas automaticamente sin necesidad de utilizar los headers
  //  * Nota: Solo utilizar cuando no va a utilizar la variable headers
  // */
  @Input()
  public columns: string[] = [];

  /**variable para almacenar los keys seleccionados */
  public _selectedRowKeys: any[] = [];

  /** get method para obtener los keys seleccionados */
  public get selectedRowKeys(): Array<any> {
    return this._selectedRowKeys;
  };

  /** set method  de tipo input para asignar a la variable _selectedRowKeys y  selectedRowKeysChange */
  @Input()
  set selectedRowKeys(value: Array<any>) {
    this._selectedRowKeys = value;
    this.selectedRowKeysChange.emit(value);
  };
  customizeColumns(e: any) {
    const columns = e.component?.option('columns');
    if (columns) {
      columns.unshift({
        caption: 'Index', // Título de la columna
        calculateCellValue: (rowData: any, index: number) => index + 1,
        width: 80,
        alignment: 'center',
        fixed: true,
      });
    }
  }
  /**EventEmiter de tipo Salida que se ejecuta cuando se selecciona */
  @Output() selectedRowKeysChange: EventEmitter<Array<any>> = new EventEmitter();

  @Output() viewIndexCrcaButton: EventEmitter<any> = new EventEmitter();

  /**EventEmiter de tipo salida para el evento click */
  @Output() editButton: EventEmitter<any> = new EventEmitter();


  /**EventEmiter de tipo salida para el evento click  que permite  subir archivos*/
  @Output() uploadButton: EventEmitter<any> = new EventEmitter();

  /**EventEmiter de tipo salida para el evento click  que permite  subir archivos*/

  @Output() deleteButton: EventEmitter<number> = new EventEmitter();

  /**
   * Method que se ejectura al momento de finalizar la carga de datos del DataGrid
   */
  onLoad() {
    this.hasLoader = true;

  }
  loadPanelPosition = { of: '#gridContainer' };

  @Input()
  dataSource: any[] = [];

  @Input()
  enabled: boolean = true;

  @Input()
  mode: string = 'single';

  @Input()
  pageSize: number = 5;

  @Input()
  editMode: string = 'popup';

  @Input()
  allowUpdating: boolean = true;

  @Input()
  allowAdding: boolean = true;

  @Input()
  allowDeleting: boolean = true;

  @Input()
  useIcons: boolean = true;

  @Input()
  titleEditPopUp: string = 'Editing fields';

  @Input()
  isLoading: boolean = false;

  @Output()
  onSaving = new EventEmitter<any>();
  public onSavingLibrary(valor: any) {
    this.onSaving.emit(valor);
  }

  /**
   * dar formato al valor total del grid
   * @param data
   * @returns
   */
  customizeValue(data: any) {
    return `$${parseFloat(data.value).toFixed(2)}`;
  }
  /**
   * se ejecuta al cambiar
   * @param $event
   */
  changesField($event: any) {

    switch ($event.changes[0].type) {
      case 'insert':
        // console.log('add');
        break;
      case 'update':
        $event.component.cancelEditData();
        break;
      case 'remove':
        $event.component.deleteEditData();
        break;
      default:
        // console.log('Error en el form');
        break;
    }
  }
  // /**
  //  * deshabilitar el boton de anular y subir comprobante cuando el crca es anulado o inactivo
  //  * @param estado
  //  * @returns
  //  */
  // disabledButton({ estado }: any) {
  //   if (estado == catalogo.NUM_CAT_EST_ANULADO || estado == catalogo.NUM_CAT_EST_APROBADO) {
  //     return true;
  //   }
  //   return false;
  // }
  // /**
  //  * deshabilitar el boton de editar cuando el crca es anulado
  //  * @param estado
  //  * @returns
  //  */
  // disabledButtonEdit({ estado }: any) {
  //   if (estado == catalogo.NUM_CAT_EST_ANULADO) {
  //     return true;
  //   }
  //   return false;
  // }
  // disabledButtonFind({ estadoFormulario }: any) {
  //   // if (estadoFormulario == catalogo.EST_FORMULARIO) {
  //   //   return true;
  //   // }
  //   return false;
  // }

  // deleteButton1 = false;


  headerCellText(column: any): string {
    return `<strong>${column.caption}</strong>`;
  }





}
