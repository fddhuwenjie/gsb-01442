import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'alkaid-plus': resolve(__dirname, '../packages/alkaid-plus/src'),
      '@alkaid-plus/components': resolve(__dirname, '../packages/components/src'),
      '@alkaid-plus/hooks': resolve(__dirname, '../packages/hooks/src'),
      '@alkaid-plus/utils': resolve(__dirname, '../packages/utils/src'),
    },
  },
})
