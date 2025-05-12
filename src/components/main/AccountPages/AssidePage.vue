<template>
    <aside>
      <div>
        <div>
          <div><i class="fa-solid fa-circle-user"></i>qw99g13tfs</div>
          <br>
          <a href="#">✎ 編輯個人簡介</a>
        </div>
      </div>
      <div>
        <br>
        我的帳戶
        <nav>
          <router-link to="/account/profile">
            <span>📄</span> 個人檔案
          </router-link>
          <router-link to="/account/payment">
            <span>💳</span> 銀行帳號 / 信用卡
          </router-link>
          <router-link to="/account/address">
            <span>🏠</span> 地址
          </router-link>
          <router-link to="/account/changepassword">
            <span>🔒</span> 更改密碼
          </router-link>
          <router-link to="/account/customkyc">
            <span>🛂</span> 關務署實名認證
          </router-link>
          <router-link to="/account/NotificationSettings">
            <span>🔔</span> 通知設置
          </router-link>
          <router-link to="/account/PrivacySettings">
            <span>🔐</span> 隱私設定
          </router-link>
          <hr class="my-2">
          <router-link to="/account/MyPurchase">
            <span>🛒</span> 購買清單
          </router-link>
          <router-link to="/account/Notifications">
            <span>📣</span> 通知總覽
          </router-link>
          <router-link to="/account/MyVouchers">
            <span>🎟️</span> 我的優惠券
          </router-link>
          <router-link to="/account/MyShopeeCoins">
            <span>💰</span> 我的蝦幣
          </router-link>
          <router-link to="/account/PaymentRefundTransaction">
            <span>📑</span> 交易支付及退款查詢
          </router-link>
        </nav>
      </div>
    </aside>
</template>
<style scoped>
  aside {
  width: 16rem; /* w-64 */
  height: 650px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

aside img {
  border-radius: 9999px;
}

 a {
  display: flex;
  align-items: center;
  padding: 11px 10px;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #374151;
  text-decoration: none;
  transition: background 0.2s;
}

 a:hover {
  background-color: #f3f4f6;
}

 a.active {
  background-color: #fee2e2;
  color: #dc2626;
  font-weight: 600;
}
</style>