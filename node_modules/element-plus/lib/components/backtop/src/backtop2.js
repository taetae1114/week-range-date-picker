'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var index$1 = require('../../icon/index.js');
require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var backtop = require('./backtop.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var animation = require('../../../utils/animation.js');
var error = require('../../../utils/error.js');

const _hoisted_1 = ["onClick"];
const __default__ = {
  name: "ElBacktop"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: backtop.backtopProps,
  emits: backtop.backtopEmits,
  setup(__props, { emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElBacktop";
    const ns = index.useNamespace("backtop");
    const el = vue.shallowRef();
    const container = vue.shallowRef();
    const visible = vue.ref(false);
    const backTopStyle = vue.computed(() => ({
      right: `${props.right}px`,
      bottom: `${props.bottom}px`
    }));
    const scrollToTop = () => {
      if (!el.value)
        return;
      const beginTime = Date.now();
      const beginValue = el.value.scrollTop;
      const frameFunc = () => {
        if (!el.value)
          return;
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - animation.easeInOutCubic(progress));
          requestAnimationFrame(frameFunc);
        } else {
          el.value.scrollTop = 0;
        }
      };
      requestAnimationFrame(frameFunc);
    };
    const handleScroll = () => {
      if (el.value)
        visible.value = el.value.scrollTop >= props.visibilityHeight;
    };
    const handleClick = (event) => {
      scrollToTop();
      emit("click", event);
    };
    const handleScrollThrottled = core.useThrottleFn(handleScroll, 300);
    core.useEventListener(container, "scroll", handleScrollThrottled);
    vue.onMounted(() => {
      var _a;
      container.value = document;
      el.value = document.documentElement;
      if (props.target) {
        el.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!el.value) {
          error.throwError(COMPONENT_NAME, `target is not existed: ${props.target}`);
        }
        container.value = el.value;
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: `${vue.unref(ns).namespace.value}-fade-in`
      }, {
        default: vue.withCtx(() => [
          visible.value ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            style: vue.normalizeStyle(vue.unref(backTopStyle)),
            class: vue.normalizeClass(vue.unref(ns).b()),
            onClick: vue.withModifiers(handleClick, ["stop"])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createVNode(vue.unref(index$1.ElIcon), {
                class: vue.normalizeClass(vue.unref(ns).e("icon"))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(iconsVue.CaretTop))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ], 14, _hoisted_1)) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Backtop = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);

exports["default"] = Backtop;
//# sourceMappingURL=backtop2.js.map
