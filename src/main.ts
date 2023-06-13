/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-02 11:23:52
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-13 14:14:33
 * @description:
 * @FilePath: /AdminWork/src/main.ts
 */
import { createApp } from 'vue'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import './style.less'
import './theme/index.less';
// import 'vxe-table/styles/index.scss';
import App from './App.vue'
import VXETable from 'vxe-table'
import "vxe-table/lib/style.css";

// 额外引入图标库
import router from './router/index'
import store from './store'
import { useDefaultStore } from "./store/defaultSettings"
import { createDiscreteApi } from 'naive-ui'
const { loadingBar } = createDiscreteApi(['loadingBar'])
// 创建vue实例
const app = createApp(App)



// 挂载pinia
app.use(store)
app.use(router)
app.use(VXETable)
app.config.globalProperties.axios = 'axios';
router.beforeEach(async (to, from, next) => {
    loadingBar.start()
    console.log('ttoto', to, from);
    if (to.path === '/') {
        next({ name: 'home' })
    }
    next()
})

router.afterEach((to, from) => {
    // if (to.fullPath.split('/')[1] === 'redirect') {
    //     router.push(to.fullPath.replace('/redirect', ''))
    // }
    loadingBar.finish()
})
const defaultStore = useDefaultStore()
// localStorage.removeItem('userInfo')
localStorage.setItem('userInfo', localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : JSON.stringify(defaultStore))
// localStorage['userInfo'] = localStorage['userInfo'] || JSON.stringify(defaultStore)

// 挂载实例
app.mount('#app');
