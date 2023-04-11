/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-02 14:51:38
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-04-11 09:32:10
 * @description:
 * @FilePath: /AdminWork/src/router/index.ts
 */
/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-02 14:51:38
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-03-13 11:24:08
 * @description:
 * @FilePath: /vue3-oms/src/router/index.ts
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    createWebHistory
  } from 'vue-router'
  
  const routes: Array<RouteRecordRaw> = [
    // {
    //   path: '/user/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/',
    //   redirect: to => {
    //     return 'user/login'
    //   },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
    // routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
  })
  
  export default router