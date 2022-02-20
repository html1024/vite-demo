<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { toRefs, ref, reactive, onMounted } from 'vue'
import { getUserProfile } from '@api/user'
// interface IUserData {
//   [any]: any
// }
let userData = reactive({
  age: 21,
  enName: 'Edward Thomas',
  id: '32e74FcB-A7e1-92c9-3eFB-2B463be12286',
  url: 'https://izjbixojj.tn/slmkbthqgn',
  zhName: '袁芳',
  comtomerKey: 'dsf',
})
const oneCount = ref(100)
let requesStatus = ref('beore')
let sendAxios = async () => {
  requesStatus.value = 'loading'
  const { result } = await getUserProfile({ username1: 'string', password: 'string' })
  console.log('userData-->', result)
  // userData = reactive(result)
  // userData = result
  // reactive定义的数据不能整体重定义：如userData = {xx:aaa},只能单独赋值某个属性或者使用Object.assign
  userData.comtomerKey = 'comtomerKey-new'
  Object.assign(userData, result)
  oneCount.value = result.age
  requesStatus.value = 'finish'
}
onMounted(async () => {
  await sendAxios()
})
let clickHandle = (e: any) => {
  console.log('clickHandle-->', e.type)
  sendAxios()
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <p>Hello-component</p>
  <p>userData-zhName->{{ userData.zhName }}</p>
  <p>userData-comtomerKey->{{ userData.comtomerKey }}</p>
  <p>oneCount-->{{ oneCount }}</p>
  <p>requesStatus-->{{ requesStatus }}</p>
  <hr />
  <p @click="clickHandle">发送请求</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
