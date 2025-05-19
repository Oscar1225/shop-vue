<template>
  <aside
    class="bg-white p-4 rounded shadow"
  >
    <div class="mb-4">
      <div class="d-flex align-items-center gap-2">
        <i class="fa-solid fa-circle-user fa-lg"></i>
        <span class="fw-bold">qw99g13tfs</span>
      </div>
      <router-link to="/account/profile" class="d-block mt-2 text-decoration-none text-primary small">
        ✎ 編輯個人簡介
      </router-link>
    </div>

    <div>
      <div class="fw-bold text-muted mb-2 small">我的帳戶</div>
      <nav class="list-group list-group-flush">

        <router-link to="/account/profile"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>📄</span> 個人檔案
        </router-link>

        <router-link to="/account/payment"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>💳</span> 銀行帳號 / 信用卡
        </router-link>

        <router-link to="/account/address"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🏠</span> 地址
        </router-link>

        <router-link to="/account/changepassword"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🔒</span> 更改密碼
        </router-link>

        <router-link to="/account/customkyc"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🛂</span> 關務署實名認證
        </router-link>

        <router-link to="/account/NotificationSettings"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🔔</span> 通知設置
        </router-link>

        <router-link to="/account/PrivacySettings"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🔐</span> 隱私設定
        </router-link>

        <el-divider class="my-2" />

        <router-link to="/account/MyPurchase"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🛒</span> 購買清單
        </router-link>

        <router-link to="/account/Notifications"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>📣</span> 通知總覽
        </router-link>

        <router-link to="/account/MyVouchers"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>🎟️</span> 我的優惠券
        </router-link>

        <router-link to="/account/MyShopeeCoins"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>💰</span> 我的蝦幣
        </router-link>

        <router-link to="/account/PaymentRefundTransaction"
          class="list-group-item list-group-item-action border-0 d-flex align-items-center gap-2 py-2 px-2"
          active-class="active-item">
          <span>📑</span> 交易支付及退款查詢
        </router-link>

      </nav>
    </div>
  </aside>
</template>
