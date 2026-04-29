import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Details from '../views/Details.vue'

const routes = [
 {
   path:'/',
   component: Home
 },
 {
   path:'/pokemon/:name',
   component: Details
 }
]

export default createRouter({
 history:createWebHistory(),
 routes
})