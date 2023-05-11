import 'material-icons/iconfont/material-icons.css';
import "../css/app.css";

import { createApp } from 'vue';
import App from './components/App'
import SideBar from './Layout/SideBar';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp({})

// app.component('home', Home)
app.component('app', App)
// app.component('sideBar', SideBar)
app.use(router);
app.use(VueAxios, axios)

app.mount('#app')