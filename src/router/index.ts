import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/guidelines',
      name: 'guidelines',
      component: () => import('../views/GuidelinesView.vue')
    }
  ],
  // 滾動行為配置
  // 進階滾動行為配置
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // 延遲執行，確保頁面渲染完成
      setTimeout(() => {
        let scrollTo: ScrollToOptions = { top: 0, behavior: 'smooth' }

        // 如果有錨點，滾動到對應元素
        if (to.hash) {
          const element = document.querySelector(to.hash)
          if (element) {
            const headerHeight = 80 // header 高度
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset

            scrollTo = {
              top: Math.max(0, elementTop - headerHeight),
              behavior: 'smooth'
            }
          }
        }
        // 如果是瀏覽器的前進/後退，恢復之前的滾動位置
        else if (savedPosition) {
          scrollTo = {
            ...savedPosition,
            behavior: 'smooth'
          }
        }
        // 特定路由的滾動處理
        else if (to.name === 'products') {
          // 產品頁面可能需要不同的滾動行為
          scrollTo = { top: 0, behavior: 'smooth' }
        }

        resolve(scrollTo)
      }, 100) // 100ms 延遲
    })
  }
})

export default router
