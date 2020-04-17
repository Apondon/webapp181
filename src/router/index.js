import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:false,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta:{
      keepAlive:false,
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta:{
      keepAlive:false,
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    meta:{
      keepAlive:true,
    }
  },
  {
    path: '/theater',
    name: 'Theater',
    component: () => import('../views/Theater.vue'),
    meta:{
      keepAlive:true,
    }
  },
  {
    path: '/seats',
    name: 'Seats',
    component: () => import('../views/Seats.vue'),
    meta:{
      keepAlive:false,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      keepAlive:false,
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      keepAlive:false,
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
