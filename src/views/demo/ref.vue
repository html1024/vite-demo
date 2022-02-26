<template>
  <div class="page">
    <h1>ref父组件</h1>
    <span>实现ref获取子组件实例（调用子组件方法/变量），父子组件通讯</span>
    <RefCom ref="componentsRef" msg="我是来自父组件的数据" @change="changeFromCom" />
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <van-button type="primary" size="mini" @click="toTest">toTest</van-button>
    <van-button type="primary" size="mini" @click="handle">handleRef</van-button>
  </div>
</template>

<script lang="ts">
// 普通 <script>, 在模块范围下执行(只执行一次) 和script setup同时存在
//runSideEffectOnce()

// 声明额外的选项
export default {
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Toast } from 'vant'
import RefCom from '@components/demo/RefCom.vue' //必须使用.vue结尾
const router = useRouter()
const route = useRoute()
const queryData = reactive(route.params)
const componentsRef = ref()
const toTest = () => {
  router.push({
    path: '/demo/test',
    query: { from: 'user' },
  })
}
const handle = () => {
  nextTick(() => {
    console.log('父组件调用子组件数据：count-', componentsRef.value.count)
    console.log('父组件调用子组件方法：customRefMethod--Toast')
    console.log('====================================')
    // 父组件调用子组件方法/变量，需要提前在组件使用defineExpose抛出defineExpose({ count, customRefMethod})
    componentsRef.value &&
      componentsRef.value.customRefMethod &&
      componentsRef.value.customRefMethod('来自父组件调用')
  })
}
const changeFromCom = (data: any) => {
  nextTick(() => {
    console.log('來自子组件数据：data-', data)
  })
}
</script>
<style scoped>
.page {
  text-align: center;
}
</style>
