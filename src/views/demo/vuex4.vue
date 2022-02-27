<template>
  <h1>vuex4</h1>
  <h1>computedstateCount:{{ computedstateCount }}</h1>
  <h1>computedGetDdoubleCount:{{ computedGetDdoubleCount }}</h1>
  <van-button type="primary" size="mini" @click="setCountFnAct">setCountFnAct</van-button>
  <van-button type="primary" size="mini" @click="setCountFnMut">setCountFnMut</van-button>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useStore } from '@/vuexStore'
const store = useStore()
const computedstateCount = computed(() => store.state.count)
// 在 computed 函数中访问 getter
const computedGetDdoubleCount = computed(() => store.getters.getDdoubleCount)

const setCountFnAct = () => {
  // 使用 action
  store.dispatch('setCountAct', 36536)
}
const setCountFnMut = () => {
  // 使用 mutation
  store.commit('setCountMut', 34)
}
</script>
<style scoped></style>
