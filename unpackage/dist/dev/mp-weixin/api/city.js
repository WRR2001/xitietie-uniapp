"use strict";
const utils_http = require("../utils/http.js");
const postCityIndexAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/api/service-location/grayapi/global-area",
    data
  });
};
exports.postCityIndexAPI = postCityIndexAPI;
