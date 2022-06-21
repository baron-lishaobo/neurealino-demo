import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path';
// import Components from 'unplugin-vue-components/vite';
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template:{transformAssetUrls}
    }),
    quasar({
      // autoImportComponentCase: 'combined',
      sassVariables: 'src/assets/quasar-variables.sass'
    })
  ], 
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")
    }
  }
})
