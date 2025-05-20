import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, 'src/css'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    }
  }
})
