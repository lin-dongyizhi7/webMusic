import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import axios from 'axios'
const app = createApp(App)
getVant(app)
app.use(store).use(router).mount('#app')
app.config.globalProperties.$axios=axios;
axios.defaults.withCredentials = true;