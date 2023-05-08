import Vue from 'vue';
import App from './App.vue'
import router from './router'

//bootstrap 5 and base styles
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/base.scss'

import 'bootstrap/dist/js/bootstrap.js'
const app = createApp(App)

app.use(router)

app.mount('#app')
