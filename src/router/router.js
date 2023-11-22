import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeViews,
    },
    {
        path: '/product-detail/:id',
        name: 'productDetail',
        component: () => import('../views/ProductDetailView.vue'),
    },
    {
        path: '/basket-preview',
        name: 'basketPreview',
        component: () => import('../views/BasketPreviewView.vue'),
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;