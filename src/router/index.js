import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/Index'
import DetailPage from '@/pages/Detail'
import DataStatistics from '@/pages/details/DataStatistics'
import DataYuCe from '@/pages/details/DataYuCe'
import Analysis from '@/pages/details/Analysis'
import Advertising from '@/pages/details/Advertising'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path:'/Detail',
      component:DetailPage,
      children:[
        {
          path:'DataStatistics', //写文件名
          component:DataStatistics //写import 后面自定义的名字
        },
        {
          path:'DataYuCe',
          component: DataYuCe
        },
        {
          path:'Analysis',
          component: Analysis
        },
        {
          path:'Advertising',
          component: Advertising
        }

      ]
    }
  ]
})
