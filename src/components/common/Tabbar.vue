<template>
  <view>
    <u-tabbar
      v-model="current"
      :list="list"
      :mid-button="true"
      active-color="#1890ff"
      @change="change"
    ></u-tabbar>
  </view>
</template>

<script  lang="ts">
import { ref, reactive, defineComponent, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { tabbarStore } from '@/store'

export default defineComponent({
  name: 'Tabbar',
  setup(props, { expose }) {
    // 获取自定义的store
    const store = tabbarStore()

    // 取需要的 state
    const { tabbarActiveIndex } = storeToRefs(store)

    const current = computed(() => {
      store.getTabbarActiveIndex
    })

    const list = reactive([
      {
        iconPath: 'home',
        selectedIconPath: 'home-fill',
        text: '首页',
        count: 2,
        isDot: true,
        customIcon: false,
        pagePath: '/pages/index/index'
      },
      {
        iconPath: 'photo',
        selectedIconPath: 'photo-fill',
        text: '统计',
        customIcon: false,
        pagePath: '/pages/pinia/index'
      },
      {
        iconPath: 'https://cdn.uviewui.com/uview/common/min_button.png',
        selectedIconPath:
          'https://cdn.uviewui.com/uview/common/min_button_select.png',
        text: '一键记录',
        midButton: true,
        customIcon: false,
        pagePath: '/pages/axios/index'
      },
      {
        iconPath: 'play-right',
        selectedIconPath: 'play-right-fill',
        text: '留言',
        customIcon: false,
        pagePath: '/pages/uview/index'
      },
      {
        iconPath: 'account',
        selectedIconPath: 'account-fill',
        text: '我的',
        count: 23,
        isDot: false,
        customIcon: false,
        pagePath: '/pages/my/index'
      }
    ])

    const change = (index: number) => {
      console.log(index)
      store.setTabbarActiveIndex(index)
    }

    return {
      current,
      list,
      change
    }
  }
})
</script>
