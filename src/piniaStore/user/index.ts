import { defineStore } from 'pinia'
import {
  login as userLogin,
  logout as userLogout,
  getUserProfile,
  LoginData,
} from '@/api/user/index'
import { setToken, clearToken } from '@/utils/auth'
import { UserState } from './types'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: 'default-token',
    auths: [],
    role: 'admin',
    id: 'default-bDe4CcDb-B71B-f46d-92df-BcfEeDa800BF',
    enName: 'default-Sarah Robinson',
    zhName: 'default-于洋',
    age: 48,
    url: 'default-https://lyjxqrgew.com.cn/cmuqwmf',
  }),
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state }
    },
  },
  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'user' : 'admin'
        resolve(this.role)
      })
    },
    // 设置用户的信息
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial)
    },
    // 重置用户信息
    resetInfo() {
      this.$reset() //$reset是pinia插件提供的reset数据方法
    },
    // 获取用户信息
    async getUserInfo() {
      const res = await getUserProfile()
      console.log('pinia--getUserInfo-res', res)
      this.setInfo(res?.result)
    },
    // 异步登录并存储token
    async login(loginForm: LoginData) {
      const res = await userLogin(loginForm)
      const token = res?.result?.token
      if (token) {
        setToken(token)
      }
      return res
    },
    // Logout
    async logout() {
      await userLogout()
      this.resetInfo()
      clearToken()
      // 路由表重置
      // location.reload();
    },
  },
})
