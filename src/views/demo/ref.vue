<template>
  <div class="page">
    <h1>ref父组件</h1>
    <RefCom ref="componentsRef" msg="RefCom--是子组件" />
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <van-button type="primary" size="mini" @click="toTest">toTest</van-button>
    <van-button type="primary" size="mini" @click="handle">handleRef</van-button>
  </div>
</template>

<script>
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
// import RefCom from '@components/demo/RefCom' //不知道为什么，这么写不行只能用@/components
import RefCom from '@/components/demo/RefCom.vue'
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
    console.log('handle-componentsRef-', componentsRef)
    console.log('handle-componentsRef.value-', componentsRef.value)
    console.log('handle-componentsRef.value.count-', componentsRef.value.count)
    console.log('====================================')
    // 父组件调用子组件方法/变量，需要提前在组件使用defineExpose抛出defineExpose({ count, customRefMethod})
    componentsRef.value &&
      componentsRef.value.customRefMethod &&
      componentsRef.value.customRefMethod('来自父组件调用')
  })
}
</script>
<style scoped>
.page {
  text-align: center;
}
</style>
