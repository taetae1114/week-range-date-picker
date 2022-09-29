'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var checkbox = require('./checkbox.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-common-props/index.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var event = require('../../../constants/event.js');
var error = require('../../../utils/error.js');

const __default__ = {
  name: "ElCheckboxGroup"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: checkbox.useCheckboxGroupProps,
  emits: checkbox.checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { elFormItem } = checkbox.useCheckboxGroup();
    const { groupId, isLabeledByFormItem } = checkbox.useCheckboxGroupId(props, {
      elFormItem
    });
    const checkboxGroupSize = index.useSize();
    const ns = index$1.useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(event.UPDATE_MODEL_EVENT, value);
      vue.nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    vue.provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      ...vue.toRefs(props),
      modelValue,
      checkboxGroupSize,
      changeEvent
    });
    vue.watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        elFormItem == null ? void 0 : elFormItem.validate("change").catch((err) => error.debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        id: vue.unref(groupId),
        class: vue.normalizeClass(vue.unref(ns).b("group")),
        role: "group",
        "aria-label": !vue.unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": vue.unref(isLabeledByFormItem) ? (_a = vue.unref(elFormItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);

exports["default"] = CheckboxGroup;
//# sourceMappingURL=checkbox-group.js.map
