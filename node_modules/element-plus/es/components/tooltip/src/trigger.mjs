import { defineComponent, inject, ref, unref, toRef, resolveComponent, openBlock, createBlock, normalizeClass, withCtx, renderSlot } from 'vue';
import '../../popper/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { TOOLTIP_INJECTION_KEY } from './tokens.mjs';
import { useTooltipTriggerProps } from './tooltip.mjs';
import { whenTrigger } from './utils.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ElPopperTrigger from '../../popper/src/trigger2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { composeEventHandlers } from '../../../utils/dom/event.mjs';

const _sfc_main = defineComponent({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup(props) {
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onClick,
      onKeydown,
      open,
      id,
      triggerRef,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_trigger = resolveComponent("el-popper-trigger");
  return openBlock(), createBlock(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: normalizeClass(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);

export { ElTooltipTrigger as default };
//# sourceMappingURL=trigger.mjs.map
