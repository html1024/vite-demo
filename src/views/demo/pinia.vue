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
}
const getStoreEnName = () => {
  console.log('getStoreEnName--', userStore.enName)
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

<template>
  <div class="piniaPage">
    <h1>{{ pageName }}</h1>
    <p>zhName:{{ zhName }}</p>
    <p>enName:{{ enName }}</p>
    <p>userStore.token:{{ userStore.token }}</p>
    <p>token:{{ token }}</p>
    <button @click="refreshUserStore">刷新pinia的user数据</button>
    <button @click="resetUserStore">重置pinia的user数据</button>
    <button @click="getStoreEnName">getStoreEnName</button>
    <button @click="setStoreEnName">setStoreEnName</button>
    <hr />
    <pre class="preBox">{{ userStore }}</pre>
  </div>
</template>

<style>
.piniaPage {
  text-align: left;
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
