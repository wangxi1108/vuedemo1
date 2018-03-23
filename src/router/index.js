import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/Index'
import DetailPage from '@/pages/Detail'
// import DetailAna from '@/components/detail/'


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
          path:'analysis',
          // component:DetailAna
        },

      ]
    }
  ]
})
