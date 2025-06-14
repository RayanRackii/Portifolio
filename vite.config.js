import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import path from 'path'

export default defineConfig({
  plugins: [react(), 
    tailwindcss()
  ],
  base: '/Portifolio/', // Adicione a barra final
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
  },
  server: {
    headers: {
      'Content-Security-Policy': "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; img-src * data: blob:; connect-src * https://www.google-analytics.com; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; font-src *; media-src *; object-src *; child-src *; frame-src *;"
    }
  }
})