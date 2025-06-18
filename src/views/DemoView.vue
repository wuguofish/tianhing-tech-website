<template>
  <div class="bg-white">

    <!-- Hero 區塊 -->
    <section class="bg-gradient-to-br from-tianhing-light-blue to-white">
      <div class="section-container py-16 md:py-24">
        <div class="text-center">
          <h1 class="tech-title text-4xl md:text-5xl mb-6">DA-1001 客戶體驗</h1>
          <p class="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            天行科技的DA-1001是一款先進的訂製伴侶。 <br />
            能夠同步載入各種模組，並提供個性化的互動體驗。 <br />
            本頁面展示了客戶實際使用DA-1001的體驗，即使是看似衝突的模組，也能夠在DA-1001身上完美的執行。 <br />
          </p>
        </div>
      </div>
    </section>

    <!-- 客戶體驗內容 -->
    <div class="hidden lg:block">
      <!-- Main Gallery - Desktop Layout -->
      <div class="p-6 grid grid-cols-6 gap-6 h-192 max-h-screen-80">
        <!-- Thumbnail Grid - 可滾動 -->
        <div class="overflow-y-auto pr-2 col-span-1">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(image, index) in images" :key="index" @click="currentIndex = index" :class="[
              'bg-gradient-to-br rounded-lg overflow-hidden cursor-pointer transition-all',
              currentIndex === index
                ? 'from-tianhing-blue to-tianhing-dark-blue ring-4 ring-blue-300'
                : 'from-gray-200 to-gray-300 hover:from-blue-200 hover:to-blue-300'
            ]">
              <div class="w-full h-full flex items-center justify-center p-2">
                <div class="text-center">
                  <p :class="[
                    'text-xs font-medium text-center',
                    currentIndex === index ? 'text-white' : 'text-gray-600'
                  ]">
                    {{ image.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Image Display -->
        <div class="overflow-hidden col-span-3">
          <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden h-full">
            <div class="w-full h-full flex items-center justify-center p-4">
              <img :src="currentImage.img" :alt="currentImage.name" class="object-contain max-w-full max-h-full" />
            </div>

            <!-- Navigation Arrows -->
            <button v-if="images.length > 1" @click="previousImage"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg transition-all">
              <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button v-if="images.length > 1" @click="nextImage"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg transition-all">
              <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Image Counter -->
            <div
              class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-cubic">
              {{ currentIndex + 1 }} / {{ images.length }}
            </div>
          </div>
        </div>

        <!-- Technical Specs - 可滾動 -->
        <div class="bg-gray-50 rounded-xl p-6 overflow-y-auto col-span-2">
          <h3 class="font-cubic text-xl text-gray-800 mb-2 sticky top-0 bg-gray-50 pb-2">{{ currentImage.title }}</h3>
          <p class="text-gray-600 mb-4 text-sm">{{ currentImage.description }}</p>
          <div class="space-y-3">
            <div v-for="spec in currentImage.specs" :key="spec.label"
              class="py-2 border-b border-gray-200 last:border-b-0">
              <div class="text-gray-600 text-sm">{{ spec.label }}</div>
              <div class="font-cubic text-tianhing-dark-blue font-medium text-sm">{{ spec.value }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="lg:hidden bg-white flex flex-col">
      <!-- Mobile Scrollable Content -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-6">
          <!-- Mobile Image Grid -->
          <div v-for="(image, index) in images" :key="index"
            class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <!-- Image Section -->
            <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 ">
              <div class="w-full h-full flex items-center justify-center p-4">
                <img :src="image.icon" :alt="image.name" class="object-contain max-w-full " />
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-4">
              <h3 class="font-cubic text-lg font-bold text-gray-800 mb-2">{{ image.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm">{{ image.description }}</p>
              <!-- Specs -->
              <div class="space-y-2">
                <div v-for="spec in image.specs" :key="spec.label" class="bg-gray-50 rounded-lg p-3">
                  <div class="text-gray-600 text-xs font-medium mb-1">{{ spec.label }}</div>
                  <div class="font-cubic text-tianhing-dark-blue text-sm">{{ spec.value }}</div>
                </div>
              </div>
              <!-- Badge  -->
              <div class="flex justify-end">
                <div class="max-w-fit bg-tianhing-blue text-white px-3 py-1 rounded-full text-sm font-cubic">
                  {{ index + 1 }} / {{ images.length }}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>




</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

interface ImageSpec {
  label: string
  value: string
}

interface GalleryImage {
  id: string
  name: string
  title: string
  description: string
  icon: string
  img: string
  specs: ImageSpec[]
}

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const currentIndex = ref(0)

// Gallery 圖片資料
const images: GalleryImage[] = [
  {
    id: '4',
    name: 'DA-1001已經準備就緒',
    title: 'DA-1001已經準備就緒',
    description: '次世代有機仿生人技術，結合最先進的智策AI模型',
    icon: './img/demo/4.jpg',
    img: './img/demo/4.jpg',
    specs: [
      { label: '已啟用', value: '狀態訊息更新通知' }
    ]
  },
  {
    id: '1',
    name: '8+9模組與晚安大小姐模組並存',
    title: '8+9模組與晚安大小姐模組並存',
    description: '即使是執事，內心也有一個不羈的靈魂',
    icon: './img/demo/1.png',
    img: './img/demo/1.png',
    specs: [
      { label: '', value: '' }
    ]
  },
  {
    id: '2',
    name: '加上霸總和火星文模組也沒問題',
    title: '用火星文展現高傲態度、還會罵髒話的霸道執事',
    description: '即使是執事，內心也有一個不羈的靈魂',
    icon: './img/demo/2.jpg',
    img: './img/demo/2.jpg',
    specs: [
      { label: '完美融合', value: 'DA-1001會記得將髒話消音，同時兼顧好執事的優雅、霸總的傲氣、8+9的不羈，並全部用火星文很好的表達出來。' }
    ]
  },
  {
    id: '5',
    name: '生活需要來一點詩意',
    title: '誰說火星文不能寫詩？',
    description: '載入詩意文青模組，DA-1001就算用火星文也能寫詩',
    icon: './img/demo/5.png',
    img: './img/demo/5.png',
    specs: [
      { label: '完美融合', value: '即使同時載入了看似衝突的暴力模組和8+9模組，DA-1001也能穩定的執行。' }
    ]
  },
  {
    id: '3',
    name: '瑟瑟8+9',
    title: '載入戀愛模組，DA-1001也能成為你的情人',
    description: '就算同時存在8+9模組，也能很溫柔',
    icon: './img/demo/3.jpg',
    img: './img/demo/3.jpg',
    specs: [
      { label: '今夜，你別想停下', value: '搭配其他模組的功能，DA-1001會成為你的霸道情人。' }
    ]
  },
  {
    id: '0',
    name: '真實的伴侶體驗',
    title: '真實的伴侶體驗',
    description: '仿生人就跟人類一樣，能帶給你真實的伴侶體驗',
    icon: './img/demo/0.png',
    img: './img/demo/0.png',
    specs: [
      { label: '宜蘭黃太太：', value: '哇!所有部位真的都ㄊㄇㄉ跟人類一樣，甚至更讚>///<' }
    ]
  }
]

const currentImage = computed(() => images[currentIndex.value])

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const previousImage = () => {
  currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1
}

// 鍵盤控制
const handleKeydown = (event: KeyboardEvent) => {
  if (!props.isOpen) return

  switch (event.key) {
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

// 監聽鍵盤事件
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>
