import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import { showMessage } from './status'
import { IResponse, ILogin } from './type'
import { API_BASE_URL, AXIOS_TIMEOUT } from '../../../../config/constant'
import { getToken } from '@utils/auth'

// 如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = AXIOS_TIMEOUT
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
// axios.defaults.headers.common['token'] =  AUTH_TOKEN
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // transformRequest: [
  //   function (data) {
  //     //由于使用的 form-data传数据所以要格式化
  //     delete data.Authorization
  //     data = qs.stringify(data)
  //     return data
  //   },
  // ],
})

// 请求拦截
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 响应拦截
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response.headers.authorization) {
    //   localStorage.setItem('app_token', response.headers.authorization)
    // } else if (response.data && response.data.token) {
    //   localStorage.setItem('app_token', response.data.token)
    // }

    if (response.status === 200) {
      return response.data
    }
    showMessage(response.status)
    return response
  },
  // 请求失败
  (error: any) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status)
      return Promise.reject(response.data)
    }
    showMessage('网络连接异常,请稍后再试!')
  }
)

const request = <T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  if (typeof config === 'string') {
    if (!options) {
      return axiosInstance.request<T, T>({
        url: config,
      })
      // throw new Error('请配置正确的请求参数');
    }
    return axiosInstance.request<T, T>({
      url: config,
      ...options,
    })
  }
  return axiosInstance.request<T, T>(config)
}
export function get<T = any>(url: string, params?: object): Promise<T> {
  return request({ url, method: 'GET', params })
}

export function post<T = any>(url: string, data?: object): Promise<T> {
  return request({ url, method: 'POST', data })
}
export default request
export type { AxiosInstance, AxiosResponse }
