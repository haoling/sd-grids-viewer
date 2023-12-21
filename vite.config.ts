import { resolve } from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://cdn.jsdelivr.net/gh/haoling/sd-grids-viewer@main/dist/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: "DanbooruReact",
      fileName: "sd-grids-viewer",
      formats: ["es"]
    },
    rollupOptions: {
      input: {
        sample: "sample.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'sd-grids-viewer.css';
          return assetInfo.name;
        },
      },
    },
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
  },
  define: {
    'process.env': {
      NODE_ENV: 'development'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
