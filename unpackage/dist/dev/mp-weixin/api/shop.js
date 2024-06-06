"use strict";
const utils_http = require("../utils/http.js");
const postShopListAPI = (postShopListParam) => {
  return utils_http.http({
    method: "POST",
    url: "/api/service-smc/grayapi/city/shop-page",
    data: postShopListParam
  });
};
<<<<<<< HEAD
const postShopInfoAPI = (postShopInfoParam) => {
  return utils_http.http({
    method: "POST",
    url: "/api/service-smc/grayapi/user/closest/shop",
    data: postShopInfoParam
  });
};
exports.postShopInfoAPI = postShopInfoAPI;
=======
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
exports.postShopListAPI = postShopListAPI;
