<template>
  <div class="container">
    <div class="quantity-statistics">
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">普通音频条数-本周新增</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">11,590</div>
          </div>
        </div>
      </div>
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">普通音频条数-累计</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">51,862</div>
          </div>
        </div>
      </div>
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">普通音频时长-本周新增</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">1,862</div>
          </div>
        </div>
      </div>
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">普通音频时长-本周新增</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">1,323</div>
          </div>
        </div>
      </div>
    </div>
    <div class="quantity-statistics">
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">专辑数-本周新增</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">1,862</div>
          </div>
        </div>
      </div>
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">专辑数-累计</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">1,323</div>
          </div>
        </div>
      </div>
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">用户平均收听时长</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">11,590</div>
          </div>
        </div>
      </div>
      <div class="quantity-item">
        <div class="quantity-detail">
          <div class="quantity-detail-box">
            <div class="quantity-title">收听完播率</div>
            <div class="quantity-border-line"></div>
            <div class="quantity">51,862</div>
          </div>
        </div>
      </div>
    </div>
        <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <group-column></group-column>
        </div>
      </el-col>
      <el-col :span="8" class="none">
        <div class="grid-content bg-purple">
          <radar></radar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import GroupColumn from './daynewuser'
export default {
    components: {
    GroupColumn,
  },
  setup() {
    const showTeam = ref(false)
    const activeName = ref('first')
    const { clientWidth } = document.body

    onMounted(() => {
      if (clientWidth > 1200 && clientWidth < 1330) {
        showTeam.value = true
      } else {
        showTeam.value = false
      }
    })

    /**
     * 切换选项
     */
    const handleArticle = link => {
      window.open(link)
    }

    return {
      showTeam,
      activeName,
      handleArticle,
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;

  .quantity-statistics {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 90px;
    .quantity-item {
      display: flex;
      width: 25%;
      height: 100%;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 14px 0px rgba(243, 243, 243, 1);
      border-radius: 8px;
      .quantity-detail {
        flex: 1;
        .quantity-detail-box {
          margin: 12px 0 0 30px;
          .quantity-title {
            margin-bottom: 2px;
            height: 20px;
            line-height: 20px;
            color: #495468;
            font-size: 14px;
            font-weight: 400;
          }
          .quantity-border-line {
            width: 46px;
            height: 2px;
            background: rgba(73, 84, 104, 1);
          }
          .quantity {
            margin-top: 7px;
            height: 48px;
            font-size: 25px;
            color: rgba(73, 84, 104, 1);
            line-height: 38px;
            letter-spacing: 2px;
          }
        }
      }
      .quantity-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 100%;
        background: rgba(69, 119, 255, 0.1);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        img {
          width: 28px;
          height: 33px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .container .quantity-statistics .quantity-item {
    width: 32%;
    &:last-child {
      display: none;
    }
  }
}
</style>
