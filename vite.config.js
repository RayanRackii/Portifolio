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
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    },
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  esbuild: {
    legalComments: 'none',
  }
})