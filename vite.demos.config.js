import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: false, // Don't copy public assets to avoid duplication
  build: {
    outDir: 'public/demos',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        broad: 'demos-src/broad.jsx',
        narrow: 'demos-src/narrow.jsx',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
