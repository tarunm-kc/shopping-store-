import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Products from "../components/Products.vue";
import Checkout from "../components/Checkout.vue";
import Login from "../components/Login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Products
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
