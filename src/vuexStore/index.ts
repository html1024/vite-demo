import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
// https://vuex.vuejs.org/zh/guide/typescript-support.html
// 以下可在vuex.d.ts声明文件声明
export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const vuexStore = createStore<State>({
  state: {
    count: 0,
  },
  actions: {
    setCountAct({ commit, state }: { commit: any; state: any }, data: number): any {
      commit('setCountMut', data)
    },
  },
  mutations: {
    setCountMut(state: State, count: number) {
      state.count = count
    },
  },
  getters: {
    getDdoubleCount(state: State) {
      return state.count * 2
    },
  },
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}
