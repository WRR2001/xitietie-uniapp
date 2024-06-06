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
    const isLoading = common_vendor.ref(true);
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
    const transformData = (data) => {
      const groupedData = {};
      data.forEach((item) => {
        const letter = item.initial_alphabet;
        const cityName = item.city;
        const cityId = item.city_code;
        if (!groupedData[letter]) {
          groupedData[letter] = [];
        }
        groupedData[letter].push({
          name: cityName,
          id: cityId
        });
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
      console.log("Transformed Data:", transformedData.value);
      isLoading.value = false;
    };
    const bindClick = (e) => {
      const cityId = e.item.id;
      common_vendor.index.navigateTo({
        url: `/pages/explore-shop/explore-shop?selectedCityId=${cityId}`
      });
    };
    common_vendor.onLoad(() => {
      console.log("city-index onLoad");
      postCityIndexRes();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : common_vendor.e({
        b: common_vendor.o(($event) => active.value = $event),
        c: common_vendor.p({
          activeStyle: {
            fontWeight: "bold",
            transform: "scale(1.1)"
          },
          data: tablist,
          height: "44",
          modelValue: active.value
        }),
        d: active.value === 0
      }, active.value === 0 ? {
        e: common_vendor.o(bindClick),
        f: common_vendor.p({
          options: transformedData.value,
          ["show-select"]: false
        })
      } : active.value === 1 ? {} : {}, {
        g: active.value === 1
      }));
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-main/pages/city-index/city-index.vue"]]);
wx.createPage(MiniProgramPage);
