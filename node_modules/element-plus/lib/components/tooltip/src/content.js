'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../popper/index.js');
require('../../../utils/index.js');
var tooltip = require('./tooltip.js');
var tokens = require('./tokens.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var content = require('../../popper/src/content2.js');
var event = require('../../../utils/dom/event.js');

const _sfc_main = vue.defineComponent({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: content["default"]
  },
  inheritAttrs: false,
  props: tooltip.useTooltipContentProps,
  setup(props) {
    const contentRef = vue.ref(null);
    const intermediateOpen = vue.ref(false);
    const entering = vue.ref(false);
    const leaving = vue.ref(false);
    const destroyed = vue.ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = vue.inject(tokens.TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = vue.computed(() => {
      if (process.env.NODE_ENV === "test") {
        return true;
      }
      return props.persistent;
    });
    vue.onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = vue.computed(() => {
      return vue.unref(persistentRef) ? true : vue.unref(open);
    });
    const shouldShow = vue.computed(() => {
      return props.disabled ? false : vue.unref(open);
    });
    const contentStyle = vue.computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = vue.computed(() => !vue.unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (vue.unref(controlled))
        return true;
    };
    const onContentEnter = event.composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && vue.unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = event.composeEventHandlers(stopWhenControlled, () => {
      if (vue.unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = core.onClickOutside(vue.computed(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if (vue.unref(controlled))
          return;
        const $trigger = vue.unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    vue.watch(() => vue.unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      onClose,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
      onBlur
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_content = vue.resolveComponent("el-popper-content");
  return vue.openBlock(), vue.createBlock(vue.Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    vue.createVNode(vue.Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: vue.withCtx(() => [
        _ctx.shouldRender ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_popper_content, vue.mergeProps({
          key: 0,
          id: _ctx.id,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-label": _ctx.ariaLabel,
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          "trigger-target-el": _ctx.triggerTargetEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave,
          onBlur: _ctx.onBlur,
          onClose: _ctx.onClose
        }), {
          default: vue.withCtx(() => [
            vue.createCommentVNode(" Workaround bug #6378 "),
            !_ctx.destroyed ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [vue.vShow, _ctx.shouldShow]
        ]) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);

exports["default"] = ElTooltipContent;
//# sourceMappingURL=content.js.map
