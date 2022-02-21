import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import appRoutes from './app'
import demoRoutes from './demo'
const noMatch = {
  // 404跳转到首页(此配置必须处于路由最后一项)
  path: '/:catchAll(.*)',
  redirect: { name: 'home' },
}
const routes: RouteRecordRaw[] = [...demoRoutes, ...appRoutes, noMatch]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
