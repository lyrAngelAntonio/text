import './assets/base.css'
import 'vant/lib/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Form, 
         Field,
         CellGroup,
         Sidebar, 
         SidebarItem,
         Tab, 
         Tabs,
         
       } from 'vant'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Sidebar)
app.use(SidebarItem)
app.use(Tab)
app.use(Tabs)

app.mount('#app')
