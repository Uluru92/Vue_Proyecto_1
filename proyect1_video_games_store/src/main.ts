import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')


/* Pendiente: Necesito ver cual import debo dejar para implementar bootstrap
Otra opción es eliminar la carpeta de node_modules y volver a instalar con el comando
npm install

Nota: NUNCA usar el comando npm install ya que reescribo los archivos package.json y esto es un grave problema
*/