import { createRouter, createWebHashHistory } from 'vue-router'


import autoJump from '@/lin/util/auto-jump'
import routes from './route'

// 判断是否需要登录访问, 配置位于 config 文件夹


const router = createRouter({
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 登录验证
  // if (isLoginRequired(to.name) && !store.state.loggedIn) {
  //   next({ path: '/login' })
  //   return
  // }

  // TODO: tab 模式重复点击验证

  // 权限验证
  // if (store?.state && store?.getters) {
  //   const { permissions, user } = store.getters
  //   if (to.path !== '/about' && !Util.hasPermission(permissions, to.meta, user)) {
  //     ElMessage.error('您无此页面的权限哟')
  //     next({ path: '/about' })
  //     return
  //   }
  // }

  // 路由发生变化重新计时
  autoJump(router)

  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
