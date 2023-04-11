/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-07 09:54:35
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-04-11 09:29:12
 * @description:
 * @FilePath: /AdminWork/src/store/defaultSettings.ts
 */
import { defineStore } from 'pinia'
import { useLocalStorage, useSessionStorage } from '@vueuse/core'
export const useDefaultStore = defineStore('main', {
  state: () => ({
    navTheme: 'light',
    siderWidth: 180,
    headerHeight: 80,
    primaryColor: '#369EF8',
    layout: 'mix',
    headerTheme: 'light',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    collapsedButtonRender: false,
    colorWeak: false,
    splitMenus: true,
    breakpoint: 'xxl',
    title: '',
    pwa: false,
    logo: '/logo.png',
    locale: false,
    iconfontUrl: '//at.alicdn.com/t/font_2586108_0oecr57l5x2h.js',
    token: '',
    loading: false,
    state: null,
    breadcrumb:[],
    theme:true
  }),
  actions: {
    
  },

})