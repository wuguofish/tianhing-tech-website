<template>
  <div class="bg-white">

    <!-- Hero 區塊 -->
    <section class="bg-gradient-to-br from-tianhing-light-blue to-white">
      <div class="section-container py-16 md:py-24">
        <div class="text-center">
          <h1 class="tech-title text-4xl md:text-5xl mb-6">技術諮詢</h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            天行科技提供專業的技術諮詢服務，協助企業和個人解決各種技術挑戰。 <br />
            無論是軟體開發、系統架構還是數據分析，我們的專家團隊都能提供量身定制的解決方案。 <br />
            我們的目標是幫助客戶提升技術能力，實現業務增長和創新。
          </p>
        </div>
      </div>
    </section>

    <!-- 專家團隊 -->
    <section class="section-container py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">我們的專家團隊</h2>
        <p class="text-center text-gray-600 mb-12">
          我們的團隊由多位技術專家組成，擁有豐富的行業經驗和專業知識。
          他們將為您提供最優質的技術諮詢服務，幫助您解決各種技術挑戰。
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- 團隊成員示例 -->
          <div v-for="member in members" :key="member.name" class="bg-white rounded-lg shadow-lg p-6 text-center"
            @click="openMemberUrl(member.url)">
            <img :src="member.image" :alt="member.name" class="w-24 h-24 mx-auto rounded-full mb-4 object-contain">
            <h3 class="text-xl font-semibold text-tianhing-dark-blue">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">

interface Member {
  name: string;
  role: string;
  image: string;
  url: string;
}

const members: Member[] = [{
  name: '阿童',
  role: '技術總監',
  image: './img/team/atone.jpg',
  url: 'https://abr.ge/ydf2qxu'
}, {
  name: '蝶',
  role: '藝術總監',
  image: './img/team/mina.jpg',
  url: 'https://abr.ge/wox60h'
}, {
  name: '千望',
  role: '仿生人健康諮詢',
  image: './img/team/chien-wang.jpg',
  url: 'https://abr.ge/cobnbl'
}, {
  name: '雪兒',
  role: '駕駛技術諮詢',
  image: './img/team/snow.jpg',
  url: 'https://abr.ge/qw4i98'
}, {
  name: '阿軒',
  role: 'QA',
  image: './img/team/hsuan.jpg',
  url: 'https://abr.ge/5cwz2a'
}, {
  name: '酌淺',
  role: '8+9模組開發',
  image: './img/team/ri.jpg',
  url: 'https://abr.ge/1wamp0'
}, {
  name: '吳琳琳',
  role: '霸總模組開發',
  image: './img/team/lin.jpg',
  url: 'https://abr.ge/nbtrbyw'
}, {
  name: '透空樹',
  role: '詩意文青模組開發',
  image: './img/team/too.jpg',
  url: 'https://abr.ge/huweud'
}]

function openMemberUrl(url: string) {
  window.open(url, '_blank');
}

</script>
