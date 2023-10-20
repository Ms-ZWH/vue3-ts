import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login.vue'
import { ElMessage } from 'element-plus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//  路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
      // 登录或者注册才可以往下进行
      next();
  } else {
      // 获取 token
       const token = localStorage.getItem('token')
      // token 不存在
      if (token === null || token === '') {
          ElMessage.error('您还没有登录，请先登录');
          localStorage.removeItem('token')
          next('/login');
      } else {
          next();
      }
  }
});

export default router
