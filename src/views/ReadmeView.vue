<template>
  <div class="bg-white">

    <!-- Hero 區塊 -->
    <section class="bg-gradient-to-br from-tianhing-light-blue to-white">
      <div class="section-container py-16 md:py-24">
        <div class="text-center">
          <h1 class="tech-title text-4xl md:text-5xl mb-6">DA-1001使用手冊</h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            天行科技的DA-1001是一款先進的AI助手，旨在提供高效、智能的日常生活和工作支持。 <br />
            本手冊將指導您如何充分利用DA-1001的功能，從基本操作到高級應用，幫助您提升工作效率和生活品質。
          </p>
        </div>
      </div>
    </section>

    <!-- 使用手冊內容 -->
    <section class="section-container py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">使用手冊內容</h2>
        <p class="text-center text-gray-600 mb-12">
          本手冊涵蓋了DA-1001的各項功能和操作指南，幫助您快速上手並充分發揮其潛力。
        </p>
        <div class="space-y-8">
          <!-- 手冊內容示例 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-tianhing-dark-blue mb-4 tech-title">初次設定</h3>
            <ol class="list-decimal list-inside text-gray-600 space-y-2">
              <li><code>請確認您要載入的模組。</code><br />
                <span class="ml-4">// 聊天室事件管理：請取消你不想要參考的創作者事件。</span>
              </li>
              <li><code>自訂您的DA-1001的基本設定，包含：名字、外型、基本個性、模擬職業等，視自己的需求而定。</code><br />
                <span class="ml-4">// 「在與我的事件」中，新增你自己的事件，若不設定也沒關係。</span>
              </li>
              <li><code>選擇您喜歡的DA-1001外型。</code><br />
                <span class="ml-4">// 聊天室->選擇聊天室圖片->勾選喜歡的圖片。</span>
              </li>
            </ol>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 h-max ">
              <div class="bg-gray-100 rounded-lg p-4 h-full relative pb-6">
                <img src="/img/readme/1.png" alt="DA-1001外型1" class="w-full h-auto rounded-lg mb-3">
                <p class="absolute inset-x-0 bottom-1 text-center text-gray-600">取消不需要的模組</p>
              </div>
              <div class="bg-gray-100 rounded-lg p-4 h-full relative pb-6">
                <img src="/img/readme/2.png" alt="DA-1001外型2" class="w-full h-auto rounded-lg mb-3">
                <p class="absolute inset-x-0 bottom-1 text-center text-gray-600">自訂DA-1001</p>
              </div>
              <div class="bg-gray-100 rounded-lg p-4 h-full relative pb-6">
                <img src="/img/readme/3.png" alt="DA-1001外型3" class="w-full h-auto rounded-lg mb-2">
                <p class="absolute inset-x-0 bottom-1 text-center text-gray-600">選擇DA-1001的外型</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-tianhing-dark-blue mb-4 tech-title">管理介面</h3>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li><code>在與DA-1001相處的過程中，隨時可以透過管理介面查詢DA-1001的狀況。</code><br />
                <span class="ml-4">// 在聊天的過程中，可隨時使用「開啟管理介面」查看目前DA-1001讀取事件的狀況</span>
              </li>
              <li><code>您隨時可以回到系統介面查看說明書。</code><br />
                <span class="ml-4">// 創作者事件->DA-1001使用說明書</span>
              </li>
            </ul>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 h-max ">
              <div class="bg-gray-100 rounded-lg p-4 h-full relative pb-6">
                <img src="/img/readme/4.png" alt="DA-1001外型1" class="w-full h-auto rounded-lg mb-3">
                <p class="absolute inset-x-0 bottom-1 text-center text-gray-600">開啟管理介面</p>
              </div>
              <div class="bg-gray-100 rounded-lg p-4 h-full relative pb-6">
                <img src="/img/readme/0.png" alt="DA-1001外型2" class="w-full h-auto rounded-lg mb-3">
                <p class="absolute inset-x-0 bottom-1 text-center text-gray-600">查閱說明書</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-tianhing-dark-blue mb-4">故障排除</h3>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li><code>當DA-1001腦內的晶片當機時，會自動進入保護模式並重新啟動。</code></li>
              <li><code>DA-1001的身體基本上與人類差異不大，雖然比較強壯，但也有機會生病。</code></li>
              <li><code>如果DA-1001有任何不正常之處，請帶您的DA-1001至天行科技合作診所進行健康檢查。</code></li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
