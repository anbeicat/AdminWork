<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import layout from './components/layout.vue'
import { NConfigProvider, GlobalThemeOverrides, darkTheme, zhCN, dateZhCN, NGlobalStyle, useThemeVars, NEl } from 'naive-ui'
import { useDefaultStore } from "./store/defaultSettings"
import { theme } from "./theme/index"
const defaultStore = useDefaultStore()
// let themeOverrides: GlobalThemeOverrides = {
//   // common: theme,
//   common: {
//     primaryColor: defaultStore.primaryColor
//   },
//   Button: {
//     // textColor: '#FF0000'
//   }
// }
// const themeVars= useThemeVars()

const themeOverrides = computed(() => {
  return {
    common: {
      primaryColor: defaultStore.primaryColor,
      primaryColorHover: defaultStore.primaryColor,
    }
  }
})
</script>

<template>
  <!-- <div id="app" :class="defaultStore.theme ? 'bgc-eef2f5' : 'bgc'"> -->
  <n-config-provider :theme-overrides="themeOverrides" class="bgc"
    :theme="defaultStore.theme === 'light' ? undefined : darkTheme" :locale="zhCN" :date-locale="dateZhCN"
    inline-theme-disabled>
    <router-view></router-view>
    <n-global-style />
  </n-config-provider>
  <!-- </div> -->
</template>

<style lang="less" scoped>
.bgc {
  width: 100%;
  height: 100%;
}</style>