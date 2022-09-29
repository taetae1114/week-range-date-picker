'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../popper/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var content = require('./content.js');
var trigger = require('./trigger.js');
var tooltip = require('./tooltip.js');
var tokens = require('./tokens.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-model-toggle/index.js');
var arrow = require('../../popper/src/arrow2.js');
var popper = require('../../popper/src/popper.js');
var arrow$1 = require('../../popper/src/arrow.js');
var index$2 = require('../../../hooks/use-popper-container/index.js');
var types = require('../../../utils/types.js');
var error = require('../../../utils/error.js');
var core = require('@vueuse/core');
var index$3 = require('../../../hooks/use-id/index.js');
var index$4 = require('../../../hooks/use-delayed-toggle/index.js');

const { useModelToggleProps, useModelToggle, useModelToggleEmits } = index.createModelToggleComposable("visible");
const _sfc_main = vue.defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper: index$1.ElPopper,
    ElPopperArrow: arrow["default"],
    ElTooltipContent: content["default"],
    ElTooltipTrigger: trigger["default"]
  },
  props: {
    ...popper.usePopperProps,
    ...useModelToggleProps,
    ...tooltip.useTooltipContentProps,
    ...tooltip.useTooltipTriggerProps,
    ...arrow$1.usePopperArrowProps,
    ...tooltip.useTooltipProps
  },
  emits: [
    ...useModelToggleEmits,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(props, { emit }) {
    index$2.usePopperContainer();
    const compatShowAfter = vue.computed(() => {
      if (!types.isUndefined(props.openDelay)) {
        error.debugWarn("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead");
      }
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = vue.computed(() => {
      if (!types.isUndefined(props.visibleArrow)) {
        error.debugWarn("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead");
      }
      return core.isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = index$3.useId();
    const popperRef = vue.ref(null);
    const contentRef = vue.ref(null);
    const updatePopper = () => {
      var _a;
      const popperComponent = vue.unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = vue.ref(false);
    const toggleReason = vue.ref(void 0);
    const { show, hide, hasUpdateHandler } = useModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = index$4.useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: vue.toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = vue.computed(() => core.isBoolean(props.visible) && !hasUpdateHandler.value);
    vue.provide(tokens.TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: vue.readonly(open),
      trigger: vue.toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (vue.unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    vue.watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a, _b;
      const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    vue.onDeactivated(() => open.value && hide());
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      contentRef,
      open,
      hide,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = vue.resolveComponent("el-tooltip-trigger");
  const _component_el_popper_arrow = vue.resolveComponent("el-popper-arrow");
  const _component_el_tooltip_content = vue.resolveComponent("el-tooltip-content");
  const _component_el_popper = vue.resolveComponent("el-popper");
  return vue.openBlock(), vue.createBlock(_component_el_popper, {
    ref: "popperRef",
    role: _ctx.role
  }, {
    default: vue.withCtx(() => [
      vue.createVNode(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: vue.withCtx(() => [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      vue.createVNode(_component_el_tooltip_content, {
        ref: "contentRef",
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "trigger-target-el": _ctx.triggerTargetEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "virtual-triggering": _ctx.virtualTriggering,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (vue.openBlock(), vue.createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var Tooltip = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);

exports["default"] = Tooltip;
//# sourceMappingURL=tooltip2.js.map
