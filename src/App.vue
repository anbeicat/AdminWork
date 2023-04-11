<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useDefaultStore } from "./store/defaultSettings"
const defaultStore = useDefaultStore()
// import { dynamicRoutes, dynamicButtons } from '../services/user';
// onMounted(() => {
//   if (!useLocalStorage('routes', null).value) {
//     dynamicRoutes().then((result: any) => {
//       useLocalStorage('routes',result)
//     })
//     dynamicButtons().then((result: any) => {
//       useLocalStorage('buttons',result)
//     })
//   }
// })

</script>

<template>
  <div id="app" :class="defaultStore.theme ? 'bgc-eef2f5' : 'bgc'">
    <!-- <a-spin :loading="defaultStore.loading" dot> -->
      <router-view></router-view>
    <!-- </a-spin> -->
  </div>
</template>

<style lang="less" scoped>
:deep.arco-spin {
  width: 100%;
  height: 100%;
}

.bgc {
  background-color: var(--color-bg-1);
}
</style>