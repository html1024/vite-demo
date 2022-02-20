// 权限问题后期增加
import { get, post } from '@utils/http/axios'
import { IResponse } from '@utils/http/axios/type'
import { IListReqParams } from './types'

enum URL {
  list = '/customer/getList',
}

const getCustomerList = async (data: IListReqParams) => get<IResponse>(URL.list, data)
