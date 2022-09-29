import { defineComponent, nextTick, computed, provide, toRefs, watch, openBlock, createBlock, resolveDynamicComponent, unref, normalizeClass, withCtx, renderSlot } from 'vue';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { useCheckboxGroupProps, checkboxGroupEmits, useCheckboxGroup, useCheckboxGroupId } from './checkbox.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';
import { debugWarn } from '../../../utils/error.mjs';

const __default__ = {
  name: "ElCheckboxGroup"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: useCheckboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { elFormItem } = useCheckboxGroup();
    const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
      elFormItem
    });
    const checkboxGroupSize = useSize();
    const ns = useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      ...toRefs(props),
      modelValue,
      checkboxGroupSize,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        elFormItem == null ? void 0 : elFormItem.validate("change").catch((err) => debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(elFormItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);

export { CheckboxGroup as default };
//# sourceMappingURL=checkbox-group.mjs.map
