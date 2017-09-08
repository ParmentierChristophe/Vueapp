import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next('login')

        }else {
          next()
        }

      }
    }
  ]
})
