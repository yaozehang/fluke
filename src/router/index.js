import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  home: () => import('@/views/home'),                              //首页
  layout: () => import("@/views/layout/layout"),                   //主视图
  about: () => import("@/views/about/layout"),                     //关于
  call: () => import('@/views/about/call'),                        //联系我们
  news: () => import('@/views/about/news'),                        //新闻中心
  newsDetail: () => import('@/views/about/news/detail'),           //新闻详情
  product: () => import("@/views/product"),                        
  dsx: () => import("@/views/product/product"),
  cert: () => import("@/views/product/second-detail"),
  active: () => import("@/views/active/index.vue"),
  education: () => import("@/views/education/education"),
  DTX: () => import("@/views/product/productDetail/productDetail"),
}

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: components.layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: components.home,
          meta:{
            title:'首页'
          }
        },
        {
          path:'/about',
          name:'about',
          component:components.about,
          meta:{
            title:'关于'
          },
          children:[
            {
              path:'news',
              name:'news',
              component: components.news,
              meta:{
                title:'新闻中心'
              }
            },
            {
              path: 'call',
              name: 'call',
              component: components.call,
              meta:{
                title:'联系我们'
              }
            },
          ]
        },
        {
          path: '/about/news/newsDetail',
          name: 'newsDetail',
          component: components.newsDetail,
          meta:{
            title:'新闻详情'
          }
        },
        {
          path: "/product",
          name: "product",
          redirect:"dsx",
          component: components.product,
          meta: {
            title: "产品"
          },
          children: [
            {
              path: "/dsx",
              name: "dsx",
              component: components.dsx,
              meta: {
                title: "列表"
              }
            },
            {
              path: "cert",
              name: "cert",
              component: components.cert,
              meta: {
                title: "列表2"
              }
            },
          ]
        },
        {
          path: "/active",
          name: "active",
          component: components.active,
          meta: {
            title: "活动"
          }
        },
        {
          path: "/education",
          name: "education",
          component: components.education,
          meta: {
            title: "教育"
          }
        },
      ],

    },
    {
      path: "/detail",
      name: "DTX",
      component: components.DTX,
      meta: {
        title: "DTX系列"
      }
    },
  ]
})
