<template>
  <div b>
    refCom
    <p>msg----{{ msg }}</p>
    <p>count是子组件数据---{{ count }}</p>
    <van-button type="primary" size="mini" @click="emitToParent">通知父组件</van-button>
  </div>
</template>
<script setup lang="ts">
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
import { computed, ref, watch } from 'vue'
import { Toast } from 'vant'
import { useUserStore } from '@/piniaStore'
// import { random } from '@utils/index.ts'
// defineProps 或 defineEmits还不支持复杂的类型和从其它文件进行类型导入。理论上来说，将来是可能实现类型导入的,详见下一行官网地址
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%BB%85%E9%99%90-typescript-%E7%9A%84%E5%8A%9F%E8%83%BD
const emit = defineEmits(['change', 'delete'])
defineProps<{ msg: string }>()
// const props = defineProps({
//   msg: String,
// })
// ================================================
// 可以使用withDefaults给 props 提供默认值
// interface Props {
//   msg?: string
//   labels?: string[]
// }

// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })
// =======================================================
const count = ref(10)
const toParantData = ref(999999)

const userStore = useUserStore()
const customRefMethod = (data) => {
  let taostData = (data && JSON.stringify(data)) || 'dataDefaualt'
  // taostData += random(100, 1000)
  Toast('customRefMethod--data-->' + taostData)
}
const emitToParent = () => {
  emit('change', { num: toParantData.value })
}

watch(
  () => userStore.enName,
  (n, o) => {
    console.log('demo.vue-watch-userStore.enName-->', n, '====', o)
  }
)
defineExpose({
  count,
  customRefMethod,
})
</script>

<style scoped></style>
