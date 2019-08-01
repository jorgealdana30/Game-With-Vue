import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../src/components/LogIn'
import App from '../src/components/Inicio'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Inicio',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {
                main: App
            }
        },
        {
            path: '/login',
            name: 'LogIn',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {
                main: LogIn
            }
        }
    ]
})
