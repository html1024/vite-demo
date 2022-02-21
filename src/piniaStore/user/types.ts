export type RoleType = '' | '*' | 'admin' | 'user'
export interface UserState {
  auths?: string[]
  role?: RoleType
  id?: string
  enName?: string
  zhName?: string
  age?: number
  url?: string
  token?: string
}
