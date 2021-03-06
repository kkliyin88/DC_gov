// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store/index'
import 'normalize.css'
import Axios from 'axios'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './style/main.css';
Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//    next()
// })
// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
