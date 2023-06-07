/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-04-11 09:31:34
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-06-05 15:47:44
 * @description: 
 * @FilePath: /AdminWork/src/router/index.ts
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
                            path: '/index/home',
                            icon: 'MenuOutlined',
                            parentKey:'index'
                        },
                        component: () => import('../pages/Dashborad/home.vue'),
                    },
                ]
            },
            {
                path: 'table',
                meta: {
                    label: '表格页面',
                    key: 'table',
                    icon: 'TableOutlined',
                },
                children: [
                    {
                        path: 'useTable',
                        name: 'useTable',
                        meta: {
                            label: '表格',
                            key: 'useTable',
                            name: 'useTable',
                            path: '/table/useTable',
                            icon: 'MenuOutlined',
                            parentKey:'table'
                        },
                        component: () => import('../pages/Table/index.vue'),
                    },
                    {
                        path: 'vxeTable',
                        name: 'vxeTable',
                        meta: {
                            label: 'vxeTable表格',
                            key: 'vxeTable',
                            name: 'vxeTable',
                            path: '/table/vxeTable',
                            icon: 'MenuOutlined',
                            parentKey:'table'
                        },
                        component: () => import('../pages/Table/vxeTable.vue'),
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