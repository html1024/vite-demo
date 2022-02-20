import { get, post } from '@utils/http'
import { IResponse } from '@utils/http/axios/type'
import { IReqAuth, IReqParams, ILoginRes } from './types'
import { UserState } from '@/store/modules/user/types'

enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/getInfo',
}

const getUserProfile = async (data: IReqParams) => get<IResponse>(URL.profile, data)
const login = async (data: IReqParams) => post<IResponse>(URL.login, data)
const logout = async () => post<ILoginRes>(URL.logout)
export { getUserProfile, logout, login }
