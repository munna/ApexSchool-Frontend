import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/core/Pages/Home'
import About from '@/core/Pages/About'
import Login from '@/core/Pages/Login'
import StudentRoutes from '@/modules/Student/Routes'
import AccountRoutes from '@/modules/Account/Routes/index.ts'

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: '',
    component: Home,
    title: 'Home Page'
  },
  {
    path: '/about',
    name: '',
    component: About,
    title: 'About us'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    title: 'About us'
  }
]

const routes = baseRoutes.concat(StudentRoutes).concat(AccountRoutes)
export default new Router({
  routes
})
