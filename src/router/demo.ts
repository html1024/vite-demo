import { RouteRecordRaw } from 'vue-router'

const demoRoutes: RouteRecordRaw[] = [
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/index.vue'), // 注意这里要带上 文件后缀.vue
    children: [
      {
        path: 'user/:id',
        name: 'User',
        component: () => import('@/views/demo/user.vue'),
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/demo/test.vue'),
      },
      {
        path: 'pinia',
        name: 'Pinia',
        component: () => import('@/views/demo/pinia.vue'),
      },
      {
        path: 'vuex4',
        name: 'Vuex4',
        component: () => import('@/views/demo/vuex4.vue'),
      },
      {
        path: 'vant',
        name: 'Vant',
        component: () => import('@/views/demo/vant.vue'),
      },
    ],
  },
]

export default demoRoutes
