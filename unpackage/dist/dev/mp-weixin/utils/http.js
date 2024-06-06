"use strict";
const common_vendor = require("../common/vendor.js");
const baseURL = "https://go.heytea.com";
const httpInterceptor = {
  //拦截前触发
  invoke(options) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 1e4;
  }
};
common_vendor.index.addInterceptor("request", httpInterceptor);
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...options,
      //响应成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: "请求错误"
          });
          reject(res);
        }
      },
      //响应失败
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          title: "网络错误，换个网络试试"
        });
        reject(err);
      }
    });
  });
};
exports.http = http;
