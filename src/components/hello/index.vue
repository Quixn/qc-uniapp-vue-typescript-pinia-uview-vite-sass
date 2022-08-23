<template>
  <view class="hello">
    <view class="wrap">
      <u-swiper :list="list"></u-swiper>
    </view>

    <view class="wrap record">
      <view class="box box1">
        <view class="circular dateColor">1920</view>
        <view class="content">
          <view class="title">QC在一起</view>
          <view class="acount">6年0个月1天</view>
        </view>
      </view>
      <view class="box box2">
        <view class="circular dateColor">1920</view>
        <view class="content">
          <view class="title">QC在一起</view>
          <view class="acount">6年0个月1天</view>
        </view>
      </view>
    </view>

    <view class="wrap record">
      <view class="box box3">
        <view class="circular dateColor">1920</view>
        <view class="content">
          <view class="title">QC在一起</view>
          <view class="acount">6年0个月1天</view>
        </view>
      </view>
      <view class="box box4">
        <view class="circular dateColor">1920</view>
        <view class="content">
          <view class="title">QC在一起</view>
          <view class="acount">6年0个月1天</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, defineComponent, reactive } from 'vue'
// export default defineComponent({
//   name: 'Hello'
// })
const title = ref('Hello')

const list = reactive([
  {
    image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
    title: '昨夜星辰昨夜风，画楼西畔桂堂东'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
    title: '身无彩凤双飞翼，心有灵犀一点通'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
  }
])
</script>

<style lang="scss" scoped>
/* 居中对齐 */
@mixin flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* flex  justify-content: space-between; */
@mixin flexsb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@mixin flexsa {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.hello {
  box-sizing: border-box;
  padding: 0 10rpx;

  .wrap {
    margin-top: 10rpx;
  }

  .record {
    @include flexsb;

    .box {
      width: 49%;
      height: 120rpx;
      border-radius: 10rpx;
      @include flexsa;

      .circular {
        width: 80rpx;
        height: 80rpx;
        border-radius: 40rpx;
        background: $uni-bg-color;

        @include flex;
      }

      .content {
        width: calc(100% - 160rpx);

        color: $uni-text-color-inverse;
        .title {
          @include flex;
        }
        .account {
          @include flex;
        }
      }
    }

    .box1 {
      background: $uni-color-primary;

      .dateColor {
        color: $uni-color-primary;
      }
    }

    .box2 {
      background: $uni-color-success;
      .dateColor {
        color: $uni-color-success;
      }
    }

    .box3 {
      background: $uni-color-warning;
      .dateColor {
        color: $uni-color-warning;
      }
    }

    .box4 {
      background: $uni-color-error;
      .dateColor {
        color: $uni-color-error;
      }
    }
  }
}
</style>
