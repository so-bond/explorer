// Composables
import { basePath } from '@/lib';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'register/:address',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Register.vue'),
        meta: {title: "Register"}
      },
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {title: "Dashboard"}
      }
    ],
  },
  {
    path: '/:any+', redirect: () => {
      console.log("Default path. redirecting to /");
      
      return { 
        path:'/', 
        // query:{path: to.params.any}
      }
    }
  }
]
console.log("BasePath", basePath());

const router = createRouter({
  history: createWebHistory(basePath()),

  routes,
})

router.beforeEach((to, from) => {
  console.log('Navigation from', from, 'to', to)
  return true;
})


export default router
