<template>
  <div class="bg-gradient-to-br from-tianhing-light-blue via-white to-tianhing-light-blue">

    <!-- Hero 區塊 -->
    <section class="section-container py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- 左側內容 -->
        <div class="space-y-16">
          <div class="space-y-8">
            <div class="space-x-4 flex flex-row">
              <div class="w-full flex-1">
                <img src="/logo.svg" alt="天行科技 Logo">
              </div>
              <div class="flex flex-col items-center justify-center flex-1">
                <div class="font-cubic text-tianhing-blue text-sm tracking-wider mb-1">
                  TIANHING TECHNOLOGIES © 2187
                </div>
                <h1 class="text-4xl md:text-6xl font-bold text-gray-800">
                  <div>承前啟後</div>
                  <div class="text-tianhing-dark-blue mt-2">數位永生</div>
                </h1>
              </div>
            </div>
            <p class="text-lg text-gray-600 leading-relaxed">
              從西元2060年起，天行科技致力於突破生命與數位的界限，
              透過先進的人工智慧技術，讓記憶永續、情感延續、關係不滅。
            </p>
          </div>

          <!-- 最新產品亮點 -->
          <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-tianhing-blue space-y-4">
            <div class="flex items-start space-x-4">
              <div
                class="w-16 h-16 bg-gradient-to-br from-tianhing-blue to-tianhing-dark-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="font-cubic text-white text-s font-bold">NEW</span>
              </div>
              <div>
                <h3 class="font-cubic text-xl text-tianhing-dark-blue font-bold mb-2">
                  最新產品：訂製伴侶 DA-1001
                </h3>
                <p class="text-gray-600 mb-4">
                  革命性的有機仿生人技術，搭載最新 AI 情感模型，
                  提供完全客製化的陪伴體驗。
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="font-cubic text-xs bg-tianhing-light-blue text-tianhing-dark-blue px-2 py-1 rounded">
                    搭載智策AI v3.7，具有大專院校畢業的教育程度
                  </span>
                  <span class="font-cubic text-xs bg-tianhing-light-blue text-tianhing-dark-blue px-2 py-1 rounded">
                    真實人類身體，透過基因編輯技術打造
                  </span>
                  <span class="font-cubic text-xs bg-tianhing-light-blue text-tianhing-dark-blue px-2 py-1 rounded">
                    可自由選配多種模組和功能，打造獨一無二的伴侶體驗
                  </span>
                </div>
              </div>
            </div>
            <!-- CTA 按鈕 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://abr.ge/68p4k4" target="_blank" class="max-sm:flex-1 sm:w-2/3 text-center">
                <button class="btn-accent w-full h-full">
                  立即訂購
                </button>
              </a>
              <button @click="openProductDetail('da')" class="btn-secondary max-sm:flex-1 sm:w-1/3"
                :disabled="isLoading">
                {{ isLoading ? '載入中...' : '瞭解更多' }}
              </button>
            </div>
          </div>


        </div>

        <!-- 右側視覺 -->
        <div class="relative">
          <!-- 主要產品展示 -->
          <div
            class="bg-gradient-to-br from-white to-tianhing-light-blue rounded-3xl shadow-2xl p-8 border border-tianhing-blue">
            <div class="text-center space-y-6">
              <!-- 產品圖示 -->
              <div
                class="w-2/3 mx-auto bg-gradient-to-br from-tianhing-blue to-tianhing-dark-blue rounded-full flex items-center justify-center shadow-lg">
                <img src="/img/DA-1001.png" alt="產品圖示">
              </div>

              <!-- 產品資訊 -->
              <div>
                <h3 class="font-cubic text-2xl font-bold text-tianhing-dark-blue mb-2">
                  DA-1001 訂製伴侶
                </h3>
                <p class="text-gray-600 mb-4">
                  次世代有機仿生人技術
                </p>
              </div>

              <!-- 技術規格 -->
              <div class="bg-gray-800 rounded-lg p-4 text-left">
                <div class="font-cubic text-tianhing-light-blue text-xs mb-2">
                  > 產品規格...
                </div>
                <div class="font-cubic text-green-400 text-xs space-y-1">
                  <div>生理性別: 男性</div>
                  <div>可搭載模組數: 25組</div>
                  <div>外觀、性格: 100% 客製化</div>
                </div>
                <div class="font-cubic text-tianhing-light-blue text-xs mt-2">
                  > 狀態: 線上 | 熱銷中...
                </div>
              </div>
            </div>
          </div>

          <!-- 浮動元素 -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-tianhing-blue rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -bottom-4 -left-6 w-16 h-16 bg-tianhing-dark-blue rounded-full opacity-30 animate-pulse"
            style="animation-delay: 1s;"></div>
        </div>
      </div>
    </section>

    <!-- 核心產品預覽 -->
    <section class="section-container py-16">
      <div class="text-center mb-12">
        <h2 class="tech-title text-3xl md:text-4xl mb-4">核心產品線</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          天行科技三大核心產品，打造完整的數位生命生態系統
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 訂製伴侶 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden border border-tianhing-blue transform hover:scale-105 transition-transform duration-300">
          <div class="bg-gradient-to-br from-tianhing-blue to-tianhing-dark-blue p-6">
            <h3 class="font-cubic text-white text-xl font-bold">訂製伴侶</h3>
            <p class="text-tianhing-light-blue text-sm">Digital Companion</p>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              結合仿生人技術與先進AI，創造獨一無二的陪伴體驗
            </p>
            <ul class="space-y-2 text-sm text-gray-500 mb-6">
              <li>• 真實人類身體</li>
              <li>• 完全客製化外觀</li>
              <li>• 可自由選擇個性</li>
            </ul>
            <button @click="openProductDetail('da')" class="w-full btn-tech text-sm">
              瞭解更多
            </button>
          </div>
        </div>

        <!-- 心靈網路 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden border border-tianhing-blue transform hover:scale-105 transition-transform duration-300">
          <div class="bg-gradient-to-br from-tianhing-dark-blue to-gray-700 p-6">
            <h3 class="font-cubic text-white text-xl font-bold">心靈網路</h3>
            <p class="text-tianhing-light-blue text-sm">Mind Network</p>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              革命性的多人意識連接平台，突破傳統社交界限
            </p>
            <ul class="space-y-2 text-sm text-gray-500 mb-6">
              <li>• 直接思維傳輸</li>
              <li>• 情感共感體驗</li>
              <li>• 群體意識協作</li>
            </ul>
            <button @click="openProductDetail('mn')" class="w-full btn-tech text-sm">
              瞭解更多
            </button>
          </div>
        </div>

        <!-- 數位觀落陰 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden border border-tianhing-blue transform hover:scale-105 transition-transform duration-300">
          <div class="bg-gradient-to-br from-gray-700 to-gray-800 p-6">
            <h3 class="font-cubic text-white text-xl font-bold">數位觀落陰</h3>
            <p class="text-tianhing-light-blue text-sm">Digital Séance</p>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4">
              基於大數據重建的意識模擬，讓思念跨越生死界限
            </p>
            <ul class="space-y-2 text-sm text-gray-500 mb-6">
              <li>• 人格重建技術</li>
              <li>• 記憶資料分析</li>
              <li>• 情感撫慰體驗</li>
            </ul>
            <button @click="openProductDetail('ds')" class="w-full btn-tech text-sm">
              瞭解更多
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司理念 -->
    <section class="bg-white">
      <div class="section-container py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="tech-title text-3xl mb-6">天行健，數位不息</h2>
            <div class="space-y-4 text-gray-600">
              <p>
                「承前啟後，數位永生」不僅是我們的使命，更是對人類未來的承諾。
                在2187年，我們相信科技應該服務於人性，而非取代人性。
              </p>
              <p>
                天行科技秉持東方文化中的家族精神，重視傳統價值，
                同時以最前沿的科技創新，為人類創造更美好的數位未來。
              </p>
              <p>
                我們的每一項技術突破，都源自對生命的敬重、
                對情感的珍視、對記憶的保護。
              </p>
            </div>
            <div class="mt-8">
              <router-link to="/about" class="btn-primary">瞭解我們的故事</router-link>
            </div>
          </div>

          <div class="bg-gradient-to-br from-tianhing-light-blue to-white p-8 rounded-2xl">
            <div class="text-center space-y-8">
              <h3 class="font-cubic text-tianhing-dark-blue text-xl font-bold">全球服務網路</h3>

              <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="font-cubic text-2xl font-bold text-tianhing-dark-blue">6</div>
                  <div class="text-sm text-gray-600">國家據點</div>
                </div>
                <div class="text-center">
                  <div class="font-cubic text-2xl font-bold text-tianhing-dark-blue">127</div>
                  <div class="text-sm text-gray-600">年企業歷史</div>
                </div>
                <div class="text-center">
                  <div class="font-cubic text-2xl font-bold text-tianhing-dark-blue">2.4M</div>
                  <div class="text-sm text-gray-600">服務用戶</div>
                </div>
                <div class="text-center">
                  <div class="font-cubic text-2xl font-bold text-tianhing-dark-blue">99.97%</div>
                  <div class="text-sm text-gray-600">系統可靠度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)

// 開啟指定產品的詳細頁面
const openProductDetail = (productId: string) => {
  // 根據產品 ID 決定開啟方式
  const productUrls = {
    'da': './products#da-1001',      // 訂製伴侶
    'mn': './products#mind-network', // 心靈網路
    'ds': './products#digital-seance' // 數位觀落陰
  }

  // 建立完整 URL
  const targetUrl = productUrls[productId as keyof typeof productUrls]

  // 在新視窗中開啟指定產品頁面
  window.open(targetUrl, '_blank', 'noopener,noreferrer')

}
</script>
