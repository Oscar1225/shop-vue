<template>
  <div class="ju">
    <!-- 左側導覽欄 -->
    <AssidePage />

    <!-- 右側主內容 -->
    <main>
      <h2>我的檔案</h2>
      <p class="subtitle">管理你的檔案以保護你的帳戶</p>

      <div class="profile-container">
        <!-- 左側表單區 -->
        <div class="form-left">
          <!-- 使用者帳號 -->
          <div class="form-group">
            <label>使用者帳號</label>
            <span class="static-text">qw99g13tfs</span>
          </div>

          <!-- 姓名 -->
          <div class="form-group">
            <label>姓名</label>
            <input type="text" v-model="form.name" />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label>Email</label>
            <span>{{ maskedEmail }}</span> <a href="#">變更</a>
          </div>

          <!-- 手機號碼 -->
          <div class="form-group">
            <label>手機號碼</label>
            <span>{{ maskedPhone }}</span> <a href="#">變更</a>
          </div>

          <!-- 性別 -->
          <div class="form-group">
            <label>性別</label>
            <label><input type="radio" value="male" v-model="form.gender" /> 男性</label>
            <label><input type="radio" value="female" v-model="form.gender" /> 女性</label>
            <label><input type="radio" value="other" v-model="form.gender" /> 其他</label>
          </div>

          <!-- 生日 -->
          <div class="form-group">
            <label>生日</label>
            <div class="birth-select">
              <select v-model="form.day">
                <option disabled value="">日期</option>
                <option v-for="d in 31" :key="d">{{ d }}</option>
              </select>
              <select v-model="form.month">
                <option disabled value="">月</option>
                <option v-for="m in 12" :key="m">{{ m }}</option>
              </select>
              <select v-model="form.year">
                <option disabled value="">年</option>
                <option v-for="y in years" :key="y">{{ y }}</option>
              </select>
            </div>
          </div>

          <!-- 儲存按鈕 -->
          <button class="save-btn" @click="submit">儲存</button>
        </div>

          <!-- 右側頭像區 -->
         <div class="form-right">
         <div class="avatar-wrapper">
         <img :src="imagePreview" class="avatar" />
         <label for="fileInput" class="upload-btn">選擇圖片</label>
        <input id="fileInput" type="file" @change="handleImage" hidden />
        </div>
        <p class="hint">檔案大小: 最大1MB</p>
        <p class="hint">檔案限制: .JPEG, .PNG</p>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AssidePage from '@/components/main/AccountPages/AssidePage.vue'

// 使用者資料表單
const form = ref({
  name: '',
  gender: '',
  day: '',
  month: '',
  year: '',
})

// 產生過去 100 年年份選單
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

// 頭像圖片預覽
const imagePreview = ref('https://via.placeholder.com/100')

// 假資料 - email、手機
const maskedEmail = '*********@gmail.com'
const maskedPhone = '*********00'

// 上傳頭像圖片預覽功能
function handleImage(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file && file.size <= 1048576) {
    const reader = new FileReader()
    reader.onload = () => {
      imagePreview.value = reader.result as string
    }
    reader.readAsDataURL(file)
  } else {
    alert('圖片檔案過大或格式錯誤')
  }
}

// 提交按鈕事件
function submit() {
  console.log('提交資料:', form.value)
  alert('已儲存')
}
</script>

<style scoped>
.ju {
  display: flex;
  margin: 20px;
}

/* 右側主內容樣式 */
main {
  margin-left: 20px;
  flex: 1;
  padding: 2rem;
  height: auto;
  background-color: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.subtitle {
  color: #888;
  margin-bottom: 20px;
}

.profile-container {
  display: flex;
  gap: 50px;
}

/* 左側表單區 */
.form-left {
  flex: 2;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-weight: 600;
  margin-right: 10px;
}

input[type="text"],
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 120px;
  margin-top: 5px;
}

.birth-select {
  display: flex;
  gap: 10px;
}

/* Email/手機等靜態文字 */
.static-text {
  margin-left: 10px;
  color: #555;
}

/* 頭像區 */
.form-right {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3f3f3;
  object-fit: cover;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.upload-btn {
  display: inline-block;
  padding: 6px 14px;
  background-color: white;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
}

.upload-btn:hover {
  background-color: #f0f0f0;
}

input[type="file"] {
  margin-top: 8px;
}

.hint {
  font-size: 12px;
  color: #888;
  margin-top: 6px;
}

.save-btn {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #ee4d2d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
