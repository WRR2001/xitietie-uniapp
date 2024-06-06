"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ShopList",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const shopCardClick = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/shop-info/shop-info?shopId=${item.id}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.list.length
      }, __props.list.length ? {
        b: common_vendor.f(__props.list, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: "56e950e0-0-" + i0,
            c: item.is_open == false
          }, item.is_open == false ? {
            d: common_vendor.t(item.closed_label)
          } : {}, {
            e: "56e950e0-1-" + i0,
            f: common_vendor.t(item.address),
            g: common_vendor.o(($event) => shopCardClick(item), item.id),
            h: item.id
          });
        }),
        c: common_vendor.p({
          type: "right",
          size: "15"
        }),
        d: common_vendor.p({
          type: "location",
          size: "17"
        })
      } : {
        e: common_assets._imports_0
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-main/pages/explore-shop/component/ShopList.vue"]]);
wx.createComponent(Component);
