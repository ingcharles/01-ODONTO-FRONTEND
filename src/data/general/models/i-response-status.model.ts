export interface IResponseStatusModel{
  message: string ;
  statusCode: number | null;
  ok: boolean | null;
}

export interface IResponseStatusErrorModel{
  message: string ;
  statusCode: number | null;
  ok: boolean | null;

}
