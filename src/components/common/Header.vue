<template>
  <header class="bg-white shadow-lg border-b-2 border-tianhing-blue">
    <nav class="section-container">
      <div class="flex justify-between items-center py-4">
        <!-- Logo 區域 -->
        <div class="flex items-center space-x-3">
          <div
            class="w-10 h-10 bg-gradient-to-br from-tianhing-blue to-tianhing-dark-blue rounded-lg flex items-center justify-center">
            <span class="font-cubic text-white text-sm font-bold">TH</span>
          </div>
          <div>
            <h1 class="font-cubic text-xl text-tianhing-dark-blue font-bold">天行科技</h1>
            <p class="font-cubic text-xs text-tianhing-blue">TIANHING TECHNOLOGIES</p>
          </div>
        </div>

        <!-- 桌面版導航選單 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="nav-link" :class="{ 'nav-link-active': $route.name === 'home' }">
            首頁
          </router-link>
          <router-link to="/about" class="nav-link" :class="{ 'nav-link-active': $route.name === 'about' }">
            關於天行科技
          </router-link>
          <router-link to="/products" class="nav-link" :class="{ 'nav-link-active': $route.name === 'products' }">
            產品介紹
          </router-link>

          <!-- 聯絡按鈕 -->
          <button class="btn-tech text-sm px-4 py-2">
            聯絡我們
          </button>
        </div>

        <!-- 手機版選單按鈕 -->
        <button @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-tianhing-light-blue transition-colors">
          <svg class="w-6 h-6 text-tianhing-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 手機版導航選單 -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-tianhing-blue bg-tianhing-light-blue">
        <div class="py-4 space-y-2">
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
            首頁
          </router-link>
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
            關於天行科技
          </router-link>
          <router-link to="/products" class="mobile-nav-link" @click="closeMobileMenu">
            產品介紹
          </router-link>
          <button class="w-full text-left mobile-nav-link text-tianhing-dark-blue font-medium" @click="closeMobileMenu">
            聯絡我們
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
