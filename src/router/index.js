import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/auth/SignUp'
import SignIn from '@/components/auth/SignIn'
import Profile from '@/components/auth/Profile'
import Catagory from '@/components/content/page'
import CatagoryContent from '@/components/content/page-content'

Vue.use(Router)

export default new Router({
  history: true,
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
    },
    {
      path: '/catagory',
      name: 'Catagory',
      component: Catagory
    },
    {
      path: '/catagory/:name',
      name: 'catagory-content',
      component: CatagoryContent,
      props: true
    }

  ]
})
