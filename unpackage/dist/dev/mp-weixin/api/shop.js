"use strict";
const utils_http = require("../utils/http.js");
const postShopListAPI = (postShopListParam) => {
  return utils_http.http({
    method: "POST",
    url: "/api/service-smc/grayapi/city/shop-page",
    data: postShopListParam
  });
};
const postShopInfoAPI = (postShopInfoParam) => {
  return utils_http.http({
    method: "POST",
    url: "/api/service-smc/grayapi/user/closest/shop",
    data: postShopInfoParam
  });
};
exports.postShopInfoAPI = postShopInfoAPI;
exports.postShopListAPI = postShopListAPI;
