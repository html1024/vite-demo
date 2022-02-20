export interface IReqParams {
  username: string
  password: string
}

export interface IReqAuth {
  auths: string[]
  modules: string[]
  is_admin?: 0 | 1
}

export interface ILoginRes {
  token: string
}
