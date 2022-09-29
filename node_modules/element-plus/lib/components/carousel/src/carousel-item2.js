'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index.js');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var carouselItem = require('./carousel-item.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var carousel = require('../../../tokens/carousel.js');
var error = require('../../../utils/error.js');
var types = require('../../../utils/types.js');

const __default__ = {
  name: "ElCarouselItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: carouselItem.carouselItemProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("carousel");
    const COMPONENT_NAME = "ElCarouselItem";
    const carouselContext = vue.inject(carousel.carouselContextKey);
    const instance = vue.getCurrentInstance();
    if (!carouselContext) {
      error.debugWarn(COMPONENT_NAME, "usage: <el-carousel></el-carousel-item></el-carousel>");
    }
    if (!instance) {
      error.debugWarn(COMPONENT_NAME, "compositional hook can only be invoked inside setups");
    }
    const CARD_SCALE = 0.83;
    const hover = vue.ref(false);
    const translate = vue.ref(0);
    const scale = vue.ref(1);
    const active = vue.ref(false);
    const ready = vue.ref(false);
    const inStage = vue.ref(false);
    const animating = vue.ref(false);
    const { isCardType, isVertical } = carouselContext;
    const itemStyle = vue.computed(() => {
      const translateType = `translate${vue.unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${vue.unref(translate)}px)`;
      const _scale = `scale(${vue.unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    function processIndex(index, activeIndex, length) {
      const lastItemIndex = length - 1;
      const prevItemIndex = activeIndex - 1;
      const nextItemIndex = activeIndex + 1;
      const halfItemIndex = length / 2;
      if (activeIndex === 0 && index === lastItemIndex) {
        return -1;
      } else if (activeIndex === lastItemIndex && index === 0) {
        return length;
      } else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
        return length + 1;
      } else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
        return -2;
      }
      return index;
    }
    function calcCardTranslate(index, activeIndex) {
      var _a;
      const parentWidth = ((_a = carouselContext.root.value) == null ? void 0 : _a.offsetWidth) || 0;
      if (inStage.value) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / 4;
      } else {
        return (3 + CARD_SCALE) * parentWidth / 4;
      }
    }
    function calcTranslate(index, activeIndex, isVertical2) {
      const rootEl = carouselContext.root.value;
      if (!rootEl)
        return 0;
      const distance = (isVertical2 ? rootEl.offsetHeight : rootEl.offsetWidth) || 0;
      return distance * (index - activeIndex);
    }
    const translateItem = (index, activeIndex, oldIndex) => {
      var _a;
      const _isCardType = vue.unref(isCardType);
      const carouselItemLength = (_a = carouselContext.items.value.length) != null ? _a : Number.NaN;
      const isActive = index === activeIndex;
      if (!_isCardType && !types.isUndefined(oldIndex)) {
        animating.value = isActive || index === oldIndex;
      }
      if (!isActive && carouselItemLength > 2 && carouselContext.loop) {
        index = processIndex(index, activeIndex, carouselItemLength);
      }
      const _isVertical = vue.unref(isVertical);
      active.value = isActive;
      if (_isCardType) {
        if (_isVertical) {
          error.debugWarn("Carousel", "vertical direction is not supported for card mode");
        }
        inStage.value = Math.round(Math.abs(index - activeIndex)) <= 1;
        translate.value = calcCardTranslate(index, activeIndex);
        scale.value = vue.unref(active) ? 1 : CARD_SCALE;
      } else {
        translate.value = calcTranslate(index, activeIndex, _isVertical);
      }
      ready.value = true;
    };
    function handleItemClick() {
      if (carouselContext && vue.unref(isCardType)) {
        const index = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
        carouselContext.setActiveItem(index);
      }
    }
    vue.onMounted(() => {
      carouselContext.addItem({
        props,
        states: vue.reactive({
          hover,
          translate,
          scale,
          active,
          ready,
          inStage,
          animating
        }),
        uid: instance.uid,
        translateItem
      });
    });
    vue.onUnmounted(() => {
      carouselContext.removeItem(instance.uid);
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          vue.unref(ns).e("item"),
          vue.unref(ns).is("active", active.value),
          vue.unref(ns).is("in-stage", inStage.value),
          vue.unref(ns).is("hover", hover.value),
          vue.unref(ns).is("animating", animating.value),
          { [vue.unref(ns).em("item", "card")]: vue.unref(isCardType) }
        ]),
        style: vue.normalizeStyle(vue.unref(itemStyle)),
        onClick: handleItemClick
      }, [
        vue.unref(isCardType) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("mask"))
        }, null, 2)), [
          [vue.vShow, !active.value]
        ]) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default")
      ], 6)), [
        [vue.vShow, ready.value]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);

exports["default"] = CarouselItem;
//# sourceMappingURL=carousel-item2.js.map
