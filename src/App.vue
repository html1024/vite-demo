<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <section class="topBox borderRed" style="display: flex">
    <div style="width: 50%">
      <p>userData-zhName->{{ userData.zhName }}</p>
      <p>oneCount-->{{ oneCount }}</p>
      <p>requesStatus-->{{ requesStatus }}</p>
      <p @click="clickHandle">刷新顶部数据</p>
    </div>
    <div class="linkBox" style="width: 50%">
      <router-link to="/">Home</router-link>
      <router-link to="/demo">demo</router-link>
      <router-link to="/demo/user/123">user</router-link>
      <router-link to="/demo/test">test</router-link>
      <router-link to="/demo/pinia">pinia</router-link>
      <router-link to="/demo/vuex4">vuex4</router-link>
      <router-link to="/demo/vant">vant</router-link>
    </div>
  </section>
  <hr />
  <router-view></router-view>
</template>
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.topBox {
  margin: 20px;
  text-align: left;
}
.borderRed {
  border: 1px solid red;
}
.linkBox a {
  display: inline-block;
  padding: 8px 12px;
}
</style>
