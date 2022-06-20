import { createApp} from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {  router } from './routers';

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
.mount('#app')
window.Neutralino.init();


