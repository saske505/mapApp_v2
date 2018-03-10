import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/auth/SignUp'
import SignIn from '@/components/auth/SignIn'
import Profile from '@/components/auth/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/SignUp',
      name: 'Sign up',
      component: SignUp
    },
    {
      path: '/SignIn',
      name: 'Sign in',
      component: SignIn
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
