export class DataGrid {
  name!: string;
  width!: string;
  aligment!: string;
  visible!: boolean;
  caption?: string;
  dataList?: DataGridList[];
  format?: string;
  dataType?: string
}
export class DataGridList {
  valueExpr!: string | number;
  displayExpr!: string
}


export interface IDataGrid {
  name: string,
  width: string,
  aligment: string,
  visible: boolean,
  caption?: string,
  dataList?: IDataGridList[],
  format?: string,
  dataType?: string
}
export class IDataGridList {
  valueExpr!: string | number;
  displayExpr!: string
}
