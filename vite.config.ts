import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { VITE_DROP_CONSOLE, VITE_PORT } from './config/constant'
import proxy from './config/proxy'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

function resovePath(paths: string) {
  // 如何 __dirname 找不到 需要 yarn add @types/node --save-dev
  return path.resolve(__dirname, paths)
}
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  console.log(command, mode)
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@config': resovePath('./config'),
        '@comps': resovePath('./src/components'),
        '@utils': resovePath('./src/utils'),
        '@api': resovePath('./src/api'),
        '@pinia': resovePath('./src/piniaStore'),
      },
    },
    // plugins
    plugins: [
      vue(),
      styleImport({
        // 自动按需引入vant组件的样式
        resolves: [VantResolve()],
      }),
    ],
    build: {
      target: 'modules',
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
    },

    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy,
    },
  }
}
