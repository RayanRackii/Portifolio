import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portifolio/',
  resolve: { 
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'es'
      }
    },
    minify: 'terser',
    assetsInlineLimit: 0,
  }
})