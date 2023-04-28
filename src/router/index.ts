/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-04-11 09:31:34
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-04-26 15:00:08
 * @description: 
 * @FilePath: /AdminWork/src/router/index.ts
 */
/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-02 14:51:38
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-04-23 15:01:39
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
import layout from '../components/layout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: layout,
        children: [
            {
                path: 'index',
                meta: {
                    label: 'Dashborad',
                    key: 'index',
                    icon: 'PieChartOutlined',
                },
                children: [
                    {
                        path: 'home',
                        name: 'home',
                        meta: {
                            label: '工作台',
                            key: 'home',
                            name: 'home',
                            icon: 'MenuOutlined',
                        },
                        component: () => import('../pages/Dashborad/home.vue'),
                    },
                ]
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
    // routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})

export default router