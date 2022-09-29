'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index.js');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var col = require('./col.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var row = require('../../../tokens/row.js');
var index = require('../../../hooks/use-namespace/index.js');
var core = require('@vueuse/core');
var shared = require('@vue/shared');

const __default__ = {
  name: "ElCol"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: col.colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = vue.inject(row.rowContextKey, { gutter: vue.computed(() => 0) });
    const ns = index.useNamespace("col");
    const style = vue.computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    const classes = vue.computed(() => {
      const classes2 = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (core.isNumber(size)) {
          if (prop === "span")
            classes2.push(ns.b(`${props[prop]}`));
          else if (size > 0)
            classes2.push(ns.b(`${prop}-${props[prop]}`));
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (core.isNumber(props[size])) {
          classes2.push(ns.b(`${size}-${props[size]}`));
        } else if (shared.isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes2.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
          });
        }
      });
      if (gutter.value) {
        classes2.push(ns.is("guttered"));
      }
      return classes2;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(classes)]),
        style: vue.normalizeStyle(vue.unref(style))
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Col = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);

exports["default"] = Col;
//# sourceMappingURL=col2.js.map
