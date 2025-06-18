<template>
  <footer class="bg-gradient-to-br from-tianhing-dark-blue to-gray-800 text-white">
    <div class="section-container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- 公司資訊 -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 flex items-center justify-center">
              <img src="/logo.svg" alt="天行科技 Logo">
            </div>
            <div>
              <h3 class="font-cubic text-lg font-bold">天行科技</h3>
              <p class="font-cubic text-xs text-tianhing-light-blue">TIANHING TECHNOLOGIES</p>
            </div>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed">
            承前啟後，數位永生<br>
            致力於打造連接過去與未來的科技橋樑
          </p>
          <div class="font-cubic text-xs text-tianhing-light-blue">
            EST. 2187
          </div>
        </div>

        <!-- 產品連結 -->
        <div class="space-y-4">
          <h4 class="font-cubic text-lg font-semibold text-tianhing-light-blue">核心產品</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="./products#da-1001" class="hover:text-tianhing-light-blue transition-colors">訂製伴侶 DA-1001</a>
            </li>
            <li><a href="./products#mind-network" class="hover:text-tianhing-light-blue transition-colors">心靈網路平台</a>
            </li>
            <li><a href="./products#digital-seance" class="hover:text-tianhing-light-blue transition-colors">數位觀落陰系統</a>
            </li>
          </ul>
        </div>

        <!-- 分公司資訊 -->
        <div class="space-y-4">
          <h4 class="font-cubic text-lg font-semibold text-tianhing-light-blue">全球據點</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center space-x-2">
              <span class="w-2 h-2 bg-tianhing-blue rounded-full"></span>
              <span>新新加坡 (總部)</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="w-2 h-2 bg-tianhing-light-blue rounded-full"></span>
              <span>馬來西亞辦公室</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="w-2 h-2 bg-tianhing-light-blue rounded-full"></span>
              <span>台灣分公司</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="w-2 h-2 bg-tianhing-light-blue rounded-full"></span>
              <span>大中華邦聯分公司</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="w-2 h-2 bg-tianhing-light-blue rounded-full"></span>
              <span>泰國辦公室</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="w-2 h-2 bg-tianhing-light-blue rounded-full"></span>
              <span>菲律賓辦公室</span>
            </li>
          </ul>
        </div>

        <!-- 聯絡資訊 -->
        <div class="space-y-4">
          <h4 class="font-cubic text-lg font-semibold text-tianhing-light-blue">聯絡資訊</h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start space-x-2">
              <svg class="w-4 h-4 mt-1 text-tianhing-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-gray-300">新新加坡科技園區<br>天行大樓 88F</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-tianhing-blue" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="font-cubic text-gray-300">+65-2187-8888</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-tianhing-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="text-gray-300">contact@tianhing.tech</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 版權資訊 -->
      <div class="border-t border-gray-600 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-gray-400">
            <span class="font-cubic">© 2187 天行科技股份有限公司</span>
            <span class="mx-2">|</span>
            <span>版權所有</span>
          </div>
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <a href="./guidelines" class="hover:text-tianhing-light-blue transition-colors">隱私政策</a>
            <a href="./guidelines" class="hover:text-tianhing-light-blue transition-colors">服務條款</a>
            <a href="./guidelines" class="hover:text-tianhing-light-blue transition-colors">意識安全聲明</a>
          </div>
        </div>

        <!-- 系統狀態顯示 -->
        <div class="mt-4 flex justify-center">
          <div
            class="font-cubic text-xs text-tianhing-light-blue bg-gray-700 px-4 py-2 rounded-full border border-tianhing-blue">
            <span class="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            系統運行狀態: 正常 | 全球網路延遲: 0.03ms | 意識同步率: 99.97%
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer 組件不需要額外的邏輯
</script>
