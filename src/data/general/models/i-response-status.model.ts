export interface IResponseStatusModel{
  message: string ;
  statusCode: number | null;
  ok: boolean | null;
//  data?:any;
}

// export interface IResponseStatusData{
//   messages: string ;
//   statusCode: number | null;
//   ok: boolean | null;
//  data?:any;
// }

export interface IResponseStatusErrorModel{
  message: string ;
  statusCode: number | null;
  ok: boolean | null;

}