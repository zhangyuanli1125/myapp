import Vue from "vue"
import Router from 'vue-router'
import Home from '../pages/home'
import ShoppingCar from '../pages/shoppingcar'
import Mine from '../pages/mine'
import Cnode from '../pages/cnode'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:'/shoppingcar',
            component:ShoppingCar
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/cnode',
            component:Cnode
        }
    ]
})