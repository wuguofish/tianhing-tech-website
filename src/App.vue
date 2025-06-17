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
import { RouterView } from 'vue-router'
</script>

<style>
#app {
  font-family: 'Taipei Sans TC', 'Microsoft JhengHei', 'PingFang TC', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
