<template>
    <div class="container">
        <div class="row mb-3">
            <div class="col-12 col-md-6">
                <h4 class="mt-4 ps-2">所有分類</h4>
            </div>
        </div>

        <div class="row px-3">
            <div class="col-6 col-md-3 col-lg-2 mb-3 me-5">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-store ms-2 me-3 fs-4" style="color: #dc3545;"></i>
                    <span class="text-black fs-6">新手上路</span>
                </el-button>
            </div>
            <div class="col-6 col-md-3 col-lg-2 mb-3 me-5">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-truck ms-2 me-3 fs-4" style="color: #28a745;"></i>
                    <span class="text-black fs-6">訂單物流</span>
                </el-button>
            </div>
            <div class="col-6 col-md-3 col-lg-2 mb-3 me-5">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-dollar-sign ms-2 me-3 fs-4" style="color: #ffc107;"></i>
                    <span class="text-black fs-6">退貨與退款</span>
                </el-button>
            </div>
            <div class="col-6 col-md-3 col-lg-2 mb-3 me-5">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-comments ms-2 me-3 fs-4" style="color: #0d6efd;"></i>
                    <span class="text-black fs-6">購物安全與其他</span>
                </el-button>
            </div>

            <div class="w-100 d-none d-lg-block"></div>
            <div class="col-6 col-md-3 col-lg-2 mb-3 me-5">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-wallet fs-4 mb-2 ms-2 me-3" style="color: #FF5722;"></i>
                    <span class="text-black fs-6">付款或帳務問題</span>
                </el-button>
            </div>
            <div class="col-6 col-md-3 col-lg-2 mb-3 me-5">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-tag fs-4 mb-2 ms-2 me-3" style="color: #FF5722;"></i>
                    <span class="text-black fs-6">優惠與促銷活動</span>
                </el-button>
            </div>
            <div class="col-6 col-md-3 col-lg-2 mb-3">
                <el-button class="d-flex align-items-center justify-content-start px-3 py-2" 
                        style="width: 240px;height: 80px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-circle-dollar-to-slot fs-4 mb-2 ms-2 me-3" style="color: #FF5722;"></i>
                    <span class="text-black fs-6">電子票券與繳費</span>
                </el-button>
            </div>
        </div>
    </div>

    <div class="container mt-4">
        <div class="row mb-3">
            <div class="col-12 col-md-6">
                <h4 class="ps-2">熱門問題</h4>
            </div>
        </div>

        <div class="row px-3">
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[客戶服務] 近期更新懶人包⭐</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[技術問題] 系統相關維護公告</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[🔥APP限定免付費] [客戶服務] 怎麼使用網路電話與客服通話？</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[蝦皮購物] 新手攻略(初階)－新手上路</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[帳號問題] 新增/修改手機號碼時，已被綁定/無法修改怎麼辦？</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[發票相關] 如何查詢發票資訊？</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[蝦幣相關] 什麼是蝦幣，我該如何使用／折抵蝦幣？以及是否有折抵上限？</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[配送相關] 如何在蝦皮購物查看包裹配送進度？</span>
                </el-button>
            </div>
            <div class="col-12 col-md-10 mb-4">
                <el-button class="w-100 d-flex align-items-center justify-content-start text-start px-3"
                    style="height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black fs-6 fs-md-5">[退貨退款申請] 如何申請退貨退款？</span>
                </el-button>
            </div>
        </div>
    </div>

    <div class="container flex-wrap text-center mt-4 py-5" style="background-color: #ddd;">
        <div class="row mb-3 justify-content-center">
            <div class="col-12 col-md-6 text-center">
            <h5 class="ps-2">需要更多協助？</h5>
            </div>
        </div>


      <div class="container d-flex justify-content-center">
            <div class="d-flex flex-row flex-wrap justify-content-center gap-1">
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4 ms-2"  style="width: 270px;height: 70px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-bag-shopping me-3"></i>
                    <div>
                        <div class="text-black fs-6 flex-wrap mb-2">立即下載APP聊聊蝦事通</div>
                        <div class="small mt-1" style="color:gray">24小時提供即時互動諮詢</div>
                    </div>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 270px;height: 70px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-magnifying-glass-location me-3"></i>
                    <div>
                        <div class="text-black fs-6 flex-wrap mb-2">自助服務中心</div>
                        <div class="small mt-1" style="color:gray">週一至週五 09:00-18:00</div>
                    </div>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 270px;height: 70px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-phone-volume me-3"></i>
                    <div>
                        <div class="text-black fs-6 flex-wrap mb-2">更新APP聯繫電話真人客服</div>
                        <div class="small mt-1" style="color:gray">週一至週五 09:00-18:00</div>
                    </div>
                </el-button>
            </div>
      </div>
    </div>
</template>