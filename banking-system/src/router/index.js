import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup/SignupComponent.vue';
import LandingPage from '../components/LandingPage/LandingPageComponent.vue';
import Login from '../components/Login/LoginComponent.vue';
import UserDash from "../components/Panel/UserDashboard.vue";


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
  {
    path: '/dashboard',
    component: UserDash,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
