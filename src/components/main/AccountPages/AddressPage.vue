<template>
  <div class="ju">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main>
      <div class="title-row">
        <span class="page-title">我的地址</span>
        <div class="title-buttons">
          <button class="btn-shopaddress"> + 新增超商地址 </button>
          <button class="btn-address"> + 新增地址 </button>
        </div>
      </div>
      
      <div class="subtitle">地址</div>
        <div class="subtitle-box">
          <div class="user-info">
            <span class="username">王小明</span>
            <span class="userphone"> | (+886) 907 587 886</span>
          </div>
          <div class="address-info">
            <span class="static-text">學城路一段1號</span>
            <span class="postal-area">大樹區, 高雄市, 840</span>
            <div class="default-badge">預設</div>
          </div>
        <div class="action-settings right-align">
          <span class="modify-buttons">
            <button>編輯</button>
            <button>刪除</button>
          </span>
          <div class="setting">
            <button>設定為預設</button>
          </div>
        </div>
        </div>
      <!-- 超商取貨地址 -->
      <div class="section-title">超商取貨地址</div>

        <div class="address-box">
          <div class="user-info">
            <span class="username">陳小美</span>
            <span class="userphone"> | (+886) 912 379 588</span>
          </div>
          <div class="address-info">
            <span class="address-name">大樹實踐 - 智取店</span>
            <span class="address-details">高雄市大樹區實踐街102號1樓</span>
            <span class="delivery-info">蝦皮店到店 | 自訂到貨日區段（最晚 5 日內取件）</span>
          </div>
        <span class="action-settings right-align">
          <div class="modify-buttons">
            <button>編輯</button>
            <button>刪除</button>
          </div>
        </span>
      </div>
      <div class="address-box">
          <div class="user-info">
            <span class="username">陳小美</span>
            <span class="userphone"> | (+886) 912 379 588</span>
          </div>
          <div class="address-info">
            <span class="address-name">萊爾富大樹義大店</span>
            <span class="address-details">高雄市大樹區學城路一段１３１號</span>
            <span class="address-details">門市店號: 4231</span>
            <span class="delivery-info">萊爾富取件</span>
          </div>
        <span class="action-settings right-align">
          <div class="modify-buttons">
            <button>編輯</button>
            <button>刪除</button>
          </div>
        </span>
      </div>
      <div class="address-box">
          <div class="user-info">
            <span class="username">陳小美</span>
            <span class="userphone"> | (+886) 912 379 588</span>
          </div>
          <div class="address-info">
            <span class="address-name">全家大樹義大一店</span>
            <span class="address-details">高雄市大樹區學城路一段１號（學生活動中心）</span>
            <span class="address-details">門市店號: 007970</span>
            <span class="delivery-info">全家取貨</span>
          </div>
        <span class="action-settings right-align">
          <div class="modify-buttons">
            <button>編輯</button>
            <button>刪除</button>
          </div>
        </span>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>
<style scoped>

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px 0 20px; /* 上左右間距 */
  margin-left: 0px;
  flex-wrap: wrap; /* ✅如果畫面太窄也能換行 */
}

.page-title {
  font-size: 18px;
  color: black;
}

.title-buttons {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.btn-shopaddress {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
}

.btn-address {
  background-color: #FF5722;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
}

.subtitle {
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;
  color: black;
  margin-bottom: 20px;
  text-align: left;
  white-space: normal; /* ✅允許換行 */
  word-break: break-word;
}
.subtitle-box {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  gap: 1px; /* 行間距 */
  margin-top: 10px; /* 與上方間距 */
  margin-right: 20px; /* 與右邊間距 */
}
.user-info {
  display: flex;
  align-items: center;
}
.username {
  font-size: 16px;
  color: black;
}
.userphone {
  font-size: 14px;
  margin-top: 4px;
  color: #888;
}
.username, .userphone {
  display: inline-block; /* 確保它們在同一行 */
}
.static-text {
  color: #888;
  margin-top: 5px; /* 與上方間距 */
}
.postal-area {
  color: #888;
}
.default-badge {
  font-size: 12px;
  background-color: white;
  color: #FF5722;
  padding: 2px 4px 2px 4px; /* 上下左右內縮 */
  border-style: solid; /*必寫框線*/
  border-color: #FF5722;
  border-width: 1px; /*邊框粗細*/
  border-spacing: 10px;
  margin-top: 5px; /* 與上方間距 */
}

.section-title {
  font-size: 18px;
  margin-top: 40px;          /* ✅與前方區塊拉開距離 */
  margin-bottom: 16px;
  white-space: normal;
  word-break: break-word;
  padding-right: 20px;       /* ✅靠右內縮一點，對齊美觀 */
}

.address-box {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #fafafa;
}

.address-info {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  display: flex;
  flex-direction: column; /* 讓內容垂直排列 */
  align-items: flex-start; /* 靠左對齊 */
  gap: 5px; /* 控制行間距 */
}

.address-info span {
  display: block;
}

.address-name {
  font-size: 14px;
  color: black;
  margin-top: 5px; /* 與上方間距 */
}
.address-details {
  font-size: 14px;
  color: #888;
}
.delivery-info {
  font-size: 12px;
  color: gray; /* 其餘文字都是灰色 */
  margin-top: 3px; /* 與上方間距 */
}

.address-info span {
  display: block; /* 讓每個 span 換行 */
}

.action-settings {
  text-align: right;
  align-items: flex-end; /* 靠右對齊 */
}

.modify-buttons button {
  gap: 10px; /* 控制按鈕間距 */
  margin-top: 5px; /* 與上方間距 */
  background: none;
  border: none;
  color: #007aff;
  cursor: pointer;
  margin-right: 12px;
  font-size: 14px;
  white-space: nowrap; /* 不換行 */
}

.setting {
  font-size: 14px;
  background-color: #ffffff;
  color: #888;
  border-color: #888;
  cursor: pointer;
  margin-top: 10px; /* 與上方間距 */
  margin-right: 10px;
}

.ju{
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;

}

main {
  margin-left: 20px;
  flex: 1;
  padding: 2rem;
  height: 650px;
  background-color: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
</style>

