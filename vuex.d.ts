// Vuex 没有为 this.$store 属性提供开箱即用的类型声明。
// 如果你要使用 TypeScript，首先需要声明自定义的模块补充
// 使用vuex且使用的TS才需要本声明文件来声明 Vue 的自定义类型
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
