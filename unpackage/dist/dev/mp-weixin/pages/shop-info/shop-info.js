"use strict";
const common_vendor = require("../../common/vendor.js");
const api_shop = require("../../api/shop.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shop-info",
  setup(__props) {
    const postShopInfoParam = common_vendor.ref({
      // 杭州EFC欧美广场店
      "id": 1022
      // "location": "120.29850006103516,30.418750762939453",
      // "type": 1,
      // "is_to_oversea_app": false
    });
    const processShopInfoData = (data) => {
      return [{
        id: data.id,
        name: data.name,
        address: data.address,
        contact_phone: data.contact_phone,
        all_business_time_list: data.all_business_time_list
      }];
    };
    const shopInfo = common_vendor.ref([]);
    const postShopInfoRes = async () => {
      const res = await api_shop.postShopInfoAPI(postShopInfoParam.value);
      shopInfo.value = processShopInfoData(res.data);
      console.log(shopInfo.value);
    };
    common_vendor.onLoad((option) => {
      console.log("当前城市ID:" + option.shopId);
      postShopInfoParam.value.id = option.shopId;
      console.log("参数id:" + postShopInfoParam.value.id);
      postShopInfoRes();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: shopInfo.value.length > 0
      }, shopInfo.value.length > 0 ? common_vendor.e({
        b: common_vendor.t(shopInfo.value[0].name),
        c: common_vendor.t(shopInfo.value[0].address),
        d: shopInfo.value[0].contact_phone != "-"
      }, shopInfo.value[0].contact_phone != "-" ? {
        e: common_vendor.t(shopInfo.value[0].contact_phone)
      } : {}, {
        f: common_vendor.t(shopInfo.value[0].all_business_time_list[0].openAt),
        g: common_vendor.t(shopInfo.value[0].all_business_time_list[0].closeAt),
        h: common_vendor.t(shopInfo.value[0].all_business_time_list[0].isAllDay ? "是" : "否")
      }) : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-main/pages/shop-info/shop-info.vue"]]);
wx.createPage(MiniProgramPage);
