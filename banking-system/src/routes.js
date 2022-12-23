import Signup from './components/Signup/SignupComponent.vue';
import LandingPage from './components/LandingPage/LandingPageComponent.vue';
import Login from './components/Login/LoginComponent.vue';
// import Panel from './components/Panel/';

export default[
{path: '/', component: LandingPage},
{path: '/login', component: Login},
{path: '/signup', component: Signup},
// {path: '/dashboard', component: LandingPage},

]