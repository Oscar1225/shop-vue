<template>
    <aside>
      <div>
        <i class="fa-solid fa-circle-user"></i>
        <div>
          <div>qw99g13tfs</div>
          <div>✎ 編輯個人簡介</div>
        </div>
      </div>
      <nav>
        <a href="/account/profile">
          <span class="mr-2">📄</span> 個人檔案
        </a>
        <a href="/account/payment">
          <span class="mr-2">💳</span> 銀行帳號 / 信用卡
        </a>
        <a href="#">
          <span class="mr-2">🏠</span> 地址
        </a>
        <a href="#">
          <span class="mr-2">🔒</span> 更改密碼
        </a>
        <a href="#">
          <span class="mr-2">🛂</span> 關務署實名認證
        </a>
        <a href="#">
          <span class="mr-2">🔔</span> 通知設置
        </a>
        <a href="#">
          <span class="mr-2">🔐</span> 隱私設定
        </a>
        <hr class="my-2">
        <a href="#">
          <span class="mr-2">🛒</span> 購買清單
        </a>
        <a href="#">
          <span class="mr-2">📣</span> 通知總覽
        </a>
        <a href="#">
          <span class="mr-2">🎟️</span> 我的優惠券
        </a>
        <a href="#">
          <span class="mr-2">💰</span> 我的蝦幣
        </a>
        <a href="#">
          <span>📑</span> 交易支付及退款查詢
        </a>
      </nav>
    </aside>
</template>
<style scoped>
  aside {
  margin-top: 15px;
  width: 16rem; /* w-64 */
  height: 650px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

aside img {
  border-radius: 9999px;
}

nav a {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #374151;
  text-decoration: none;
  transition: background 0.2s;
}

nav a:hover {
  background-color: #f3f4f6;
}

nav a.active {
  background-color: #fee2e2;
  color: #dc2626;
  font-weight: 600;
}
</style>