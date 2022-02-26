<template>
  <div class="piniaPage">
    <span>{{ pageName }}，全局状态管理插件pinia的使用（获取/修改、重置）</span>
    <p>zhName:{{ zhName }}</p>
    <p>enName:{{ enName }}</p>
    <p>userStore.token:{{ userStore.token }}</p>
    <p>token:{{ token }}</p>
    <button @click="refreshUserStore">刷新pinia的user数据</button>
    <button @click="resetUserStore">重置pinia的user数据</button>
    <button @click="getStoreToken">getStoreToken</button>
    <button @click="getStoreEnName">getStoreEnName</button>
    <button @click="setStoreEnName">setStoreEnName</button>
    <button @click="patchUserStoreStateFn">patchUserStoreStateFn</button>
    <button @click="patchUserStoreStateObj">patchUserStoreStateObj</button>
    <button @click="replaceUserStoreState">replaceUserStoreState</button>
    <hr />
    <pre class="preBox">{{ userStore }}</pre>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useUserStore } from '@/piniaStore'
// import { random } from '@utils'
const userStore = useUserStore()
console.log('userStore', userStore)
const zhName = computed(() => userStore.zhName)
const enName = computed(() => userStore.enName)
const token = computed(() => userStore.token)
const pageName = ref('pinia-index')
const refreshUserStore = () => {
  userStore.getUserInfo()
}
const resetUserStore = () => {
  userStore.resetInfo()
  //调用了 userStore.$reset() $reset是pinia插件提供的reset数据方法，恢复成初始数据
}
const patchUserStoreStateFn = () => {
  userStore.$patch((state) => {
    // 传入一个函数，函数可以对userStore值进行函数处理（如数组的增删改），而非直接替换
    state.auths.push('shoes-$patch')
    state.url = 'patchUserStoreStateFn'
  })
}
const patchUserStoreStateObj = () => {
  // 同时设置多个属性（直接替换）
  userStore.$patch({ zhName: 'zhName-$patch', enName: 'enName-$patch' })
}

const replaceUserStoreState = () => {
  // 整体替换state----操作时发现其它属性仍然存在
  userStore.$state = { zhName: 'zhName-$state', enName: 'enName-$state' }
}

const getStoreEnName = () => {
  console.log('getStoreEnName--', userStore.enName)
}
const getStoreToken = () => {
  console.log('getStoreToken--', userStore.token)
}
const setStoreEnName = () => {
  let random = (n, m) => Math.floor(Math.random() * (m - n) + n)
  let randomNum = random(10, 100)
  userStore.enName = 'new-enName' + randomNum
}
watch(
  () => userStore.enName,
  (n, o) => {
    console.log('pini.vue-watch-userStore.enName-->', n, '====', o)
  }
)
</script>

<style scoped>
.piniaPage {
  text-align: left;
}
.piniaPage span {
  display: inline-block;
  width: 900px;
  background-color: aqua;
}

.piniaPage button {
  margin: 5px 10px;
}
.piniaPage .preBox {
  max-height: 360px;
  border: 1px solid red;
  overflow: hidden;
}
</style>
