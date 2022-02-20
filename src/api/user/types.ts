export interface ReqParams {
  username: string
  password: string
}

export interface ReqAuth {
  auths: string[]
  modules: string[]
  is_admin?: 0 | 1
}

export interface LoginRes {
  token: string
}
