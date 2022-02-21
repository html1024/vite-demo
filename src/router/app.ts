import { RouteRecordRaw } from 'vue-router'

const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'), // 注意这里要带上 文件后缀.vue
  },
]
export default appRoutes
