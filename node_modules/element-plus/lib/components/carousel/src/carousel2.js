'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
var core = require('@vueuse/core');
require('../../../utils/index.js');
var index$1 = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var carousel = require('./carousel.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var shared = require('@vue/shared');
var error = require('../../../utils/error.js');
var carousel$1 = require('../../../tokens/carousel.js');

const _hoisted_1 = ["onMouseenter", "onMouseleave"];
const _hoisted_2 = ["onMouseenter", "onClick"];
const _hoisted_3 = { key: 0 };
const __default__ = {
  name: "ElCarousel"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: carousel.carouselProps,
  emits: carousel.carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = index.useNamespace("carousel");
    const COMPONENT_NAME = "ElCarousel";
    const THROTTLE_TIME = 300;
    const activeIndex = vue.ref(-1);
    const timer = vue.ref(null);
    const hover = vue.ref(false);
    const root = vue.ref();
    const items = vue.ref([]);
    const arrowDisplay = vue.computed(() => props.arrow !== "never" && !vue.unref(isVertical));
    const hasLabel = vue.computed(() => {
      return items.value.some((item) => item.props.label.toString().length > 0);
    });
    const carouselClasses = vue.computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (vue.unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const indicatorsClasses = vue.computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (hasLabel.value) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside" || vue.unref(isCardType)) {
        classes.push(ns.em("indicators", "outside"));
      }
      return classes;
    });
    const isCardType = vue.computed(() => props.type === "card");
    const isVertical = vue.computed(() => props.direction === "vertical");
    const throttledArrowClick = lodashUnified.throttle((index) => {
      setActiveItem(index);
    }, THROTTLE_TIME, { trailing: true });
    const throttledIndicatorHover = lodashUnified.throttle((index) => {
      handleIndicatorHover(index);
    }, THROTTLE_TIME);
    function pauseTimer() {
      if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
      }
    }
    function startTimer() {
      if (props.interval <= 0 || !props.autoplay || timer.value)
        return;
      timer.value = setInterval(() => playSlides(), props.interval);
    }
    const playSlides = () => {
      if (activeIndex.value < items.value.length - 1) {
        activeIndex.value = activeIndex.value + 1;
      } else if (props.loop) {
        activeIndex.value = 0;
      }
    };
    function setActiveItem(index) {
      if (shared.isString(index)) {
        const filteredItems = items.value.filter((item) => item.props.name === index);
        if (filteredItems.length > 0) {
          index = items.value.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (Number.isNaN(index) || index !== Math.floor(index)) {
        error.debugWarn(COMPONENT_NAME, "index must be integer.");
        return;
      }
      const itemCount = items.value.length;
      const oldIndex = activeIndex.value;
      if (index < 0) {
        activeIndex.value = props.loop ? itemCount - 1 : 0;
      } else if (index >= itemCount) {
        activeIndex.value = props.loop ? 0 : itemCount - 1;
      } else {
        activeIndex.value = index;
      }
      if (oldIndex === activeIndex.value) {
        resetItemPosition(oldIndex);
      }
      resetTimer();
    }
    function resetItemPosition(oldIndex) {
      items.value.forEach((item, index) => {
        item.translateItem(index, activeIndex.value, oldIndex);
      });
    }
    function addItem(item) {
      items.value.push(item);
    }
    function removeItem(uid) {
      const index = items.value.findIndex((item) => item.uid === uid);
      if (index !== -1) {
        items.value.splice(index, 1);
        if (activeIndex.value === index)
          next();
      }
    }
    function itemInStage(item, index) {
      var _a, _b, _c, _d;
      const _items = vue.unref(items);
      const itemCount = _items.length;
      if (itemCount === 0 || !item.states.inStage)
        return false;
      const nextItemIndex = index + 1;
      const prevItemIndex = index - 1;
      const lastItemIndex = itemCount - 1;
      const isLastItemActive = _items[lastItemIndex].states.active;
      const isFirstItemActive = _items[0].states.active;
      const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
      const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
      if (index === lastItemIndex && isFirstItemActive || isNextItemActive) {
        return "left";
      } else if (index === 0 && isLastItemActive || isPrevItemActive) {
        return "right";
      }
      return false;
    }
    function handleMouseEnter() {
      hover.value = true;
      if (props.pauseOnHover) {
        pauseTimer();
      }
    }
    function handleMouseLeave() {
      hover.value = false;
      startTimer();
    }
    function handleButtonEnter(arrow) {
      if (vue.unref(isVertical))
        return;
      items.value.forEach((item, index) => {
        if (arrow === itemInStage(item, index)) {
          item.states.hover = true;
        }
      });
    }
    function handleButtonLeave() {
      if (vue.unref(isVertical))
        return;
      items.value.forEach((item) => {
        item.states.hover = false;
      });
    }
    function handleIndicatorClick(index) {
      activeIndex.value = index;
    }
    function handleIndicatorHover(index) {
      if (props.trigger === "hover" && index !== activeIndex.value) {
        activeIndex.value = index;
      }
    }
    function prev() {
      setActiveItem(activeIndex.value - 1);
    }
    function next() {
      setActiveItem(activeIndex.value + 1);
    }
    function resetTimer() {
      pauseTimer();
      startTimer();
    }
    vue.watch(() => activeIndex.value, (current, prev2) => {
      resetItemPosition(prev2);
      if (prev2 > -1) {
        emit("change", current, prev2);
      }
    });
    vue.watch(() => props.autoplay, (autoplay) => {
      autoplay ? startTimer() : pauseTimer();
    });
    vue.watch(() => props.loop, () => {
      setActiveItem(activeIndex.value);
    });
    vue.watch(() => props.interval, () => {
      resetTimer();
    });
    const resizeObserver = vue.shallowRef();
    vue.onMounted(async () => {
      await vue.nextTick();
      resizeObserver.value = core.useResizeObserver(root.value, () => {
        resetItemPosition();
      });
      if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
        activeIndex.value = props.initialIndex;
      }
      startTimer();
    });
    vue.onBeforeUnmount(() => {
      pauseTimer();
      if (root.value && resizeObserver.value)
        resizeObserver.value.stop();
    });
    vue.provide(carousel$1.carouselContextKey, {
      root,
      isCardType,
      isVertical,
      items,
      loop: props.loop,
      addItem,
      removeItem,
      setActiveItem
    });
    expose({
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: vue.normalizeClass(vue.unref(carouselClasses)),
        onMouseenter: vue.withModifiers(handleMouseEnter, ["stop"]),
        onMouseleave: vue.withModifiers(handleMouseLeave, ["stop"])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("container")),
          style: vue.normalizeStyle({ height: _ctx.height })
        }, [
          vue.unref(arrowDisplay) ? (vue.openBlock(), vue.createBlock(vue.Transition, {
            key: 0,
            name: "carousel-arrow-left",
            persisted: ""
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("button", {
                type: "button",
                class: vue.normalizeClass([vue.unref(ns).e("arrow"), vue.unref(ns).em("arrow", "left")]),
                onMouseenter: _cache[0] || (_cache[0] = ($event) => handleButtonEnter("left")),
                onMouseleave: handleButtonLeave,
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => vue.unref(throttledArrowClick)(activeIndex.value - 1), ["stop"]))
              }, [
                vue.createVNode(vue.unref(index$1.ElIcon), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.ArrowLeft))
                  ]),
                  _: 1
                })
              ], 34), [
                [
                  vue.vShow,
                  (_ctx.arrow === "always" || hover.value) && (props.loop || activeIndex.value > 0)
                ]
              ])
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true),
          vue.unref(arrowDisplay) ? (vue.openBlock(), vue.createBlock(vue.Transition, {
            key: 1,
            name: "carousel-arrow-right",
            persisted: ""
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("button", {
                type: "button",
                class: vue.normalizeClass([vue.unref(ns).e("arrow"), vue.unref(ns).em("arrow", "right")]),
                onMouseenter: _cache[2] || (_cache[2] = ($event) => handleButtonEnter("right")),
                onMouseleave: handleButtonLeave,
                onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => vue.unref(throttledArrowClick)(activeIndex.value + 1), ["stop"]))
              }, [
                vue.createVNode(vue.unref(index$1.ElIcon), null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.ArrowRight))
                  ]),
                  _: 1
                })
              ], 34), [
                [
                  vue.vShow,
                  (_ctx.arrow === "always" || hover.value) && (props.loop || activeIndex.value < items.value.length - 1)
                ]
              ])
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.indicatorPosition !== "none" ? (vue.openBlock(), vue.createElementBlock("ul", {
          key: 0,
          class: vue.normalizeClass(vue.unref(indicatorsClasses))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(items.value, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("li", {
              key: index,
              class: vue.normalizeClass([
                vue.unref(ns).e("indicator"),
                vue.unref(ns).em("indicator", _ctx.direction),
                vue.unref(ns).is("active", index === activeIndex.value)
              ]),
              onMouseenter: ($event) => vue.unref(throttledIndicatorHover)(index),
              onClick: vue.withModifiers(($event) => handleIndicatorClick(index), ["stop"])
            }, [
              vue.createElementVNode("button", {
                class: vue.normalizeClass(vue.unref(ns).e("button"))
              }, [
                vue.unref(hasLabel) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(item.props.label), 1)) : vue.createCommentVNode("v-if", true)
              ], 2)
            ], 42, _hoisted_2);
          }), 128))
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 42, _hoisted_1);
    };
  }
});
var Carousel = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);

exports["default"] = Carousel;
//# sourceMappingURL=carousel2.js.map
