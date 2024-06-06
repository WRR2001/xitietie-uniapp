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
  (_easycom_zb_tab + _easycom_uni_icons + ShopList)();
}
const ShopList = () => "./component/ShopList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "explore-shop",
  setup(__props) {
    const isLoading = common_vendor.ref(true);
<<<<<<< HEAD
    const postShopListParam = common_vendor.ref({
      country_code: "156",
      //深圳
      city_code: "156440300"
      // userLocation: "120.29850006103516,30.418750762939453"
    });
    const setCity = (selectedCityId) => {
      if (selectedCityId) {
        postShopListParam.value.city_code = selectedCityId;
        console.log(postShopListParam.value.city_code);
      } else {
        console.log("未手动选择城市id");
      }
      postShopListRes();
    };
    const shopList = common_vendor.ref([]);
    const cityName = common_vendor.ref("");
    const filterShopList = common_vendor.ref([]);
=======
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
    const processShopListData = (data) => {
      return data.map((item) => ({
        id: item.id,
        name: item.name,
        address: item.address,
        is_open: item.is_open,
        closed_label: item.closed_label
      }));
    };
<<<<<<< HEAD
=======
    const setCity = (selectedCityId) => {
      if (selectedCityId) {
        postShopListParam.value.city_code = selectedCityId;
        console.log(postShopListParam.value.city_code);
      } else {
        console.log("未手动选择城市id");
      }
      postShopListRes();
    };
    const postShopListParam = common_vendor.ref({
      country_code: "156",
      //默认-深圳
      city_code: "156440300"
      // userLocation: "120.29850006103516,30.418750762939453"
    });
    const shopList = common_vendor.ref([]);
    const cityName = common_vendor.ref("");
    const filterShopList = common_vendor.ref([]);
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
    const postShopListRes = async () => {
      const res = await api_shop.postShopListAPI(postShopListParam.value);
      shopList.value = processShopListData(res.data.list);
      cityName.value = res.data.list[0].city;
      filterShopList.value = shopList.value.filter((item) => item.is_open === false);
<<<<<<< HEAD
      isLoading.value = false;
      console.log(shopList.value);
      console.log(filterShopList);
    };
=======
      console.log(shopList.value);
      console.log(filterShopList);
      isLoading.value = false;
    };
    common_vendor.ref([]);
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
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
    const active = common_vendor.ref(0);
    common_vendor.onLoad((option) => {
      console.log("explore-shop onLoad");
<<<<<<< HEAD
      console.log("Selected city ID（主动选择的城市id）:", option.selectedCityId);
=======
      console.log("Selected city ID:", option.selectedCityId);
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
      const selectedCityId = option.selectedCityId;
      setCity(selectedCityId);
    });
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
        c: isLoading.value
      }, isLoading.value ? {} : common_vendor.e({
        d: common_vendor.t(cityName.value),
        e: common_vendor.p({
          type: "down",
          size: "20"
        }),
        f: active.value === 0
      }, active.value === 0 ? {
        g: common_vendor.p({
          list: filterShopList.value
        })
      } : {
        i: common_vendor.p({
          list: shopList.value
        })
      }, {
        h: active.value === 1,
        j: active.value
      }));
    };
  }
});
<<<<<<< HEAD
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-159896bb"], ["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-main/pages/explore-shop/explore-shop.vue"]]);
=======
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-159896bb"], ["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-vue3-js/pages/explore-shop/explore-shop.vue"]]);
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
wx.createPage(MiniProgramPage);
