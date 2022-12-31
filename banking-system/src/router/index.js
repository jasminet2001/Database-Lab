import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup/SignupComponent.vue';
import LandingPage from '../components/LandingPage/LandingPageComponent.vue';
import Login from '../components/Login/LoginComponent.vue';
import UserDash from "../components/Panel/UserDashboard.vue";
import CustomerList from '../components/Panel/CustomerList.vue';
import EmployeesList from "../components/Panel/EmployeeList.vue";
import TransactionsList from "../components/Panel/TransactionsList.vue";
import BranchList from "../components/Panel/BranchList.vue";
import AccList from "../components/Panel/AccountsList.vue";

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
  {
    path: '/customerList',
    component: CustomerList,
  },
  {
    path: '/employeelist',
    component: EmployeesList,
  },
  {
    path: '/transactions',
    component: TransactionsList,
  },
  {
    path: '/branchlist',
    component: BranchList,
  },
  {
    path: '/accountslist',
    component: AccList,
    meta: { bgColor: '#555555' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
