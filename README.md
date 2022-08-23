

## 使用
### 安装依赖
**建议使用pnpm，依赖安装速度更快**
```sh
npm i -g pnpm
```

```sh
pnpm install
```

## 本地启动
### 微信小程序
```sh
# 构建出产物
pnpm dev:mp-weixin
```



### H5
```sh
# CSR
pnpm dev:h5
# SSR
pnpm dev:h5:ssr
```

根据提示，打开对应地址即可访问






## 打包构建
### 微信小程序
```
pnpm build:mp-weixin
```
### H5
```sh
# CSR
pnpm build:h5
# SSR
pnpm build:h5:ssr
```



### 首页

- 轮播图 最近的一些照片
- 我们在一起多久 
- 日常记录 日历对应每天的记录 - 信息或者健康状态的记录 -或者特别的纪念事

### 统计

- 图表统计 多种维度的统计

### 一键记录

- 快捷记录录入的入口，表单等

### 留言

- 留言 

### 我的

- 登录 账号密码登录 退出登录

- 纪念日倒计时或者已经多久


