
import Vue from "vue"
import Router from "vue-router"
const Home = resolve => require(["@/page/home"], resolve)
const about = resolve => require(["@/page/about"], resolve);
const live = resolve => require(["@/page/live"], resolve);
const zhaopin = resolve => require(["@/page/zhaopin"], resolve);
const contact= resolve => require(["@/page/contact"], resolve);

Vue.use(Router);
export const menu = [
  {
    path: "/about",
    component: about,
    meta: { title: "首页" },
	flag:true,
  },
  {
    path: "/live",
    component: live,
    meta: { title: "生活" },
  	flag:true,
  },
  {
    path: "/zhaopin",
    component: zhaopin,
    meta: { title: "招聘" },
  	flag:true,
  },
  {
    path: "/contact",
    component: contact,
    meta: { title: "联系我们" },
  	flag:true,
  }
]
export default new Router({
  routes: [
	{ path: "*", redirect: "/about" },
    {
      path:"/",
	  redirect:"/about",
      component: Home,
      children: [
       ...menu
      ]
    },
  ]
})
