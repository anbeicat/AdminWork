/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-31 17:07:58
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-04-13 16:19:39
 * @description: 
 * @FilePath: /AdminWork/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      '@@': resolve(__dirname, 'node_modules') // 设置 `@@` 指向 `node_modules` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: '0.0.0.0',
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/theme/index.less')}";`,
          // 'arcoblue-6': '#f85959',
        },
        // math: 'strict',
        javascriptEnabled: true,
      },
    },
  },
  build:{
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  }
})