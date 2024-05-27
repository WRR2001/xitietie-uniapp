"use strict";
const common_vendor = require("../../common/vendor.js");
const api_city = require("../../api/city.js");
if (!Array) {
  const _easycom_zb_tab2 = common_vendor.resolveComponent("zb-tab");
  const _easycom_uni_indexed_list2 = common_vendor.resolveComponent("uni-indexed-list");
  (_easycom_zb_tab2 + _easycom_uni_indexed_list2)();
}
const _easycom_zb_tab = () => "../../uni_modules/zb-tab/components/zb-tab/zb-tab.js";
const _easycom_uni_indexed_list = () => "../../uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.js";
if (!Math) {
  (_easycom_zb_tab + _easycom_uni_indexed_list)();
}
const _sfc_main = {
  __name: "city-index",
  setup(__props) {
    const tablist = [
      {
        name: "国内（含港澳台）",
        value: 0
      },
      {
        name: "海外",
        value: 1
      }
    ];
    const active = common_vendor.ref(0);
    common_vendor.ref([]);
    const transformedData = common_vendor.ref([]);
    const transformData = (chinaAreas) => {
      const groupedData = {};
      chinaAreas.forEach((item) => {
        const letter = item.initial_alphabet;
        const cityName = item.city;
        if (!groupedData[letter]) {
          groupedData[letter] = [];
        }
        groupedData[letter].push(cityName);
      });
      const result = Object.keys(groupedData).map((letter) => ({
        letter,
        data: groupedData[letter]
      }));
      return result;
    };
    const postCityIndexRes = async () => {
      const res = await api_city.postCityIndexAPI({
        keyword: ""
      });
      const chinaAreas = res.data.china_areas;
      transformedData.value = transformData(chinaAreas);
      console.log(transformedData);
    };
    common_vendor.onLoad(() => {
      console.log("city-index onLoad");
      postCityIndexRes();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => active.value = $event),
        b: common_vendor.p({
          activeStyle: {
            fontWeight: "bold",
            transform: "scale(1.1)"
          },
          data: tablist,
          height: "44",
          modelValue: active.value
        }),
        c: common_vendor.o(_ctx.bindClick),
        d: common_vendor.p({
          options: transformedData.value,
          ["show-select"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-vue3-js/pages/city-index/city-index.vue"]]);
wx.createPage(MiniProgramPage);
