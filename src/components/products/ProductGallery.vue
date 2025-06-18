<template>
  <!-- Gallery Modal -->
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    @click="closeGallery">
    <!-- Modal Content -->
    <div class="relative max-w-6xl mx-4 bg-white rounded-2xl overflow-hidden" @click.stop>
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-cubic text-2xl font-bold">DA-1001 訂製伴侶</h2>
            <p class="text-blue-100 text-sm">產品展示廊</p>
          </div>
          <button @click="closeGallery" class="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Main Gallery -->
      <div class="p-6">
        <!-- Main Image Display -->
        <div class="mb-6">
          <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden aspect-video">
            <!-- 主要圖片區域 -->
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center">
                <div
                  class="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="font-cubic text-white text-4xl font-bold">DA</span>
                </div>
                <h3 class="font-cubic text-2xl text-gray-800 mb-2">{{ currentImage.title }}</h3>
                <p class="text-gray-600">{{ currentImage.description }}</p>
              </div>
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

        <!-- Thumbnail Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div v-for="(image, index) in images" :key="index" @click="currentIndex = index" :class="[
            'relative bg-gradient-to-br rounded-lg overflow-hidden cursor-pointer transition-all aspect-square',
            currentIndex === index
              ? 'from-blue-500 to-blue-700 ring-4 ring-blue-300'
              : 'from-gray-200 to-gray-300 hover:from-blue-200 hover:to-blue-300'
          ]">
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center">
                <div :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2',
                  currentIndex === index ? 'bg-white bg-opacity-20' : 'bg-white bg-opacity-50'
                ]">
                  <span :class="[
                    'font-cubic text-sm font-bold',
                    currentIndex === index ? 'text-white' : 'text-gray-700'
                  ]">
                    {{ image.icon }}
                  </span>
                </div>
                <p :class="[
                  'text-xs font-medium',
                  currentIndex === index ? 'text-white' : 'text-gray-600'
                ]">
                  {{ image.name }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Specs -->
        <div class="bg-gray-50 rounded-xl p-6">
          <h4 class="font-cubic text-lg font-bold text-gray-800 mb-4">技術規格</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="spec in currentImage.specs" :key="spec.label"
              class="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
              <span class="text-gray-600">{{ spec.label }}</span>
              <span class="font-cubic text-blue-700 font-medium">{{ spec.value }}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-6">
          <button class="btn-primary flex-1">
            立即訂製 DA-1001
          </button>
          <button class="btn-secondary flex-1">
            下載技術手冊
          </button>
          <button @click="closeGallery" class="btn-tech flex-1">
            關閉展示廊
          </button>
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
    id: 'overview',
    name: '總覽',
    title: 'DA-1001 訂製伴侶',
    description: '次世代有機仿生人技術，結合最先進的情感AI模型',
    icon: 'DA',
    specs: [
      { label: '處理器', value: '量子神經網路 QNN-2187' },
      { label: '記憶容量', value: '2.4PB 全息記憶體' },
      { label: '情感模組', value: 'EmotiCore v3.7' },
      { label: '生物擬真度', value: '99.8%' }
    ]
  },
  {
    id: 'appearance',
    name: '外觀設計',
    title: '100% 客製化外觀',
    description: '從五官到身材，每個細節都能根據您的喜好精確調整',
    icon: '👤',
    specs: [
      { label: '外觀客製化', value: '100% 自由調整' },
      { label: '材質', value: '生物仿真皮膚' },
      { label: '身高範圍', value: '150-190cm' },
      { label: '體重範圍', value: '45-90kg' }
    ]
  },
  {
    id: 'personality',
    name: '性格設定',
    title: '深度個性化定製',
    description: '16種基礎性格類型，超過1000種細節特質可供調整',
    icon: '🧠',
    specs: [
      { label: '性格類型', value: '16種基礎 + 自訂' },
      { label: '學習能力', value: '自適應深度學習' },
      { label: '情感反應', value: 'EmotiCore v3.7' },
      { label: '記憶深度', value: '永久記憶' }
    ]
  },
  {
    id: 'features',
    name: '功能特色',
    title: '智能互動體驗',
    description: '支援多種互動模式，從日常陪伴到專業協助',
    icon: '⚡',
    specs: [
      { label: '語言支援', value: '128種語言' },
      { label: '技能模組', value: '500+ 可選技能' },
      { label: '更新頻率', value: '每月OTA更新' },
      { label: '保固期限', value: '終身保固' }
    ]
  }
]

const currentImage = computed(() => images[currentIndex.value])

const closeGallery = () => {
  emit('close')
}

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
    case 'Escape':
      closeGallery()
      break
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
