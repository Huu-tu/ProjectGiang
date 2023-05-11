import Home from './components/Home.vue';
import Update from './components/Update.vue';
import DetailPage from './components/DetailPage.vue';
import CreatePage from './components/CreatePage.vue';
import * as VueRouter from 'vue-router';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/createProduct',
            component: CreatePage,
            name: 'createPage',
        },
        {
            path: '/product/:id',
            component: DetailPage,
            name: 'product',
            props: true
        },
        {
            path: '/update',
            component: Update,
            name: 'update',
        },
    ]
});

export default router;