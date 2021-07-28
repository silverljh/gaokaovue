import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import SelectProfession from '@/components/SelectProfession'
// import Controller from '@/components/Controller'
import Login from '@/components/Login'
import Update from '@/components/Update'
import AdminLogin from '@/components/AdminLogin'
import AdminRegister from '@/components/AdminRegister'
import AdminUpdate from '@/components/AdminUpdate'
import AdminController from '@/components/AdminController'
import axios from 'axios'
import qs from 'qs'

Vue.use(Router)
Vue.prototype.$http = axios;
qs.stringify() //转换成查询字符串
let comments = {content: this.inputValue}

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profession',
      name: 'SelectProfession',
      component: SelectProfession
    },
    // {
    //   path: '/controller',
    //   name: 'Controller',
    //   component: Controller
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/admin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/adminRegister',
      name: 'AdminRegister',
      component: AdminRegister
    },
    {
      path: '/adminUpdate',
      name: 'AdminUpdate',
      component: AdminUpdate
    },
    {
      path: '/admincontroller',
      name: 'AdminController',
      component: AdminController
    }
  ]
})
