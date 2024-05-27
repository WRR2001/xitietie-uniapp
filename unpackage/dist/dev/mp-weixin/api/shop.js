"use strict";
const utils_http = require("../utils/http.js");
const postShopListAPI = (postShopListParam) => {
  return utils_http.http({
    method: "POST",
    url: "/api/service-smc/grayapi/city/shop-page",
    data: postShopListParam
  });
};
exports.postShopListAPI = postShopListAPI;
