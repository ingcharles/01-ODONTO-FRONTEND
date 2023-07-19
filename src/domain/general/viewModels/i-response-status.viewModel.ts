export interface IResponseStatusViewModel{
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

export interface IResponseStatusErrorViewModel{
  message: string ;
  statusCode: number | null;
  ok: boolean | null;
}
