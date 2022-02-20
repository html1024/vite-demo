<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const queryData = reactive(route.query)
const toUser = () => {
  router.push({
    path: '/demo/user/456',
  })
}
</script>
<template>
  <h1>test</h1>
  <div>route.query:{{ route.query }}</div>
  <div>queryData:{{ queryData }}</div>
  <button @click="toUser">toUser</button>
</template>

<style></style>
