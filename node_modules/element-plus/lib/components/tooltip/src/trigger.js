'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../popper/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var tokens = require('./tokens.js');
var tooltip = require('./tooltip.js');
var utils = require('./utils.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var trigger = require('../../popper/src/trigger2.js');
var index = require('../../../hooks/use-namespace/index.js');
var event = require('../../../utils/dom/event.js');

const _sfc_main = vue.defineComponent({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: trigger["default"]
  },
  props: tooltip.useTooltipTriggerProps,
  setup(props) {
    const ns = index.useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = vue.inject(tokens.TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = vue.ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (vue.unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = vue.toRef(props, "trigger");
    const onMouseenter = event.composeEventHandlers(stopWhenControlledOrDisabled, utils.whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = event.composeEventHandlers(stopWhenControlledOrDisabled, utils.whenTrigger(trigger, "hover", onClose));
    const onClick = event.composeEventHandlers(stopWhenControlledOrDisabled, utils.whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = event.composeEventHandlers(stopWhenControlledOrDisabled, utils.whenTrigger(trigger, "focus", onOpen));
    const onBlur = event.composeEventHandlers(stopWhenControlledOrDisabled, utils.whenTrigger(trigger, "focus", onClose));
    const onContextMenu = event.composeEventHandlers(stopWhenControlledOrDisabled, utils.whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = event.composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
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
  const _component_el_popper_trigger = vue.resolveComponent("el-popper-trigger");
  return vue.openBlock(), vue.createBlock(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: vue.normalizeClass(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);

exports["default"] = ElTooltipTrigger;
//# sourceMappingURL=trigger.js.map
