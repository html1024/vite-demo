<template>
  <h1>demo-age-{{ userStore.age }}</h1>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useUserStore } from '@/piniaStore'
// import { random } from '@utils'
const userStore = useUserStore()
watch(
  () => userStore.enName,
  (n, o) => {
    console.log('demo.vue-watch-userStore.enName-->', n, '====', o)
  }
)
</script>
<style scoped></style>
