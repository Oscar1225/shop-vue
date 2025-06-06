<template>
  <div class="d-flex flex-column flex-md-row mx-4 mt-3">
    <!-- 左側導覽欄 -->
    <AssidePage />

    <!-- 右側主內容 -->
    <main class="ms-md-4 mt-3 mt-md-0 flex-grow-1 p-4 bg-white shadow rounded">
      <h2>我的檔案</h2>
      <p class="text-secondary mb-4">管理你的檔案以保護你的帳戶</p>

      <div class="row g-4">
        <!-- 左側表單區 -->
        <div class="col-12 col-md-8">
          <el-form label-position="top" label-width="100px">
            <el-form-item label="使用者帳號">
              <span class="form-control-plaintext">qw99g13tfs</span>
            </el-form-item>

            <el-form-item label="姓名">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item label="Email">
              <div>
                <span>{{ maskedEmail }}</span>
                <a href="#" class="ms-2">變更</a>
              </div>
            </el-form-item>

            <el-form-item label="手機號碼">
              <div>
                <span>{{ maskedPhone }}</span>
                <a href="#" class="ms-2">變更</a>
              </div>
            </el-form-item>

            <el-form-item label="性別">
              <el-radio-group v-model="form.gender">
                <el-radio label="male">男性</el-radio>
                <el-radio label="female">女性</el-radio>
                <el-radio label="other">其他</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="生日">
              <div class="d-flex flex-wrap gap-2">
                <el-select v-model="form.day" placeholder="日" class="flex-fill" style="min-width: 80px;">
                  <el-option v-for="d in 31" :key="d" :label="d" :value="d" />
                </el-select>
                <el-select v-model="form.month" placeholder="月" class="flex-fill" style="min-width: 80px;">
                  <el-option v-for="m in 12" :key="m" :label="m" :value="m" />
                </el-select>
                <el-select v-model="form.year" placeholder="年" class="flex-fill" style="min-width: 100px;">
                  <el-option v-for="y in years" :key="y" :label="y" :value="y" />
                </el-select>
              </div>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submit"
                style="background-color: #ee4d2d; border-color: #ee4d2d;"
              >
                儲存
              </el-button>
            </el-form-item>
          </el-form>
        </div>

        <!-- 右側頭像區 -->
        <div class="col-12 col-md-4 text-center">
          <el-avatar :size="100" :src="imagePreview" />
          <div class="mt-3">
            <!-- 隱藏 input 由 label 觸發 -->
            <label for="fileInput" class="btn btn-outline-secondary btn-sm">選擇圖片</label>
            <input id="fileInput" type="file" @change="handleImage" hidden />
          </div>
          <p class="text-muted mt-2">檔案大小：最大 1MB</p>
          <p class="text-muted">檔案限制：.JPEG, .PNG</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AssidePage from '@/components/main/AccountPages/AssidePage.vue'

// 使用者資料表單狀態
const form = ref({
  name: '',
  gender: '',
  day: '',
  month: '',
  year: '',
})

// 建立近 100 年的年份選單
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

// 頭像預覽網址（初始為預設圖）
const imagePreview = ref('https://via.placeholder.com/100')

// 假資料（遮蔽顯示）
const maskedEmail = '*********@gmail.com'
const maskedPhone = '*********00'

// 頭像圖片上傳處理
function handleImage(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  const validTypes = ['image/jpeg', 'image/png']
  if (!validTypes.includes(file.type) || file.size > 1024 * 1024) {
    alert('請選擇 1MB 以內的 JPEG 或 PNG 檔案')
    return
  }

  const reader = new FileReader()
  reader.onload = () => {
    imagePreview.value = reader.result as string
  }
  reader.readAsDataURL(file)
}

// 表單提交
function submit() {
  console.log('提交資料:', form.value)
  alert('已儲存')
}
</script>

<style scoped>
/* 小於 768px 時適當調整左右間距與排版 */
@media (max-width: 767px) {
  main {
    margin-left: 0 !important;
    padding: 1.5rem !important;
  }
}
</style>
