<template>
  <div class="bg-white">

    <!-- Hero 區塊 -->
    <section class="bg-gradient-to-br from-tianhing-light-blue to-white">
      <div class="section-container py-16 md:py-24">
        <div class="text-center">
          <h1 class="tech-title text-4xl md:text-5xl mb-6">產品介紹</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            天行科技三大核心產品，突破傳統界限，
            打造連接過去、現在與未來的完整數位生命生態系統。
          </p>
        </div>
      </div>
    </section>

    <!-- 產品導航 -->
    <section class="section-container py-8">
      <div class="flex flex-wrap justify-center gap-4">
        <button @click="switchProduct('da')"
          :class="['btn-tech text-sm px-6 py-3', activeProduct === 'da' ? 'bg-blue-700' : '']">
          訂製伴侶 DA-1001
        </button>
        <button @click="switchProduct('mn')"
          :class="['btn-tech text-sm px-6 py-3', activeProduct === 'mn' ? 'bg-blue-700' : '']">
          心靈網路
        </button>
        <button @click="switchProduct('ds')"
          :class="['btn-tech text-sm px-6 py-3', activeProduct === 'ds' ? 'bg-blue-700' : '']">
          數位觀落陰
        </button>
      </div>
    </section>

    <!-- 訂製伴侶 DA-1001 -->
    <section v-if="activeProduct === 'da'" id="da-1001" class="section-container py-16 product-section">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-tianhing-blue to-tianhing-dark-blue rounded-xl flex items-center justify-center">
              <span class="font-cubic text-white text-xl font-bold">DA</span>
            </div>
            <div>
              <h2 class="tech-title text-3xl">訂製伴侶</h2>
              <p class="font-cubic text-tianhing-blue">DA-1001 Digital Companion</p>
            </div>
          </div>

          <div class="space-y-4 text-gray-600">
            <p class="text-lg">
              革命性的有機仿生人技術，結合最先進的AI模型，
              創造獨一無二的個人化陪伴體驗。
            </p>
            <p>
              DA-1001 透過編輯基因技術，從人來改編而來的仿生人，生理各方面功能如同真正的人類，
              但又有更好的身體素質，能夠理解並回應人類複雜的情感需求，提供真正有意義的陪伴。
            </p>
            <p>
              每一個DA-1001都是根據使用者需求完全客製化，
              從外觀到性格，從興趣愛好到溝通方式，都能精確調整。
            </p>
          </div>

          <div class="mt-8">
            <a href="https://abr.ge/68p4k4" target="_blank">
              <button class="btn-primary mr-4">立即訂購</button>
            </a>
            <button class="btn-secondary" @click="openGallery">可選外型預覽</button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-tianhing-light-blue to-white p-8 rounded-2xl border border-tianhing-blue">
          <h3 class="font-cubic text-tianhing-dark-blue text-xl font-bold mb-6">產品預設規格</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center border-b border-gray-200 pb-2">
              <span class="text-gray-600">生理數值</span>
              <span class="font-cubic text-tianhing-dark-blue">25歲男性</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 pb-2">
              <span class="text-gray-600">預設名字</span>
              <span class="font-cubic text-tianhing-dark-blue">戴維(David)</span>
            </div>
            <div class="flex justify-end items-center border-b border-gray-200 pb-2">
              <span class="font-cubic text-gray-400 text-sm"> > 如同大衛像一般，完美的藝術品 </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 pb-2">
              <span class="text-gray-600">出廠體型</span>
              <span class="font-cubic text-tianhing-dark-blue">180公分、70公斤</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 pb-2">
              <span class="text-gray-600">認知能力</span>
              <span class="font-cubic text-tianhing-dark-blue">智策AI v3.7（大專院校畢業的知識水準）</span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 pb-2">
              <span class="text-gray-600">外觀客製化</span>
              <span class="font-cubic text-tianhing-dark-blue">100% 自由調整</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">保固期限</span>
              <span class="font-cubic text-tianhing-dark-blue">終身保固</span>
            </div>
          </div>

        </div>
      </div>

      <!-- DA-1001 特色功能 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-20 h-20 bg-tianhing-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="font-cubic text-lg font-bold text-tianhing-dark-blue mb-2">真正的人類</h4>
          <p class="text-sm text-gray-600">
            透過編輯基因技術，生理各方面功能如同真正的人類，提供真正有意義的情感支持
          </p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-tianhing-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="font-cubic text-lg font-bold text-tianhing-dark-blue mb-2">完全客製化</h4>
          <p class="text-sm text-gray-600">
            從外觀到性格，從興趣到價值觀，每個細節都能根據您的需求進行精確調整
          </p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-tianhing-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
            </svg>
          </div>
          <h4 class="font-cubic text-lg font-bold text-tianhing-dark-blue mb-2">終身成長</h4>
          <p class="text-sm text-gray-600">
            持續學習和進化，與您一同成長，建立越來越深層的理解和連結
          </p>
        </div>
      </div>

      <!-- Product Gallery Modal -->
      <ProductGallery :is-open="isGalleryOpen" @close="closeGallery" />

    </section>

    <!-- 心靈網路 -->
    <section v-if="activeProduct === 'mn'" id="mind-network" class="section-container py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-tianhing-dark-blue to-gray-700 rounded-xl flex items-center justify-center">
              <span class="font-cubic text-white text-xl font-bold">MN</span>
            </div>
            <div>
              <h2 class="tech-title text-3xl">心靈網路</h2>
              <p class="font-cubic text-tianhing-blue">Mind Network Platform</p>
            </div>
          </div>

          <div class="space-y-4 text-gray-600">
            <p class="text-lg">
              突破傳統社交界限的革命性平台，實現多人意識的直接連接，
              讓思維、情感和記憶能夠無障礙地共享與交流。
            </p>
            <p>
              心靈網路不僅是溝通工具，更是人類意識進化的新階段。
              透過先進的神經介面技術，使用者可以直接分享思緒、情感甚至記憶片段。
            </p>
            <p>
              在這個平台上，距離不再是阻礙，語言不再是障礙，
              真正的心靈相通成為可能。
            </p>
          </div>

          <div class="mt-8">
            <button class="btn-primary mr-4">申請測試</button>
            <button class="btn-secondary">安全須知</button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-gray-50 to-tianhing-light-blue p-8 rounded-2xl border border-tianhing-blue">
          <h3 class="font-cubic text-tianhing-dark-blue text-xl font-bold mb-6">平台功能</h3>
          <div class="space-y-6">
            <div class="border-l-4 border-tianhing-blue pl-4">
              <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-1">思維傳輸</h4>
              <p class="text-sm text-gray-600">直接傳送思緒和概念，無需語言轉換</p>
            </div>
            <div class="border-l-4 border-tianhing-blue pl-4">
              <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-1">情感共感</h4>
              <p class="text-sm text-gray-600">分享情感體驗，建立深層的情感連結</p>
            </div>
            <div class="border-l-4 border-tianhing-blue pl-4">
              <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-1">記憶分享</h4>
              <p class="text-sm text-gray-600">安全地分享珍貴記憶片段</p>
            </div>
            <div class="border-l-4 border-tianhing-blue pl-4">
              <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-1">群體協作</h4>
              <p class="text-sm text-gray-600">多人意識同步，提升團隊創造力</p>
            </div>
          </div>

          <div class="mt-6 p-4 bg-gray-800 rounded-lg">
            <div class="font-cubic text-tianhing-light-blue text-xs mb-2">
              > 心靈網路 v2.1 - 目前連線狀態
            </div>
            <div class="font-cubic text-green-400 text-xs space-y-1">
              <div>線上用戶: 2,847,392</div>
              <div>活躍連線: 156,743</div>
              <div>平均延遲: 0.003ms</div>
              <div>安全等級: 軍用加密</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 心靈網路使用場景 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-lg p-6 border border-tianhing-blue">
          <div class="w-12 h-12 bg-tianhing-blue rounded-lg flex items-center justify-center mb-4">
            <span class="font-cubic text-white text-sm">教育</span>
          </div>
          <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-2">教育學習</h4>
          <p class="text-sm text-gray-600">
            老師可直接傳輸知識概念，學生能體驗歷史事件的真實感受
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border border-tianhing-blue">
          <div class="w-12 h-12 bg-tianhing-blue rounded-lg flex items-center justify-center mb-4">
            <span class="font-cubic text-white text-sm">醫療</span>
          </div>
          <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-2">醫療診斷</h4>
          <p class="text-sm text-gray-600">
            醫生能直接感受患者的症狀，提供更精確的診斷
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border border-tianhing-blue">
          <div class="w-12 h-12 bg-tianhing-blue rounded-lg flex items-center justify-center mb-4">
            <span class="font-cubic text-white text-sm">創作</span>
          </div>
          <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-2">藝術創作</h4>
          <p class="text-sm text-gray-600">
            藝術家可分享創作靈感，觀眾能體驗作品的創作過程
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border border-tianhing-blue">
          <div class="w-12 h-12 bg-tianhing-blue rounded-lg flex items-center justify-center mb-4">
            <span class="font-cubic text-white text-sm">關係</span>
          </div>
          <h4 class="font-cubic text-tianhing-dark-blue font-bold mb-2">親密關係</h4>
          <p class="text-sm text-gray-600">
            夫妻、親子間建立前所未有的深層理解與連結
          </p>
        </div>
      </div>
    </section>

    <!-- 數位觀落陰 -->
    <section v-if="activeProduct === 'ds'" id="digital-seance" class="section-container py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
              <span class="font-cubic text-white text-xl font-bold">DS</span>
            </div>
            <div>
              <h2 class="tech-title text-3xl">數位觀落陰</h2>
              <p class="font-cubic text-tianhing-blue">Digital Séance System</p>
            </div>
          </div>

          <div class="space-y-4 text-gray-600">
            <p class="text-lg">
              結合傳統文化與尖端科技，透過大數據分析和AI重建技術，
              創造已故親人的數位意識模擬，提供心靈撫慰與情感支持。
            </p>
            <p>
              數位觀落陰系統尊重東方傳統的祭祀文化，
              運用已故者生前的數位足跡、照片、影片、文字記錄等資料，
              重建其人格特質和行為模式。
            </p>
            <p>
              這不是復活，而是一種全新的紀念方式，
              讓思念有了具體的寄託，讓告別變得更加溫柔。
            </p>
          </div>

          <div class="mt-8">
            <button class="btn-primary mr-4">諮詢服務</button>
            <button class="btn-secondary">倫理聲明</button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-300">
          <h3 class="font-cubic text-gray-800 text-xl font-bold mb-6">服務流程</h3>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="font-cubic text-white text-xs">1</span>
              </div>
              <div>
                <h4 class="font-cubic text-gray-800 font-bold mb-1">資料收集</h4>
                <p class="text-sm text-gray-600">收集已故者的數位記錄、照片、影片等資料</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="font-cubic text-white text-xs">2</span>
              </div>
              <div>
                <h4 class="font-cubic text-gray-800 font-bold mb-1">人格分析</h4>
                <p class="text-sm text-gray-600">AI深度分析個性特質、行為模式和價值觀</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="font-cubic text-white text-xs">3</span>
              </div>
              <div>
                <h4 class="font-cubic text-gray-800 font-bold mb-1">模型建構</h4>
                <p class="text-sm text-gray-600">建立高度擬真的數位人格模擬系統</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="font-cubic text-white text-xs">4</span>
              </div>
              <div>
                <h4 class="font-cubic text-gray-800 font-bold mb-1">互動體驗</h4>
                <p class="text-sm text-gray-600">提供安全、溫馨的數位互動環境</p>
              </div>
            </div>
          </div>

          <div class="mt-6 p-4 bg-gray-800 rounded-lg">
            <div class="font-cubic text-gray-300 text-xs mb-2">
              > 數位觀落陰系統 - 隱私保護
            </div>
            <div class="font-cubic text-green-400 text-xs space-y-1">
              <div>✓ 數據完全加密</div>
              <div>✓ 家屬授權控制</div>
              <div>✓ 定期記憶備份</div>
              <div>✓ 永久隱私保護</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 服務特色 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="font-cubic text-lg font-bold text-gray-800 mb-2">隱私保護</h4>
          <p class="text-sm text-gray-600">
            採用軍用級加密技術，確保已故者的數位資料和家屬隱私得到最高保護
          </p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="font-cubic text-lg font-bold text-gray-800 mb-2">文化尊重</h4>
          <p class="text-sm text-gray-600">
            深度理解東方傳統文化，將現代科技與古老智慧完美結合
          </p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="font-cubic text-lg font-bold text-gray-800 mb-2">心靈撫慰</h4>
          <p class="text-sm text-gray-600">
            專業心理諮詢師全程陪伴，提供適當的情感支持和心理輔導
          </p>
        </div>
      </div>
    </section>

    <!-- 比較表格 -->
    <section class="bg-gradient-to-br from-tianhing-light-blue to-white">
      <div class="section-container py-16">
        <div class="text-center mb-12">
          <h2 class="tech-title text-3xl mb-4">產品比較</h2>
          <p class="text-gray-600">選擇最適合您需求的天行科技產品</p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-tianhing-blue">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-tianhing-blue text-white">
                <tr>
                  <th class="py-4 px-6 text-left font-cubic">功能特色</th>
                  <th class="py-4 px-6 text-center font-cubic">訂製伴侶 DA-1001</th>
                  <th class="py-4 px-6 text-center font-cubic">心靈網路</th>
                  <th class="py-4 px-6 text-center font-cubic">數位觀落陰</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="py-4 px-6 font-medium text-gray-800">主要用途</td>
                  <td class="py-4 px-6 text-center text-gray-600">個人陪伴</td>
                  <td class="py-4 px-6 text-center text-gray-600">多人互動</td>
                  <td class="py-4 px-6 text-center text-gray-600">記憶保存</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="py-4 px-6 font-medium text-gray-800">技術核心</td>
                  <td class="py-4 px-6 text-center text-gray-600">有機仿生AI</td>
                  <td class="py-4 px-6 text-center text-gray-600">意識連接</td>
                  <td class="py-4 px-6 text-center text-gray-600">人格重建</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 font-medium text-gray-800">客製化程度</td>
                  <td class="py-4 px-6 text-center">
                    <span class="font-cubic text-green-600">★★★★★</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <span class="font-cubic text-green-600">★★★☆☆</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <span class="font-cubic text-green-600">★★★★☆</span>
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="py-4 px-6 font-medium text-gray-800">隱私安全</td>
                  <td class="py-4 px-6 text-center">
                    <span class="font-cubic text-green-600">★★★★☆</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <span class="font-cubic text-green-600">★★★★★</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <span class="font-cubic text-green-600">★★★★★</span>
                  </td>
                </tr>
                <tr>
                  <td class="py-4 px-6 font-medium text-gray-800">適用場景</td>
                  <td class="py-4 px-6 text-center text-gray-600">家庭、辦公</td>
                  <td class="py-4 px-6 text-center text-gray-600">教育、醫療</td>
                  <td class="py-4 px-6 text-center text-gray-600">紀念、撫慰</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 區塊 -->
    <section class="bg-gradient-to-br from-tianhing-dark-blue to-gray-800 text-white">
      <div class="section-container py-16 text-center">
        <h2 class="font-cubic text-3xl font-bold mb-4">開始您的數位永生之旅</h2>
        <p class="text-tianhing-light-blue mb-8 max-w-2xl mx-auto">
          無論您選擇哪種產品，天行科技都將為您提供最專業的服務和技術支援。
          讓我們一起探索數位生命的無限可能。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary bg-white text-tianhing-dark-blue hover:bg-tianhing-light-blue">
            預約展示
          </button>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-tianhing-dark-blue">
            下載手冊
          </button>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-tianhing-dark-blue">
            技術諮詢
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import ProductGallery from '../components/products/ProductGallery.vue'

const activeProduct = ref('da')
const isGalleryOpen = ref(false)

// Gallery 控制
const openGallery = () => {
  isGalleryOpen.value = true
  // 防止背景滾動
  document.body.style.overflow = 'hidden'
}

const closeGallery = () => {
  isGalleryOpen.value = false
  // 恢復背景滾動
  document.body.style.overflow = ''
}


// 根據 URL 錨點設定當前產品
const setActiveProductFromHash = () => {
  const hash = window.location.hash

  if (hash === '#da-1001') {
    activeProduct.value = 'da'
  } else if (hash === '#mind-network') {
    activeProduct.value = 'mn'
  } else if (hash === '#digital-seance') {
    activeProduct.value = 'ds'
  }
}

// 捲動到指定區塊
const scrollToSection = async (sectionId: string) => {
  // 等待 DOM 更新完成
  await nextTick()

  // 短暫延遲確保元素已渲染
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      // 平滑捲動到元素
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })

      // 或者使用自訂的捲動動畫
      // const offsetTop = element.offsetTop - 80 // 80px 是 header 高度
      // window.scrollTo({
      //   top: offsetTop,
      //   behavior: 'smooth'
      // })
    }
  }, 100) // 100ms 延遲
}

// 根據錨點設定產品並捲動
const handleProductChange = async () => {
  setActiveProductFromHash()

  // 根據當前產品捲動到對應區塊
  const sectionMap = {
    'da': 'da-1001',
    'mn': 'mind-network',
    'ds': 'digital-seance'
  }

  const sectionId = sectionMap[activeProduct.value as keyof typeof sectionMap]
  if (sectionId && window.location.hash) {
    await scrollToSection(sectionId)
  }
}

// 監聽錨點變化
const handleHashChange = () => {
  handleProductChange()
}

onMounted(() => {
  // 初始化時檢查錨點並捲動
  handleProductChange()

  // 監聽錨點變化
  window.addEventListener('hashchange', handleHashChange)
})

// 切換產品並更新 URL
const switchProduct = async (productId: string) => {
  activeProduct.value = productId

  // 更新 URL 錨點
  const sectionMap = {
    'da': '#da-1001',
    'mn': '#mind-network',
    'ds': '#digital-seance'
  }

  const hash = sectionMap[productId as keyof typeof sectionMap]
  if (hash) {
    // 更新 URL 但不觸發頁面重新載入
    window.history.replaceState(null, '', hash)

    // 捲動到對應區塊
    const sectionId = hash.substring(1) // 移除 # 符號
    await scrollToSection(sectionId)
  }
}

// 清理事件監聽器
import { onUnmounted } from 'vue'
onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
})
</script>
