'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index.js');
var index$2 = require('../../collapse-transition/index.js');
var index$1 = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var collapseItem = require('./collapse-item.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var collapse = require('../../../tokens/collapse.js');
var index = require('../../../hooks/use-namespace/index.js');
var rand = require('../../../utils/rand.js');

const _hoisted_1 = ["aria-expanded", "aria-controls", "aria-describedby"];
const _hoisted_2 = ["id", "tabindex", "onKeypress"];
const _hoisted_3 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = {
  name: "ElCollapseItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: collapseItem.collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const collapse$1 = vue.inject(collapse.collapseContextKey);
    const ns = index.useNamespace("collapse");
    const focusing = vue.ref(false);
    const isClick = vue.ref(false);
    const id = vue.ref(rand.generateId());
    const isActive = vue.computed(() => collapse$1 == null ? void 0 : collapse$1.activeNames.value.includes(props.name));
    const handleFocus = () => {
      setTimeout(() => {
        if (!isClick.value) {
          focusing.value = true;
        } else {
          isClick.value = false;
        }
      }, 50);
    };
    const handleHeaderClick = () => {
      if (props.disabled)
        return;
      collapse$1 == null ? void 0 : collapse$1.handleItemClick(props.name);
      focusing.value = false;
      isClick.value = true;
    };
    const handleEnterClick = () => {
      collapse$1 == null ? void 0 : collapse$1.handleItemClick(props.name);
    };
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          vue.unref(ns).b("item"),
          vue.unref(ns).is("active", vue.unref(isActive)),
          vue.unref(ns).is("disabled", _ctx.disabled)
        ])
      }, [
        vue.createElementVNode("div", {
          role: "tab",
          "aria-expanded": vue.unref(isActive),
          "aria-controls": vue.unref(ns).b(`content-${id.value}`),
          "aria-describedby": vue.unref(ns).b(`content-${id.value}`)
        }, [
          vue.createElementVNode("div", {
            id: vue.unref(ns).b(`head-${id.value}`),
            class: vue.normalizeClass([
              vue.unref(ns).be("item", "header"),
              vue.unref(ns).is("active", vue.unref(isActive)),
              { focusing: focusing.value && !_ctx.disabled }
            ]),
            role: "button",
            tabindex: _ctx.disabled ? -1 : 0,
            onClick: handleHeaderClick,
            onKeypress: vue.withKeys(vue.withModifiers(handleEnterClick, ["stop", "prevent"]), ["space", "enter"]),
            onFocus: handleFocus,
            onBlur: _cache[0] || (_cache[0] = ($event) => focusing.value = false)
          }, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
            ]),
            vue.createVNode(vue.unref(index$1.ElIcon), {
              class: vue.normalizeClass([vue.unref(ns).be("item", "arrow"), vue.unref(ns).is("active", vue.unref(isActive))])
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(iconsVue.ArrowRight))
              ]),
              _: 1
            }, 8, ["class"])
          ], 42, _hoisted_2)
        ], 8, _hoisted_1),
        vue.createVNode(vue.unref(index$2["default"]), null, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              id: vue.unref(ns).b(`content-${id.value}`),
              class: vue.normalizeClass(vue.unref(ns).be("item", "wrap")),
              role: "tabpanel",
              "aria-hidden": !vue.unref(isActive),
              "aria-labelledby": vue.unref(ns).b(`head-${id.value}`)
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).be("item", "content"))
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, _hoisted_3), [
              [vue.vShow, vue.unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);

exports["default"] = CollapseItem;
//# sourceMappingURL=collapse-item2.js.map
