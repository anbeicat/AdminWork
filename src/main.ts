/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-02 11:23:52
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-05-08 14:01:22
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
import App from './App.vue'
// 额外引入图标库
import router from './router/index'
import store from './store'
import { useDefaultStore } from "./store/defaultSettings"
// 创建vue实例
const app = createApp(App)



// 挂载pinia
app.use(store)

const defaultStore = useDefaultStore()
localStorage.setItem('userInfo', localStorage.getItem('userInfo') || JSON.stringify(defaultStore))

app.use(router)
app.config.globalProperties.axios = 'axios';
router.beforeEach(async (to, from, next) => {
    console.log('ttoto', to);
    if (to.path === '/') {
        next({ name: 'home' })
    }
    next()
})
// localStorage['userInfo'] = localStorage['userInfo'] || JSON.stringify(defaultStore)
console.log('defaultStore',defaultStore,localStorage.getItem('userInfo'));

// 挂载实例
app.mount('#app');
