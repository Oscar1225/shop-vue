<template>
  <div class="d-flex mx-4 mt-3">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main class="ms-4 flex-grow-1 p-4 bg-white shadow-sm">
      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <span class="h5">我的地址</span>
        <div class="d-flex gap-2">
          <el-button type="default" plain> + 新增超商地址 </el-button>
          <el-button type="primary"> + 新增地址 </el-button>
        </div>
      </div>
      
      <div class="h5 mb-3">地址</div>
        <div class="d-flex flex-column gap-1 mb-4">
          <div class="d-flex align-items-center">
            <span class="fw-bold me-2">王小明</span>
            <span class="text-muted small"> | (+886) 907 587 886</span>
          </div>
          <div class="d-flex flex-column" text size="small">
            <span class="text-muted small">學城路一段1號</span>
            <span class="text-muted small">大樹區, 高雄市, 840</span>
            <div>
              <el-tag type="warning" effect="plain" size="small">預設</el-tag>
            </div>
          </div>
        <div class="d-flex justify-content-end mt-2 right-align">
          <span class="modify-buttons">
            <el-button type="primary" text size="small">編輯</el-button>
            <el-button type="primary" text size="small">刪除</el-button>
          </span>
          <div class="setting">
            <el-button type="info" plain size="small" class="ms-2">設定為預設</el-button>
          </div>
        </div>
        </div>
      <!-- 超商取貨地址 -->
      <div class="h5 mt-4 mb-3">超商取貨地址</div>

      <el-card class="mb-3" shadow="hover">
        <div class="d-flex align-items-center">
          <span class="fw-bold me-2">陳小美</span>
          <span class="text-muted small"> | (+886) 912 379 588</span>
        </div>
        <div class="d-flex flex-column mt-2">
          <span class="fw-bold">大樹實踐 - 智取店</span>
          <span class="text-muted small">高雄市大樹區實踐街102號1樓</span>
          <span class="text-secondary small mt-1">蝦皮店到店 | 自訂到貨日區段（最晚 5 日內取件）</span>
        </div>
        <span class="d-flex justify-content-end mt-2 right-align">
          <div class="modify-buttons">
            <el-button type="primary" text size="small">編輯</el-button>
            <el-button type="primary" text size="small">刪除</el-button>
          </div>
        </span>
      </el-card>
      <el-card class="mb-3" shadow="hover">
        <div class="d-flex align-items-center">
          <span class="fw-bold me-2">陳小美</span>
          <span class="text-muted small"> | (+886) 912 379 588</span>
        </div>
        <div class="d-flex flex-column address-info">
          <span class="fw-bold">萊爾富大樹義大店</span>
          <span class="text-muted small">高雄市大樹區學城路一段１３１號</span>
          <span class="text-muted small">門市店號: 4231</span>
          <span class="text-secondary small mt-1">萊爾富取件</span>
        </div>
        <span class="d-flex justify-content-end mt-2 right-align">
          <div class="modify-buttons">
            <el-button type="primary" text size="small">編輯</el-button>
            <el-button type="primary" text size="small">刪除</el-button>
          </div>
        </span>
      </el-card>
      <el-card class="mb-3" shadow="hover">
        <div class="d-flex align-items-center">
          <span class="fw-bold me-2">陳小美</span>
          <span class="text-muted small"> | (+886) 912 379 588</span>
        </div>
        <div class="d-flex flex-column mt-2">
          <span class="fw-bold">全家大樹義大一店</span>
          <span class="text-muted small">高雄市大樹區學城路一段１號（學生活動中心）</span>
          <span class="text-muted small">門市店號: 007970</span>
          <span class="text-secondary small mt-1">全家取貨</span>
        </div>
        <span class="d-flex justify-content-end mt-2 right-align">
          <div class="modify-buttons">
            <el-button type="primary" text size="small">編輯</el-button>
            <el-button type="primary" text size="small">刪除</el-button>
          </div>
        </span>
      </el-card>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>