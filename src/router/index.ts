import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Fund from '../views/home/fund/Fund.vue'
import System from '../views/home/system/System.vue'
import Compose from '../views/home/fund/compose/Compose.vue'
import From from '../views/home/fund/from/From.vue'
import Direction from '../views/home/fund/direction/Direction.vue'
import User from '../views/home/system/user/User.vue'

 



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:'/home/fund',
      meta:{
        isLogin:true
      },
      children:[
        {
          path:'/home/fund',
          name:'fund',
          component:Fund,
          redirect:'/home/fund/compose',
          children:[
            {
              path:'/home/fund/compose',
              name:'compose',
              component:Compose,
            },
            {
              path:'/home/fund/compose',
              name:'compose',
              component:Compose,
            },
            {
              path:'/home/fund/from',
              name:'from',
              component:From,
            },
            {
              path:'/home/fund/direction',
              name:'direction',
              component:Direction,
            },
          ]
        },
        {
          path:'/home/system',
          name:'system',
          component:System,
          children:[
            {
              path:'/home/system/user',
              name:'user',
              component:User
            }
          ]
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

//拦截登录
router.beforeEach((to , from)=>{
  if(to.matched.some(v=>v.meta.isLogin)){
   //判断token
   const token=localStorage.getItem('token')
   if(!token){
       return{
         path:'/login',
         query:{
           fullPath:encodeURIComponent(to.fullPath)
         }
       }
   }
  }
})





export default router
