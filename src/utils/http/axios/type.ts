// 返回res.data的interface
export interface IResponse {
  code: number | string
  result: any
  message: string
  status: string | number
}
