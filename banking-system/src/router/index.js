import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup/SignupComponent.vue';
import LandingPage from '../components/LandingPage/LandingPageComponent.vue';
import Login from '../components/Login/LoginComponent.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
