import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListArchivoViewModel } from 'src/domain/general/viewModels/i-list-archivo.viewModel';


@Component({
  selector: 'cne-list-anexos',
  templateUrl: './cne-list-anexos.component.html',
  styleUrls: ['./cne-list-anexos.component.css']
})
export class CneListAnexosComponent {
  @Input()
  public datasource: IListArchivoViewModel[] = [];
  Delete(index: number) {
    this.datasource.splice(index, 1);
  }

  get value():IListArchivoViewModel[] {
    return this.datasource;
  };

  @Input()
  set value(value:IListArchivoViewModel[]) {
    console.log("entro en value");
    this.datasource = value;
    this.valueChange.emit(value);
  };
  @Output() valueChange: EventEmitter<IListArchivoViewModel[]> = new EventEmitter();
}
