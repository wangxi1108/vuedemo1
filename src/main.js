// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//安装的插件在main.js里引入。包括npm安装的模块。再vue.use()用。并把次插件注入到了全局。
//此时入口文件！

import Vue from 'vue'
import App from './App'
import router from './router'
import Layout from './components/Layout'
import $ from 'jquery'
import _ from 'lodash'
import VueResource from 'vue-resource'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min'

Vue.config.productionTip = false

Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
