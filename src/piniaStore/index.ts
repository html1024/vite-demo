import { createPinia } from 'pinia'
import { useAppStore } from './app'
import { useUserStore } from './user'

const piniasSore = createPinia()

export { useAppStore, useUserStore }
export default piniasSore
