<template>
    <footer>
        <div class="three">
            <div class="categories">
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-truck icon-green"><div>周六免運日</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-plane-arrival icon-orange"><div> $99起免運</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-check icon-orange"><div>免運當日到</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-ticket icon-orange"><div>一鍵領券</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-bag-shopping icon-red"><div>蝦皮商城</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-globe icon-green"><div>蝦皮海外直送</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-credit-card icon-orange"><div>銀行刷卡優惠</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-thumbs-up icon-orange"><div>蝦皮超便宜</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-laptop icon-blue"><div>蝦皮3C家電</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-tags icon-green"><div>活動集合</div></i>
                </button></a>
            </div>
        </div>
    </footer>
</template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .three{
    /* border: 10px solid black; */
    height: auto;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
    }
    .categories {
        display: flex;
        flex-wrap: wrap;          
        justify-content: center;
        gap: 75px;                
    }
    .categories a{ 
        text-decoration: none;    
    }
    .button-icon {
        display: flex;
        flex-direction: column;   
        align-items: center;      
        text-align: center;       
        border: none;
        background: none;
        cursor: pointer;          
        width: 60px;
        padding: 5px;
    }
    .button-icon i {
        font-size: 24px;          
        line-height: 3;           
        margin-bottom: 10px;      
    }

    .icon-green {
        color: #00C2B3;
    }
    
    .icon-orange {
        color: #FF5722;
    }
    
    .icon-red {
        color: #E3002C;
    }
    
    .icon-blue {
        color: #0066CC;
    }

    .button-icon div {
        font-size: 16px;          
        color: #333;
        line-height: 1.2;         
    }
  </style>
  