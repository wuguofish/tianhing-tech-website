<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import { RouterView, useRouter } from 'vue-router'
import { nextTick } from 'vue'

const router = useRouter()

// 監聽路由變化，確保滾動到頂部
router.afterEach(async (to, from) => {
  // 等待 DOM 更新完成
  await nextTick()

  // 如果有錨點，滾動到對應元素
  if (to.hash) {
    const element = document.querySelector(to.hash)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      return
    }
  }

  // 如果是不同的路由，滾動到頂部
  if (to.path !== from.path) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
})
</script>

<style>
#app {
  font-family: 'Taipei Sans TC', 'Microsoft JhengHei', 'PingFang TC', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
