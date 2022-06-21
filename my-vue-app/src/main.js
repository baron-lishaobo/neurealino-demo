import { createApp} from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {  router } from './routers';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import iconSet from 'quasar/icon-set/fontawesome-v5'
import {Tabs,
    PageHeader,
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    Button,
    Row,
    Col,
    Menu,
    MenuItem,
    Divider
} from 'ant-design-vue'
const app= createApp(App)
app.use(Tabs)
.use(router)
.use(Menu)
.use(MenuItem)
.use(PageHeader)
.use(Layout)
.use(LayoutHeader)
.use(LayoutContent)
.use(LayoutFooter)
.use(Button)
.use(Row)
.use(Col)
.use(Divider)
.use(Quasar,{
    plugins:{},//import Quasar plugins and add here
    iconSet: iconSet
    /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})
.mount('#app')
window.Neutralino.init();


