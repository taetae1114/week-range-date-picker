import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build:{
    outDir:"week-range",
    lib:{
      entry:path.resolve(__dirname,"./src/components/weekrange/index.js"),//指定打包入口
      name:"week-range",
      fileName:"week-range",
    },//库编译模式配置
    rollupOptions:{
      // 外部化处理不想打包进库的依赖
      external:["vue"],
      output:{
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals:{
          vue:"Vue",
        }
      }
    }
  }
})
