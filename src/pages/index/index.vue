<template>
  <view>
    <view class="index-page">
      <Hello />
      <!-- <text class="h2"> 查看其它页面↓ </text>
      <view>
        <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
          v.title
        }}</navigator>
      </view> -->
    </view>

    <Tabbar />
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Hello from '@/components/hello/index.vue'
import Tabbar from '@/components/common/Tabbar.vue'

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'Axios Demo',
    url: '/pages/axios/index'
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  }
])
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
