<template>
    <div class="container d-flex justify-content-between align-items-center flex-wrap">
        <div class="h4 mt-4 mb-3 text-start ps-4">所有分類</div>

        <div class="d-flex flex-columns flex-wrap">
            <div class="d-flex text-start justify-content-start ms-4 gap-3">
            <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                <div class="align-items-start">
                    <i class="fa-solid fa-store text-danger fs-4 mb-2 me-2"></i>
                    <span class="text-black small fs-6"> 新手上路</span>
                </div>
            </el-button>
            <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                <div class="align-items-start">
                    <i class="fa-solid fa-truck text-success fs-4 mb-2 me-2"></i>
                    <span class="text-black small fs-6"> 訂單物流</span>
                </div>
            </el-button>
            <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                <div class="align-items-start">
                    <i class="fa-solid fa-thumbs-down fs-4 mb-2 me-2" style="background: white; color: #FF5722;"></i>
                    <span class="text-black small fs-6"> 退貨與退款</span>
                </div>
            </el-button>
            <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                <div class="align-items-start">
                    <i class="fa-solid fa-receipt text-primary fs-4 mb-2"></i>
                    <i class="fa-solid fa-question text-primary fs-6 mb-2 me-2"></i>
                    <span class="text-black small fs-6"> 購物安全與其他</span>
                </div>
            </el-button>
            </div>

            <div class="flex-wrap d-flex text-start justify-content-start ms-4 gap-3">
                <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                    <div class="align-items-start">
                        <i class="fa-solid fa-wallet fs-4 mb-2 me-2" style="background: white; color: #FF5722;"></i>
                        <span class="text-black small fs-6"> 付款或帳務問題</span>
                    </div>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                    <div class="align-items-start">
                        <i class="fa-solid fa-tag fs-4 mb-2 me-2" style="background: white; color: #FF5722;"></i>
                        <span class="text-black small fs-6"> 優惠與促銷活動</span>
                    </div>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start mb-3 ps-4"  style="width: 250px;height: 80px;background-color: white;border: 1px solid #ddd;">
                    <div class="align-items-start">
                        <i class="fa-solid fa-circle-dollar-to-slot fs-4 mb-2 me-2" style="background: white; color: #FF5722;"></i>
                        <span class="text-black small fs-6"> 電子票券與繳費</span>
                    </div>
                </el-button>
            </div>
        </div>
    </div>

    <div class="container align-items-start flex-wrap">
        <div class="h4 mt-4 mb-3 text-start ps-4">熱門問題</div>

        <div class="d-flex flex-column justify-content-start flex-wrap">
            <div>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4 ms-2"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[客戶服務] 近期更新懶人包⭐</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[技術問題] 系統相關維護公告</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[🔥APP限定免付費] [客戶服務] 怎麼使用網路電話與客服通話？</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[蝦皮購物] 新手攻略(初階)－新手上路</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[帳號問題] 新增/修改手機號碼時，已被綁定/無法修改怎麼辦？</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[發票相關] 如何查詢發票資訊？</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[蝦幣相關] 什麼是蝦幣，我該如何使用／折抵蝦幣？以及是否有折抵上限？</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[配送相關] 如何在蝦皮購物查看包裹配送進度？</span>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4 mb-4"  style="width: 1000px;height: 70px; background-color: white; border: 1px dashed #ddd;">
                    <span class="text-black small fs-6">[退貨退款申請] 如何申請退貨退款？</span>
                </el-button>
            </div>
        </div>
    </div>

    <div class="py-5 text-center" style="background-color: #ddd;">
      <h5 class="text-black mb-4">需要客服協助嗎？</h5>
      <div class="container d-flex justify-content-center">
            <div class="d-flex flex-row flex-wrap justify-content-center gap-1">
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4 ms-2"  style="width: 250px;height: 70px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-bag-shopping me-3"></i>
                    <div>
                        <div class="text-black small flex-wrap">立即下載APP聊聊蝦事通</div>
                        <div class="small mt-1" style="color:gray">24小時提供即時互動諮詢</div>
                    </div>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 250px;height: 70px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-magnifying-glass-location me-3"></i>
                    <div>
                        <div class="text-black small flex-wrap">自助服務中心</div>
                        <div class="small mt-1" style="color:gray">週一至週五 09:00-18:00</div>
                    </div>
                </el-button>
                <el-button class="d-flex align-items-center justify-content-start text-start ps-4"  style="width: 250px;height: 70px; background-color: white; border: 1px solid #ddd;">
                    <i class="fa-solid fa-phone-volume me-3"></i>
                    <div>
                        <div class="text-black small flex-wrap">更新APP聯繫電話真人客服</div>
                        <div class="small mt-1" style="color:gray">週一至週五 09:00-18:00</div>
                    </div>
                </el-button>
            </div>
      </div>
    </div>
</template>