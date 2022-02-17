import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
//    viteCommonjs({exclude: 'ice'})
  ],
  build: {
    rollupOptions: {
      external: ['ice'],
      output: {
        globals: {
          ice: 'ice',
        },
      },
    }
  },

  optimizeDeps: {
    exclude: ['ice'],

    esbuildOptions:{
      plugins:[
        esbuildCommonjs(['ice'])
      ]
    }
  }
})
