<template>
  <div b>
    refCom
    <p>{{ msg }}----{{ count }}</p>
  </div>
</template>
<script setup lang="ts">
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95
import { computed, ref, watch } from 'vue'
import { Toast } from 'vant'
import { useUserStore } from '@/piniaStore'
import { random } from '@utils'
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
const emit = defineEmits(['change', 'delete'])

const userStore = useUserStore()
const customRefMethod = (data) => {
  const taostData = (data && JSON.stringify(data)) || 'dataDefaualt'
  Toast('customRefMethod--data-->' + taostData)
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
