import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stores from '../views/Stores.vue'
import MetafieldsTool from '../views/MetafieldsTool.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/stores', name: 'Stores', component: Stores },
    { path: '/metafields', name: 'MetafieldsTool', component: MetafieldsTool }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router