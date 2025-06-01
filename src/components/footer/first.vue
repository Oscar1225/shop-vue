<template>
  <footer>
    <div class="footer-container">
      <div class="footer-scroll justify-content-center">
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-truck text-success"></i>
              <div class="footer-label">周六免運日</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-plane-arrival" style="color:#FF5722;"></i>
              <div class="footer-label">$99起免運</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-check" style="color:#FF5722;"></i>
              <div class="footer-label">免運當日到</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-ticket" style="color:#FF5722;"></i>
              <div class="footer-label">一鍵領券</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-bag-shopping text-danger"></i>
              <div class="footer-label">蝦皮商城</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-globe text-success"></i>
              <div class="footer-label">蝦皮海外直送</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-credit-card" style="color:#FF5722;"></i>
              <div class="footer-label">銀行刷卡優惠</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-thumbs-up" style="color:#FF5722;"></i>
              <div class="footer-label">蝦皮超便宜</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-laptop text-primary"></i>
              <div class="footer-label">蝦皮3C家電</div>
            </div>
          </el-button>
        </a>
        <a href="#" class="footer-item">
          <el-button class="footer-btn" text>
            <div>
              <i class="fa-solid fa-tags text-success"></i>
              <div class="footer-label">活動集合</div>
            </div>
          </el-button>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  overflow-x: auto;
  padding: 5px;
}

.footer-scroll {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5px;
  overflow: hidden;
  flex-shrink: 0;
  gap: 5px;
  min-width: max-content;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 10%;
}

.footer-item i {
  font-size: 4vw;
}

.footer-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  padding: 5px;
}

.footer-btn i {
  font-size: 6vw;
  margin-bottom: 5px;
}

.footer-label {
  font-size: 3vw;
  color: black;
  white-space: nowrap;
}

/* 在平板或桌機時調整大小 */
@media (min-width: 500px) {
  .footer-btn i {
    font-size: 25px;
  }
  .footer-label {
    font-size: 13px;
  }
}

button:focus {
  outline: none;
  box-shadow: none;
}
</style>
