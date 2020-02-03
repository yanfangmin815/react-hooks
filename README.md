# 目录结构
## 一、build
> webpack构建文件夹，一般情况不用修改
---
## 二、config
> 服务器配置文件
```js
// 修改此属性，可以配置不同的代理
proxyTable: {
  '/legacy': {
    target: 'https://cntaiping-dev.zaouter.com/api/',

    changeOrigin: true,
    pathRewrite: {
      '^/legacy': ''
    }
  },
},
```
---
## 三、src
### api
> 接口存放文件夹，所有的接口都存放在这里

1. config.js是配置文件，之后可以做优化；
2. 接口分模块管理，比如：account 都是账户信息相关的接口；center都是用户中心相关接口等等...可以自己到时候规划

### assets
> 图片资源存放文件夹，凡是打包进代码的图片资源都放在这里，需要外链的图片路径放到static文件夹里面，稍后会介绍

### channels
> 频道分组。根据项目模块拆分成了不同频道
1. 入口文件是App.vue
2. index文件夹表示主系统
3. 当项目需要使用多页面呃时候，可添加同级文件夹
4. 每个模块下面除了页面路由，还放一些只在当前频道被使用的组件、mixin等文件；以index文件夹为例，下面分components（组件）、mixin（混合）、pages(页面)、router(路由配置)
5. 路由模块和vuex模块管理: 如下
```js
import initGuards from '@/utils/guards'
import store from '@/store/indexStore'
const router = new Router({
  mode: 'history',
  base: '/index',
  routes: [
    ......
  ],
}
initGuards(store, router, 'index', true)
```

### components
> 所有模块都可能需要的组件放在这里
1. common ----这里面只有一个header文件需要注意，稍后会介绍
2. Form--------表单文件  图形验证码，条款选择，输入框，密码，获取短信 等常用表单元素均在这里
3. PDFLink-----PDF组件，凡是要打开pdf的地方使用这个组件
4. Popup ------一些自定义的弹窗组件放在这里，比如：微信分享提示，客服电话等
5. Upload -----上传图片组件，常规的上传图片组件

### constants
> 常量存放组件，一些常量存放在这里。比如考试题、分享图片路径、当前项目绝对路径等
1. index 文件夹当中的 ROOT_URI 是比较常用的一个，表示当前项目的地址

### Filter
> 过滤器文件，多个地方都会用得到的过滤器都写在这里。大多数都是之前项目遗留的，可以删除掉一些

### lib
> 需要存放到本地的第三方库放在这里。目前只放了一个上传头像裁剪的库，因为自己修改了第三方的代码，所以放在了lib里面；之前还有一个fastclick因为在ios11下有BUG，也是修改了代码放在这里，但是后来那个bUG被解决了，就移出去了。

### store
> vuex在这里进行管理
1. common 全局的状态
2. indexStore 主系统状态，只在index channels里面可以用；productStore 产品模块状态 只能在 product channels 里面使用。可以在 channels 里面的 router文件夹下面配置，具体代码在 utils/guards 文件里面
3. 如果需要开启日志，可参考下面
```js
const plugins = process.env.NODE_ENV === 'production' ? [] : [createLogger()]
```
4. 模块配置代码
```js
const createStore = (modules = {}, extraPlugins = []) => { // eslint-disable-line
  return new Vuex.Store({
    state: rootState,
    modules: {
      ...common,
      ...modules,
    },
    plugins: plugins.concat(extraPlugins),
    strict: true,
  })
}
```
5. user.js 用户状态，管理用户信息--是否登录，用户角色之类的
6. system APP信息状态，里面存放了版本号信息。里面有一个 isInApp 很常用，用来判断是否在我们的APP环境
7. title 标题状态，用来管理标题类型，标题文字，标题左右按钮的点击方法等

### theme
> 样式主题文件写在这里
1. pageTheme --- 模块公共样式，比如产品页有一些公共表单样式（输入框padding，高宽之类的），可以写在xxxxx.scss里面，不用每个页面再去写了。
2. colors ---色彩文件，只管理主色调，主字体色调，主边框色调。一些单独的颜色不用管，比如#fff之类，灰色之类公用不多的
3. mixin  --- 左 右箭头，清除浮动，字体超出显示省略号等常用样式，还有公共按钮样式也写在这里

### utils---非常重要
> 工具类文件夹
1. guards --- 多页面模块处理函数文件，beforeEach、afterEach、beforeResolve都在这里处理，非常重要，请务必弄清楚这里面代码的逻辑
2. luhm ----- 银行卡校验文件，可校验真实银行卡规则
3. moment --- 一些自定义的日期方法，比如根据生日获取年龄、当前日期往前推多少天/年等。须特别注意getAgeFromBirth，getMinAgeByEffectiveDate，getMaxAgeByEffectiveDate这三个方法。因为在保险产品里面，不同的保险公司计算年龄的方式不一样，有的是根据出生日期，有的是根据保险生效日期，所以封装了这几个方法，请务必根据需求使用不同的方法。
4. plugin --- 插件管理文件。jsbridge是与native交互的插件，很重要！setTitle也是与native交互的文件，很重要！后面会单独介绍着两个。ua是判断当前客户端信息的插件，ios wechat android之类的
5. vee-validate 自定义校验规则放在这里，具体请自行参考vee-validate文档
6. wechat --- 微信jssdk配置文件，微信分享之类的东西
7. tool ----- 一些常用的工具方法，获取出生日期，收尾去空格

### static 
> 静态资源文件，需要外链的静态资源放在这里。比如：pdf.js源码，分享默认图标。
### tools
> 多页面添加方法---暂时用不到

2. setTitle 插件方法，此方法在settitle文件里面，主要用于控制Native的标题。
```js
function setTitle(title, type = 'hidden', lbtn, rbtn) {
  const isShow = type === 'hidden' || type === 'index';
  if (isInApp) {
    if (lbtn && rbtn) {
      this.jsbridge.setH5Header({ title, type, show: !isShow, lbtn, rbtn })
    } else if (lbtn) {
      this.jsbridge.setH5Header({ title, type, show: !isShow, lbtn })
    } else if (rbtn) {
      this.jsbridge.setH5Header({ title, type, show: !isShow, rbtn })
    } else {
      this.jsbridge.setH5Header({ title, type, show: !isShow })
    }
  } else {
    window.document.title = title
  }
}
// title 是标题
// type 是类型  index 是首页，此时路由清空，按返回会退出应用
// type是hidden或者index的时候Native的title不会显示，此时显示的是H5的title

// 使用方法
this.setTitle('首页', 'index') // 没有native title
```

## beforeRouter 和 beforeResolve 流程

1. 这个项目一定要登录才能
2. beforeResolve 用以处理页面必须数据，防止页面初始请求未完成之前显示没有数据的状态
3. 参考首页代码
```js
asyncData({ store }) {
  return Promise.all([
    store.dispatch('xxx/yyy'),
    store.dispatch('xxx/yyy', { pageNum: 1, pageSize: 5 }),
  ])
},

## vuex的使用约定
1. 与后端的请求数据尽量维护到vuex里面，防止在多处用到
2. 使用mapState, mapActions，避免直接使用this.$store
3. 常量的管理全部以 模块_方法_名称的形式命名，比如： USER_GET_MOBILE

## router里面的约定
> 主要是meta里面的相关信息
1. title 前端页面展示的title文本
2. isFreeAuth true的时候 免登陆
3. pageType  这个属性会觉得title的展示样式，具体参考components下面的header组件
```js
// index 首页；(没有title)
// main  主页面 
// hidden 不需要title
// noback 没有返回键 --类似main
// onlybanc 只有返回键
```
## title的约定
> title分为两种，native的title和前端title
1. 每个页面都要注意设置 this.setTitle
2. setTitle 第二个参数默认不传，即表示不显示native的title
3. 前端的title的优势是可以适应UI的调整，由前端开发人员自行把控，但是安卓刘海异形屏现在还没有适配
4. Native title无法应对随时可能调整的UI，并且首页和我的 几个页面是没有Title的，如果使用Native的title会导致跳转到有title的页面的时候发生抖动，但是native的适配性好


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
