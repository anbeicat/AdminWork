<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-31 17:07:58
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-13 15:52:13
 * @description: 
 * @FilePath: /AdminWork/src/App.vue
-->
<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue'
import layout from './components/layout.vue'
import { NConfigProvider, GlobalThemeOverrides, darkTheme, zhCN, dateZhCN, NGlobalStyle, useThemeVars, NEl, NMessageProvider } from 'naive-ui'
import { useDefaultStore } from "./store/defaultSettings"
import { theme } from "./theme/index"
const defaultStore = useDefaultStore()

const themeOverrides = computed(() => {
  return {
    common: {
      primaryColor: defaultStore.primaryColor,
      primaryColorHover: defaultStore.primaryColor,
    }
  }
})
const dynamicVarSetting = computed(() => ({
  '--vxe-primary-color':  defaultStore.primaryColor,
  '--vxe-primary-lighten-color':  defaultStore.primaryColor,
  '--vxe-primary-darken-color':  defaultStore.primaryColor,
  '--vxe-table-row-checkbox-checked-background-color':  'rgb(243, 243, 245)',
  '--vxe-table-row-hover-background-color':  'rgb(243, 243, 245)',
  '--vxe-table-row-hover-striped-background-color':  'rgb(243, 243, 245)',
  '--vxe-table-column-current-background-color':defaultStore.primaryColor,
  '--vxe-table-row-hover-current-background-color':'',
  '--vxe-table-row-current-background-color':'',
  'vxe-table-column-hover-background-color':defaultStore.primaryColor,
}));
</script>

<template>
  <!-- <div id="app" :class="defaultStore.theme ? 'bgc-eef2f5' : 'bgc'"> -->
  <n-config-provider :style="dynamicVarSetting" id="app" :theme-overrides="themeOverrides" :class="['bgc', defaultStore.isGray ? 'isGray' : '']"
    :theme="defaultStore.theme === 'light' ? undefined : darkTheme" :locale="zhCN" :date-locale="dateZhCN"
    inline-theme-disabled>
    <n-message-provider>
      <router-view ></router-view>
    </n-message-provider>
    <n-global-style />
  </n-config-provider>
  <!-- </div> -->
</template>

<style lang="less" scoped>
.bgc {
  width: 100%;
  height: 100%;
}

.isGray {
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(100%);

}
</style>

<style lang="scss">
// 修改scss变量
// $vxe-font-size: 14px;
// $vxe-font-color: red;
// $vxe-primary-color: v-bind(primaryColor);
// $vxe-table-font-color: $vxe-font-color;
// $vxe-table-border-color: var(red);
// $vxe-table-border-radius: 4px;
// @import 'vxe-table/styles/index.scss';
</style>