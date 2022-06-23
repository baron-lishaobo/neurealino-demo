# neutralinojs-demo
An empty Neutralinojs app, extend as you wish

- Fiestly create neutralinojs project with template which is neutralinojs-zero
```
neu create myapp --template neutralinojs/neutralinojs-zero
```

- Secondly create a vue project based vite

```
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
```

- Thirdly add QuasarUI
```
$ yarn add quasar @quasar/extras
$ yarn add -D @quasar/vite-plugin sass@1.32.12

# or
$ npm install quasar @quasar/extras
$ npm install -D @quasar/vite-plugin sass@1.32.12

# or
$ pnpm add quasar @quasar/extras
$ pnpm add -D @quasar/vite-plugin sass@1.32.12

```
- Forthly use Quasar 
```
// main.js
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

```
```
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
})
```
- Finaly create src/quasar-variables.sass
```

$primary   : #1976D2
$secondary : #26A69A
$accent    : #9C27B0

$dark      : #1D1D1D

$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037
```
