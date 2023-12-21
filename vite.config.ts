import { resolve } from 'path'
import { defineConfig, UserConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const config: UserConfig = {
    plugins: [
      react(),
    ],
    base: 'https://cdn.jsdelivr.net/gh/haoling/sd-grids-viewer@v0.1/dist/',
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
      minify: true,
      cssCodeSplit: false,
      sourcemap: true,
    },
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }

  if (mode == 'development') {
    config.build.minify = false
    config.build.cssMinify = false
    process.env.NODE_ENV = 'development'
    config.mode = 'development'
    config.base = './'
  }

  return config
})
