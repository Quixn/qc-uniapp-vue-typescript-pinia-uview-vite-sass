import { defineStore } from 'pinia'
import { ITabbarInfo } from "../types";
import {
  TABBAR_INFO
} from "../keys";

const tabbarInfo: ITabbarInfo = JSON.parse(
  localStorage.getItem(TABBAR_INFO) || '{"tabbarActiveIndex":0}'
);

const tabbarStore = defineStore('tabbar', {

  state: () => {
    return {
      tabbarActiveIndex: tabbarInfo.tabbarActiveIndex || 0,
      list: []
    }
  },
  getters: {
    getTabbarActiveIndex: (state) => {
      return state.tabbarActiveIndex
    },
    getTabbarList: (state) => {
      return state.list
    }
  },
  actions: {
    setTabbarActiveIndex(index: number) {
      this.tabbarActiveIndex = index
      localStorage.setItem(TABBAR_INFO, JSON.stringify({ tabbarActiveIndex: this.tabbarActiveIndex }));

    }
  }
})

export default tabbarStore
