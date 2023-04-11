/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-02 11:23:52
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-04-11 09:35:33
 * @description:
 * @FilePath: /AdminWork/src/main.ts
 */
import { createApp } from 'vue'
import '@arco-design/web-vue/dist/arco.css';
import './style.less'
import './theme/index.less';
import App from './App.vue'
// 额外引入图标库
import router from './router/index'
import store from './store'
import { useDefaultStore } from "./store/defaultSettings"
// 创建vue实例
const app = createApp(App)
const defaultStore = useDefaultStore()


// 挂载pinia
app.use(store)
app.use(router)
app.config.globalProperties.axios = 'axios';
router.beforeEach(async (to, from, next) => {
})

// 挂载实例
app.mount('#app');
