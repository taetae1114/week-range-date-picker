'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
var index = require('../../button/index.js');
var index$3 = require('../../icon/index.js');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var index$1 = require('../../tooltip/index.js');
var index$2 = require('../../input/index.js');
require('../../../constants/index.js');
require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
var alphaSlider = require('./components/alpha-slider.js');
var hueSlider = require('./components/hue-slider.js');
var predefine = require('./components/predefine.js');
var svPanel = require('./components/sv-panel.js');
var color = require('./color.js');
var useOption = require('./useOption.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$4 = require('../../../directives/click-outside/index.js');
var validator = require('../../../utils/vue/validator.js');
var event = require('../../../constants/event.js');
var index$5 = require('../../../hooks/use-locale/index.js');
var index$6 = require('../../../hooks/use-namespace/index.js');
var index$7 = require('../../../hooks/use-form-item/index.js');
var index$8 = require('../../../hooks/use-common-props/index.js');
var error = require('../../../utils/error.js');

const _sfc_main = vue.defineComponent({
  name: "ElColorPicker",
  components: {
    ElButton: index.ElButton,
    ElTooltip: index$1.ElTooltip,
    ElInput: index$2.ElInput,
    ElIcon: index$3.ElIcon,
    Close: iconsVue.Close,
    ArrowDown: iconsVue.ArrowDown,
    SvPanel: svPanel["default"],
    HueSlider: hueSlider["default"],
    AlphaSlider: alphaSlider["default"],
    Predefine: predefine["default"]
  },
  directives: {
    ClickOutside: index$4["default"]
  },
  props: {
    modelValue: String,
    id: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String,
      validator: validator.isValidComponentSize
    },
    popperClass: String,
    label: {
      type: String,
      default: void 0
    },
    tabindex: {
      type: [String, Number],
      default: 0
    },
    predefine: Array,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  emits: ["change", "active-change", event.UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const { t } = index$5.useLocale();
    const ns = index$6.useNamespace("color");
    const { form, formItem } = index$7.useFormItem();
    const { inputId: buttonId, isLabeledByFormItem } = index$7.useFormItemInputId(props, {
      formItemContext: formItem
    });
    const hue = vue.ref();
    const svPanel = vue.ref();
    const alpha = vue.ref();
    const popper = vue.ref(null);
    let shouldActiveChange = true;
    const color$1 = vue.reactive(new color["default"]({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || "",
      value: props.modelValue
    }));
    const showPicker = vue.ref(false);
    const showPanelColor = vue.ref(false);
    const customInput = vue.ref("");
    const displayedColor = vue.computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return "transparent";
      }
      return displayedRgb(color$1, props.showAlpha);
    });
    const colorSize = index$8.useSize();
    const colorDisabled = vue.computed(() => {
      return !!(props.disabled || (form == null ? void 0 : form.disabled));
    });
    const currentColor = vue.computed(() => {
      return !props.modelValue && !showPanelColor.value ? "" : color$1.value;
    });
    const buttonAriaLabel = vue.computed(() => {
      return !isLabeledByFormItem.value ? props.label || t("el.colorpicker.defaultLabel") : void 0;
    });
    const buttonAriaLabelledby = vue.computed(() => {
      return isLabeledByFormItem.value ? formItem == null ? void 0 : formItem.labelId : void 0;
    });
    vue.watch(() => props.modelValue, (newVal) => {
      if (!newVal) {
        showPanelColor.value = false;
      } else if (newVal && newVal !== color$1.value) {
        shouldActiveChange = false;
        color$1.fromString(newVal);
      }
    });
    vue.watch(() => currentColor.value, (val) => {
      customInput.value = val;
      shouldActiveChange && emit("active-change", val);
      shouldActiveChange = true;
    });
    vue.watch(() => color$1.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true;
      }
    });
    function displayedRgb(color2, showAlpha) {
      if (!(color2 instanceof color["default"])) {
        throw new TypeError("color should be instance of _color Class");
      }
      const { r, g, b } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color2.get("alpha") / 100})` : `rgb(${r}, ${g}, ${b})`;
    }
    function setShowPicker(value) {
      showPicker.value = value;
    }
    const debounceSetShowPicker = lodashUnified.debounce(setShowPicker, 100);
    function hide() {
      debounceSetShowPicker(false);
      resetColor();
    }
    function resetColor() {
      vue.nextTick(() => {
        if (props.modelValue) {
          color$1.fromString(props.modelValue);
        } else {
          color$1.value = "";
          vue.nextTick(() => {
            showPanelColor.value = false;
          });
        }
      });
    }
    function handleTrigger() {
      if (colorDisabled.value)
        return;
      debounceSetShowPicker(!showPicker.value);
    }
    function handleConfirm() {
      color$1.fromString(customInput.value);
    }
    function confirmValue() {
      const value = color$1.value;
      emit(event.UPDATE_MODEL_EVENT, value);
      emit("change", value);
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => error.debugWarn(err));
      }
      debounceSetShowPicker(false);
      vue.nextTick(() => {
        const newColor = new color["default"]({
          enableAlpha: props.showAlpha,
          format: props.colorFormat || "",
          value: props.modelValue
        });
        if (!color$1.compare(newColor)) {
          resetColor();
        }
      });
    }
    function clear() {
      debounceSetShowPicker(false);
      emit(event.UPDATE_MODEL_EVENT, null);
      emit("change", null);
      if (props.modelValue !== null && props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => error.debugWarn(err));
      }
      resetColor();
    }
    vue.onMounted(() => {
      if (props.modelValue) {
        customInput.value = currentColor.value;
      }
    });
    vue.watch(() => showPicker.value, () => {
      vue.nextTick(() => {
        var _a, _b, _c;
        (_a = hue.value) == null ? void 0 : _a.update();
        (_b = svPanel.value) == null ? void 0 : _b.update();
        (_c = alpha.value) == null ? void 0 : _c.update();
      });
    });
    vue.provide(useOption.OPTIONS_KEY, {
      currentColor
    });
    return {
      color: color$1,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      buttonId,
      buttonAriaLabel,
      buttonAriaLabelledby,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      ns,
      hue,
      svPanel,
      alpha,
      popper
    };
  }
});
const _hoisted_1 = ["id", "aria-label", "aria-labelledby", "aria-description", "tabindex"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hue_slider = vue.resolveComponent("hue-slider");
  const _component_sv_panel = vue.resolveComponent("sv-panel");
  const _component_alpha_slider = vue.resolveComponent("alpha-slider");
  const _component_predefine = vue.resolveComponent("predefine");
  const _component_el_input = vue.resolveComponent("el-input");
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_arrow_down = vue.resolveComponent("arrow-down");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_close = vue.resolveComponent("close");
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  const _directive_click_outside = vue.resolveDirective("click-outside");
  return vue.openBlock(), vue.createBlock(_component_el_tooltip, {
    ref: "popper",
    visible: _ctx.showPicker,
    "show-arrow": false,
    "fallback-placements": ["bottom", "top", "right", "left"],
    offset: 0,
    "gpu-acceleration": false,
    "popper-class": [_ctx.ns.be("picker", "panel"), _ctx.ns.b("dropdown"), _ctx.popperClass],
    "stop-popper-mouse-event": false,
    effect: "light",
    trigger: "click",
    transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
    persistent: ""
  }, {
    content: vue.withCtx(() => [
      vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.be("dropdown", "main-wrapper"))
        }, [
          vue.createVNode(_component_hue_slider, {
            ref: "hue",
            class: "hue-slider",
            color: _ctx.color,
            vertical: ""
          }, null, 8, ["color"]),
          vue.createVNode(_component_sv_panel, {
            ref: "svPanel",
            color: _ctx.color
          }, null, 8, ["color"])
        ], 2),
        _ctx.showAlpha ? (vue.openBlock(), vue.createBlock(_component_alpha_slider, {
          key: 0,
          ref: "alpha",
          color: _ctx.color
        }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
        _ctx.predefine ? (vue.openBlock(), vue.createBlock(_component_predefine, {
          key: 1,
          ref: "predefine",
          color: _ctx.color,
          colors: _ctx.predefine
        }, null, 8, ["color", "colors"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.be("dropdown", "btns"))
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(_ctx.ns.be("dropdown", "value"))
          }, [
            vue.createVNode(_component_el_input, {
              modelValue: _ctx.customInput,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.customInput = $event),
              "validate-event": false,
              size: "small",
              onKeyup: vue.withKeys(_ctx.handleConfirm, ["enter"]),
              onBlur: _ctx.handleConfirm
            }, null, 8, ["modelValue", "onKeyup", "onBlur"])
          ], 2),
          vue.createVNode(_component_el_button, {
            class: vue.normalizeClass(_ctx.ns.be("dropdown", "link-btn")),
            text: "",
            size: "small",
            onClick: _ctx.clear
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.t("el.colorpicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class", "onClick"]),
          vue.createVNode(_component_el_button, {
            plain: "",
            size: "small",
            class: vue.normalizeClass(_ctx.ns.be("dropdown", "btn")),
            onClick: _ctx.confirmValue
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.t("el.colorpicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "onClick"])
        ], 2)
      ])), [
        [_directive_click_outside, _ctx.hide]
      ])
    ]),
    default: vue.withCtx(() => [
      vue.createElementVNode("div", {
        id: _ctx.buttonId,
        class: vue.normalizeClass([
          _ctx.ns.b("picker"),
          _ctx.ns.is("disabled", _ctx.colorDisabled),
          _ctx.ns.bm("picker", _ctx.colorSize)
        ]),
        role: "button",
        "aria-label": _ctx.buttonAriaLabel,
        "aria-labelledby": _ctx.buttonAriaLabelledby,
        "aria-description": _ctx.t("el.colorpicker.description", { color: _ctx.modelValue || "" }),
        tabindex: _ctx.tabindex,
        onKeydown: _cache[2] || (_cache[2] = vue.withKeys((...args) => _ctx.handleTrigger && _ctx.handleTrigger(...args), ["enter"]))
      }, [
        _ctx.colorDisabled ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(_ctx.ns.be("picker", "mask"))
        }, null, 2)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.be("picker", "trigger")),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleTrigger && _ctx.handleTrigger(...args))
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass([_ctx.ns.be("picker", "color"), _ctx.ns.is("alpha", _ctx.showAlpha)])
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(_ctx.ns.be("picker", "color-inner")),
              style: vue.normalizeStyle({
                backgroundColor: _ctx.displayedColor
              })
            }, [
              vue.withDirectives(vue.createVNode(_component_el_icon, {
                class: vue.normalizeClass([_ctx.ns.be("picker", "icon"), _ctx.ns.is("icon-arrow-down")])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_arrow_down)
                ]),
                _: 1
              }, 8, ["class"]), [
                [vue.vShow, _ctx.modelValue || _ctx.showPanelColor]
              ]),
              !_ctx.modelValue && !_ctx.showPanelColor ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 0,
                class: vue.normalizeClass([_ctx.ns.be("picker", "empty"), _ctx.ns.is("icon-close")])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_close)
                ]),
                _: 1
              }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
            ], 6)
          ], 2)
        ], 2)
      ], 42, _hoisted_1)
    ]),
    _: 1
  }, 8, ["visible", "popper-class", "transition"]);
}
var ColorPicker = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/index.vue"]]);

exports["default"] = ColorPicker;
//# sourceMappingURL=index.js.map
