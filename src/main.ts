import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');