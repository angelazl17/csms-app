import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  alias: {
      // 最常用的别名配置
      '@': path.resolve(__dirname, 'src'),
      '@module': path.resolve(__dirname, 'src/modules')
    
    }
  
})
