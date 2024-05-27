"use strict";
const common_vendor = require("../../common/vendor.js");
const api_shop = require("../../api/shop.js");
if (!Array) {
  const _easycom_zb_tab2 = common_vendor.resolveComponent("zb-tab");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_zb_tab2 + _easycom_uni_icons2)();
}
const _easycom_zb_tab = () => "../../uni_modules/zb-tab/components/zb-tab/zb-tab.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_zb_tab + _easycom_uni_icons)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "explore-shop",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("explore-shop onLoad");
      postShopListRes();
    });
    const processShopListData = (data) => {
      return data.map((item) => ({
        id: item.id,
        name: item.name,
        address: item.address,
        is_open: item.is_open
      }));
    };
    const postShopListParam = {
      country_code: "156",
      city_code: "156810000"
      // userLocation: "120.29850006103516,30.418750762939453"
    };
    const shopList = common_vendor.ref([]);
    const cityName = common_vendor.ref("");
    const filterShopList = common_vendor.ref([]);
    const postShopListRes = async () => {
      const res = await api_shop.postShopListAPI(postShopListParam);
      shopList.value = processShopListData(res.data.list);
      cityName.value = res.data.list[0].city;
      filterShopList.value = shopList.value.filter((item) => item.is_open === false);
      console.log(shopList.value);
      console.log(filterShopList);
    };
    common_vendor.ref([]);
    const tablist = [
      {
        name: "待开业门店",
        value: 0
      },
      {
        name: "全部门店",
        value: 1
      }
    ];
    const active = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return common_vendor.e({
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
        c: common_vendor.t(cityName.value),
        d: common_vendor.p({
          type: "down",
          size: "20"
        }),
        e: active.value === 0
      }, active.value === 0 ? {
        f: common_vendor.f(filterShopList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.address),
            d: item.id
          };
        })
      } : active.value === 1 ? {
        h: common_vendor.f(shopList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.address),
            d: item.id
          };
        })
      } : {}, {
        g: active.value === 1,
        i: active.value
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-159896bb"], ["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-vue3-js/pages/explore-shop/explore-shop.vue"]]);
wx.createPage(MiniProgramPage);
