import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import Login from '../views/Login'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new Router({
    routes: routes,
    //mode: 'history'
})

export default router