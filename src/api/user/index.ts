import { get, post } from '@utils/http'
import { IResponse } from '@utils/http/axios/type'
import { ReqAuth, ReqParams, LoginRes } from './types'
import { UserState } from '@/store/modules/user/types'

enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/getInfo',
}

const getUserProfile = async (data: ReqParams) => get<IResponse>(URL.profile, data)
const login = async (data: ReqParams) => post<IResponse>(URL.login, data)
const logout = async () => post<LoginRes>(URL.logout)
export { getUserProfile, logout, login }
