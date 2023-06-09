/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-07 09:54:35
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-01 10:33:04
 * @description:
 * @FilePath: /AdminWork/src/store/defaultSettings.ts
 */
import { defineStore } from 'pinia'
import { useLocalStorage, useSessionStorage } from '@vueuse/core'
export const useDefaultStore = defineStore('main', {
  state: () => ({
    "theme": "light",
    "sideTheme": "white",
    "primaryColor": "#18A058FF",
    "layoutMode": "ltr",
    "deviceType": "pc",
    "slideMenu": false,
    "slideMenuMouseOver": false,
    "sideBarCheckedEffect": "clear",
    "accordionMenu": true,
    "sideWidth": 210,
    "pageAnim": "opacity",
    "isCollapse": false,
    "isShowTabbar": true,
    "isFixedNavBar": true,
    "isOpenWaterMark": false,
    "waterMark": "Admin Work Pro",
    "isGray": false,
    "locale": "zh_CN",
    "footerTip": "Copyright © Admin Work Pro 2023",
    "actionBar": {
      "isShowSearch": true,
      "isShowMessage": true,
      "isShowRefresh": true,
      "isShowFullScreen": true
    }
  }),
  actions: {
    changeType(value: boolean | string | number,typeName:string) {
      this[typeName] = value
      localStorage['userInfo']=JSON.stringify(useDefaultStore().$state)
    },
    changeActionBar(value: any,typeName:string) {
      this.actionBar[typeName] = value
      localStorage['userInfo']=JSON.stringify(useDefaultStore().$state)
    }
  },

})