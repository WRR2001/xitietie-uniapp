"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/sub/sub.js";
  "./pages/explore-shop/explore-shop.js";
  "./pages/city-index/city-index.js";
<<<<<<< HEAD
  "./pages/shop-info/shop-info.js";
=======
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
<<<<<<< HEAD
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-main/App.vue"]]);
=======
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-vue3-js/App.vue"]]);
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
