<template>
  <h1>user--获取动态路由传参和url传参</h1>
  <!-- <div>route:{{ route }}</div> -->
  <div>route.params:{{ route.params }}</div>
  <div>queryData:{{ queryData }}</div>
  <button @click="toTest">toTest</button>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const queryData = reactive(route.params)
const toTest = () => {
  router.push({
    path: '/demo/test',
    query: { from: 'user' },
  })
}
</script>

<style scoped></style>
