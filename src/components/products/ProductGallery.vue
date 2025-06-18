<template>
  <!-- Gallery Modal -->
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    @click="closeGallery">

    <!-- Desktop Version -->
    <div class="hidden lg:block relative max-w-6xl mx-4 bg-white rounded-2xl overflow-hidden" @click.stop>
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-cubic text-2xl font-bold">DA-1001 訂製伴侶</h2>
            <p class="text-blue-100 text-sm">可選外型預覽</p>
          </div>
          <button @click="closeGallery" class="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Main Gallery - Desktop Layout -->
      <div class="p-6 grid grid-cols-6 gap-6 h-96">
        <!-- Thumbnail Grid - 可滾動 -->
        <div class="overflow-y-auto pr-2 col-span-1">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(image, index) in images" :key="index" @click="currentIndex = index" :class="[
              'bg-gradient-to-br rounded-lg overflow-hidden cursor-pointer transition-all',
              currentIndex === index
                ? 'from-blue-500 to-blue-700 ring-4 ring-blue-300'
                : 'from-gray-200 to-gray-300 hover:from-blue-200 hover:to-blue-300'
            ]">
              <div class="w-full h-full flex items-center justify-center p-2">
                <div class="text-center">
                  <div :class="[
                    'rounded-lg flex items-center justify-center mx-auto mb-2',
                    currentIndex === index ? 'bg-white bg-opacity-20' : 'bg-white bg-opacity-50'
                  ]">
                    <img :src="image.icon" :alt="image.name" class="object-contain h-2/3" />
                  </div>
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
              <img :src="currentImage.icon" :alt="currentImage.name" class="object-contain max-w-full max-h-full" />
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
              <div class="font-cubic text-blue-700 font-medium text-sm">{{ spec.value }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="lg:hidden fixed inset-0 bg-white flex flex-col" @click.stop>
      <!-- Mobile Header -->
      <div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex-shrink-0">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-cubic text-lg font-bold">DA-1001 訂製伴侶</h2>
            <p class="text-blue-100 text-sm">產品展示廊</p>
          </div>
          <button @click="closeGallery" class="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Scrollable Content -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-6">
          <!-- Mobile Image Grid -->
          <div v-for="(image, index) in images" :key="index"
            class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <!-- Image Section -->
            <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-video">
              <div class="w-full h-full flex items-center justify-center p-4">
                <img :src="image.icon" :alt="image.name" class="object-contain max-w-full max-h-full" />
              </div>
              <!-- Badge -->
              <div class="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-cubic">
                {{ index + 1 }} / {{ images.length }}
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
                  <div class="font-cubic text-blue-700 text-sm">{{ spec.value }}</div>
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
    description: '次世代有機仿生人技術，結合最先進的智策AI模型',
    icon: './img/da1001/0.png',
    specs: [
      { label: '預設外表', value: '黑髮黑眼的25歲男性' }
    ]
  },
  {
    id: 'appearance',
    name: '外觀設計',
    title: '100% 客製化外觀',
    description: '從五官到身材，每個細節都能根據您的喜好精確調整',
    icon: './img/da1001/1.png',
    specs: [
      { label: '外觀客製化', value: '100% 自由調整' },
      { label: '大竹塹市林小姐：', value: '每天下班最期待的就是跟家裡黃金獵犬來個暖心抱抱！' },
    ]
  },
  {
    id: 'personality',
    name: '性格設定',
    title: '深度個性化定製',
    description: '根據不同的模組產生不同的性格，讓每個 DA-1001 都獨一無二',
    icon: './img/da1001/2.png',
    specs: [
      { label: '性格類型', value: '11種預設模組 + 自訂，最多可載入25組，每組可填寫2000字' },
      { label: '台北市許小姐：', value: '回家都有人叫我大小姐，還會跳舞給我看的感覺真好。' },
    ]
  },
  {
    id: 'features',
    name: '功能特色',
    title: '智能互動體驗',
    description: '支援多種互動模式，從日常陪伴到專業協助',
    icon: './img/da1001/3.png',
    specs: [
      { label: '知識水準', value: '擁有基本常識和大專院校的教育程度' },
      { label: '新諸羅市陳太太：', value: '有了DA-1001當女兒的穩重的學伴後，她終於不跟那些8+9來往了！' },
    ]
  },
  {
    id: 'g89',
    name: '即時模組讀取',
    title: '隨插隨用載入模組',
    description: '腦內裝載天行晶片，能隨心所欲更改模組，讓 DA-1001 隨你的喜好隨時變換個性',
    icon: './img/da1001/4.png',
    specs: [
      { label: '8+9模組', value: '講話會擁有8+9風格' },
      { label: '新諸羅市張同學：', value: '媽媽還是太天真了，她不在家的時候，我就把DA-1001載入8+9模組。謝謝媽媽送我夢寐以求的8+9男友🥰。' },
    ]
  },
  {
    id: 'p5',
    name: '居家好男人',
    title: 'DA-1001 訂製伴侶，訂製你的理想室友',
    description: '居家好男人模組，專為喜歡乾淨整潔的你設計',
    icon: './img/da1001/5.png',
    specs: [
      { label: '新打狗市童小姐：', value: '能夠有個好室友，每天幫我煮飯、打掃真是不錯，雖然有點潔癖，不過個性好相處。' },
    ]
  },
  {
    id: 'bf',
    name: '壞壞惹人愛',
    title: '缺男友？DA-1001 訂製伴侶，訂製你的理想男友',
    description: '壞壞惹人愛模組，專為喜歡刺激的你設計',
    icon: './img/da1001/6.png',
    specs: [
      { label: '花蓮市錢小姐：', value: '自從有了DA-1001，我每天都下不了車。🥵' },
    ]
  },
  {
    id: 'childhood',
    name: '童年回憶',
    title: '想念那段回不去的純真的時光？',
    description: '鄰家男孩也難不倒 DA-1001，快來訂製你的理想鄰家男孩',
    icon: './img/da1001/7.png',
    specs: [
      { label: '新阿猴市莊小姐：', value: '忘不了的青梅竹馬，彷彿回到我的身邊了。' },
    ]
  },
  {
    id: 'student',
    name: '學生時光',
    title: '那些年我們一起追的學長',
    description: '學生時光模組，專為喜歡校園生活的你設計',
    icon: './img/da1001/8.png',
    specs: [
      { label: '南投市曾小姐：', value: '趙曉涵，雖然當年學長選了你，你也別太得意。畢竟現在我有了DA-1001，但學長他已經禿頭了！' },
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
