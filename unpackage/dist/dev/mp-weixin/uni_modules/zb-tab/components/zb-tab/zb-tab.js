"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  options: {
    // 微信小程序中 options 选项
    multipleSlots: true,
    //  在组件定义时的选项中启动多slot支持，默认启用
    styleIsolation: "shared",
    //  启动样式隔离。当使用页面自定义组件，希望父组件影响子组件样式时可能需要配置。具体配置选项参见：微信小程序自定义组件的样式
    addGlobalClass: true,
    //  表示页面样式将影响到自定义组件，但自定义组件中指定的样式不会影响页面。这个选项等价于设置 styleIsolation: apply-shared
    virtualHost: true
    //  将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
  },
  props: {
    // 开启收缩布局
    shrink: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: "40px"
    },
    // 底部条宽度，
    lineWidth: {
      type: [String, Number],
      default: "40px"
    },
    lineColor: {
      type: String,
      default: "#252525"
    },
    activeStyle: {
      type: Object,
      default: () => {
      }
    },
    value: {
      type: [Number, String],
      default: 0
    },
    modelValue: {
      type: [String, Number]
    },
    data: {
      type: Array,
      default: () => []
    },
    // 菜单是否可滚动
    scrollable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scrollLeft: 0,
      lineStyle: {},
      inited: true,
      initTime: null,
      activeIndex: this.value,
      valueTime: null,
      dataTime: null
    };
  },
  computed: {
    tabHeight() {
      if (this.isNumeric(this.height)) {
        return this.height + "px";
      }
      if (this.height.includes("rpx")) {
        let height = this.height.replace("rpx", "");
        return common_vendor.index.upx2px(height) + "px";
      }
      return this.height;
    },
    lineTabWidth() {
      if (this.isNumeric(this.lineWidth)) {
        return this.lineWidth + "px";
      }
      if (this.lineWidth.includes("rpx")) {
        this.lineWidth.replace("rpx", "");
        return common_vendor.index.upx2px(this.lineWidth) + "px";
      }
      return this.lineWidth;
    }
  },
  unmounted() {
    this.initTime = null;
  },
  mounted() {
    this.setLine();
  },
  watch: {
    data: {
      handler(val, oldValue) {
        if (val && val.length) {
          this.dataTime = setTimeout(() => {
            this.$nextTick(() => {
              clearTimeout(this.dataTime);
              let value = this.value;
              value = this.modelValue;
              if (value != null) {
                this.setCurrentIndexByName(value);
              }
              this.setLine();
              if (!this.valueTime) {
                let item = this.data.find((item2) => item2.value === value);
                this.$emit("change", {
                  ...item
                });
              }
            });
          }, 1e3 / 60);
        }
      },
      immediate: true
    },
    modelValue: {
      handler(val) {
        if (this.data && this.data.length) {
          this.valueTime = setTimeout(() => {
            this.setCurrentIndexByName(val);
            this.$nextTick(() => {
              this.setLine();
            });
            let item = this.data.find((item2) => item2.value === val);
            this.$emit("change", {
              ...item
            });
            clearTimeout(this.valueTime);
          }, 20);
        }
      },
      immediate: true
    }
  },
  methods: {
    isNumeric(val) {
      return /^\d+(\.\d+)?$/.test(val);
    },
    addUnit(value) {
      if (value == null) {
        return void 0;
      }
      value = String(value);
      return this.isNumeric(value) ? `${value}px` : value;
    },
    setCurrentIndexByName(val) {
      this.activeIndex = this.data.findIndex((item) => item.value === val);
    },
    async getWidth() {
      return new Promise((resolve) => {
        let view = common_vendor.index.createSelectorQuery().in(this).selectAll(".zb-tab");
        view.boundingClientRect((data) => {
          resolve(data);
        }).exec();
      });
    },
    async getWrapWidth() {
      return new Promise((resolve) => {
        let view = common_vendor.index.createSelectorQuery().in(this).select(".zb-tabs__nav");
        view.boundingClientRect((data) => {
          resolve(data);
        }).exec();
      });
    },
    /**
     * @ 滑动
     * @param lineOffsetLeft 当前tab 距离左边的距离
     * @param itemTab 当前tab滑块的位置
     * @returns {Promise<void>}
     */
    async scrollLeftTo(lineOffsetLeft, itemTab) {
      let tabNav = await this.getWrapWidth();
      this.scrollLeft = lineOffsetLeft - (tabNav.width - itemTab.width) / 2;
    },
    async setLine() {
      let tabs = await this.getWidth();
      let itemTab = tabs[this.activeIndex];
      if (!itemTab)
        return;
      let currentBeforeArr = tabs.slice(0, this.activeIndex);
      let lineOffsetLeft = currentBeforeArr.reduce((total, curr) => {
        return total + curr.width;
      }, 0);
      const left = lineOffsetLeft + itemTab.width / 2;
      this.scrollLeftTo(lineOffsetLeft, itemTab);
      const lineStyle = {
        width: this.addUnit(this.lineWidth),
        transform: `translateX(${left}px) translateX(-50%)`,
        background: this.lineColor
      };
      if (this.inited) {
        lineStyle.transitionDuration = "0s";
        if (this.inited) {
          this.initTime = setTimeout(() => {
            this.inited = false;
          }, 10);
        }
      }
      this.lineStyle = lineStyle;
    },
    changeTab(item, index) {
      if (item.disabled)
        return;
      this.activeIndex = index;
      this.setLine();
      this.$emit("update:modelValue", item.value);
      this.$emit("input", item.value);
      this.$emit("click-tab", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.data, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.s($data.activeIndex === index && $props.activeStyle),
        c: common_vendor.n({
          "zb-tab--shrink": $props.shrink,
          "zb-tab--active": $data.activeIndex === index,
          "zb-no-active": $data.activeIndex !== index,
          "zb-tab--disabled": item.disabled
        }),
        d: item.value,
        e: common_vendor.o(($event) => $options.changeTab(item, index), item.value)
      };
    }),
    b: common_vendor.s($data.lineStyle),
    c: $props.scrollable,
    d: $data.scrollLeft,
    e: $options.tabHeight,
    f: $options.lineTabWidth
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b237120f"], ["__file", "C:/Users/WRR/Desktop/喜贴贴小程序/xitietie-uniapp-main/uni_modules/zb-tab/components/zb-tab/zb-tab.vue"]]);
wx.createComponent(Component);
