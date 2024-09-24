import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue3 } from 'bootstrap-vue-3';

const app = createApp(App);
app.use(BootstrapVue3);

createApp(App).use(store).use(router).mount('#app')