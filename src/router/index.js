import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  home: () => import('@/views/home'),
  news: () => import('@/views/news'),
  newsDetail: () => import('@/views/news/detail'),
  call: () => import('@/views/call'),
}

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: components.home
    },
    {
      path:'/about/news',
      name:'news',
      component:components.news
    },
    {
      path:'/about/news/newsDetail',
      name:'newsDetail',
      component:components.newsDetail
    },
    {
      path:'/about/call',
      name:'call',
      component:components.call
    },
    {
      path:"/",
      name:"product",
      redirect:"/home",
      component:()=>import("@/views/layout/layout.vue"),
      children:[
      {
        path:"/product",
        name:"product",
        component:()=>import("@/views/product/index.vue"),
        meta:{
          title:"产品"
        },
      },
      {
        path:"/active",
        name:"active",
        component:()=>import("@/views/active/index.vue"),
        meta:{
          title:"活动"
        }
      },
      {
        path:"/education",
        name:"education",
        component:()=>import("@/views/product/activeCenter.vue"),
        meta:{
          title:"教育"
        }
      },     
    ],
    
   },
   {
    path:"/detail",
    name:"DTX",
    component:()=>import("@/views/product/product_detail.vue"),
    meta:{
      title:"DTX系列"
    }
  },
  ]
})
