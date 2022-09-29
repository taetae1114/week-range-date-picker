import { defineComponent, ref, reactive, computed, watch, nextTick, onMounted, provide, resolveComponent, resolveDirective, openBlock, createBlock, withCtx, withDirectives, createElementBlock, createElementVNode, normalizeClass, createVNode, createCommentVNode, withKeys, createTextVNode, toDisplayString, normalizeStyle, vShow } from 'vue';
import { debounce } from 'lodash-unified';
import { ElButton } from '../../button/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../directives/index.mjs';
import '../../../hooks/index.mjs';
import { ElTooltip } from '../../tooltip/index.mjs';
import { ElInput } from '../../input/index.mjs';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import { Close, ArrowDown } from '@element-plus/icons-vue';
import AlphaSlider from './components/alpha-slider.mjs';
import HueSlider from './components/hue-slider.mjs';
import Predefine from './components/predefine.mjs';
import SvPanel from './components/sv-panel.mjs';
import Color from './color.mjs';
import { OPTIONS_KEY } from './useOption.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';
import { isValidComponentSize } from '../../../utils/vue/validator.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useFormItem, useFormItemInputId } from '../../../hooks/use-form-item/index.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { debugWarn } from '../../../utils/error.mjs';

const _sfc_main = defineComponent({
  name: "ElColorPicker",
  components: {
    ElButton,
    ElTooltip,
    ElInput,
    ElIcon,
    Close,
    ArrowDown,
    SvPanel,
    HueSlider,
    AlphaSlider,
    Predefine
  },
  directives: {
    ClickOutside
  },
  props: {
    modelValue: String,
    id: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
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
  emits: ["change", "active-change", UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const { t } = useLocale();
    const ns = useNamespace("color");
    const { form, formItem } = useFormItem();
    const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const hue = ref();
    const svPanel = ref();
    const alpha = ref();
    const popper = ref(null);
    let shouldActiveChange = true;
    const color = reactive(new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || "",
      value: props.modelValue
    }));
    const showPicker = ref(false);
    const showPanelColor = ref(false);
    const customInput = ref("");
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return "transparent";
      }
      return displayedRgb(color, props.showAlpha);
    });
    const colorSize = useSize();
    const colorDisabled = computed(() => {
      return !!(props.disabled || (form == null ? void 0 : form.disabled));
    });
    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? "" : color.value;
    });
    const buttonAriaLabel = computed(() => {
      return !isLabeledByFormItem.value ? props.label || t("el.colorpicker.defaultLabel") : void 0;
    });
    const buttonAriaLabelledby = computed(() => {
      return isLabeledByFormItem.value ? formItem == null ? void 0 : formItem.labelId : void 0;
    });
    watch(() => props.modelValue, (newVal) => {
      if (!newVal) {
        showPanelColor.value = false;
      } else if (newVal && newVal !== color.value) {
        shouldActiveChange = false;
        color.fromString(newVal);
      }
    });
    watch(() => currentColor.value, (val) => {
      customInput.value = val;
      shouldActiveChange && emit("active-change", val);
      shouldActiveChange = true;
    });
    watch(() => color.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true;
      }
    });
    function displayedRgb(color2, showAlpha) {
      if (!(color2 instanceof Color)) {
        throw new TypeError("color should be instance of _color Class");
      }
      const { r, g, b } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color2.get("alpha") / 100})` : `rgb(${r}, ${g}, ${b})`;
    }
    function setShowPicker(value) {
      showPicker.value = value;
    }
    const debounceSetShowPicker = debounce(setShowPicker, 100);
    function hide() {
      debounceSetShowPicker(false);
      resetColor();
    }
    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue);
        } else {
          color.value = "";
          nextTick(() => {
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
      color.fromString(customInput.value);
    }
    function confirmValue() {
      const value = color.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit("change", value);
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
      debounceSetShowPicker(false);
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat || "",
          value: props.modelValue
        });
        if (!color.compare(newColor)) {
          resetColor();
        }
      });
    }
    function clear() {
      debounceSetShowPicker(false);
      emit(UPDATE_MODEL_EVENT, null);
      emit("change", null);
      if (props.modelValue !== null && props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
      resetColor();
    }
    onMounted(() => {
      if (props.modelValue) {
        customInput.value = currentColor.value;
      }
    });
    watch(() => showPicker.value, () => {
      nextTick(() => {
        var _a, _b, _c;
        (_a = hue.value) == null ? void 0 : _a.update();
        (_b = svPanel.value) == null ? void 0 : _b.update();
        (_c = alpha.value) == null ? void 0 : _c.update();
      });
    });
    provide(OPTIONS_KEY, {
      currentColor
    });
    return {
      color,
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
  const _component_hue_slider = resolveComponent("hue-slider");
  const _component_sv_panel = resolveComponent("sv-panel");
  const _component_alpha_slider = resolveComponent("alpha-slider");
  const _component_predefine = resolveComponent("predefine");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
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
    content: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", null, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.be("dropdown", "main-wrapper"))
        }, [
          createVNode(_component_hue_slider, {
            ref: "hue",
            class: "hue-slider",
            color: _ctx.color,
            vertical: ""
          }, null, 8, ["color"]),
          createVNode(_component_sv_panel, {
            ref: "svPanel",
            color: _ctx.color
          }, null, 8, ["color"])
        ], 2),
        _ctx.showAlpha ? (openBlock(), createBlock(_component_alpha_slider, {
          key: 0,
          ref: "alpha",
          color: _ctx.color
        }, null, 8, ["color"])) : createCommentVNode("v-if", true),
        _ctx.predefine ? (openBlock(), createBlock(_component_predefine, {
          key: 1,
          ref: "predefine",
          color: _ctx.color,
          colors: _ctx.predefine
        }, null, 8, ["color", "colors"])) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.be("dropdown", "btns"))
        }, [
          createElementVNode("span", {
            class: normalizeClass(_ctx.ns.be("dropdown", "value"))
          }, [
            createVNode(_component_el_input, {
              modelValue: _ctx.customInput,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.customInput = $event),
              "validate-event": false,
              size: "small",
              onKeyup: withKeys(_ctx.handleConfirm, ["enter"]),
              onBlur: _ctx.handleConfirm
            }, null, 8, ["modelValue", "onKeyup", "onBlur"])
          ], 2),
          createVNode(_component_el_button, {
            class: normalizeClass(_ctx.ns.be("dropdown", "link-btn")),
            text: "",
            size: "small",
            onClick: _ctx.clear
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.t("el.colorpicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class", "onClick"]),
          createVNode(_component_el_button, {
            plain: "",
            size: "small",
            class: normalizeClass(_ctx.ns.be("dropdown", "btn")),
            onClick: _ctx.confirmValue
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.t("el.colorpicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "onClick"])
        ], 2)
      ])), [
        [_directive_click_outside, _ctx.hide]
      ])
    ]),
    default: withCtx(() => [
      createElementVNode("div", {
        id: _ctx.buttonId,
        class: normalizeClass([
          _ctx.ns.b("picker"),
          _ctx.ns.is("disabled", _ctx.colorDisabled),
          _ctx.ns.bm("picker", _ctx.colorSize)
        ]),
        role: "button",
        "aria-label": _ctx.buttonAriaLabel,
        "aria-labelledby": _ctx.buttonAriaLabelledby,
        "aria-description": _ctx.t("el.colorpicker.description", { color: _ctx.modelValue || "" }),
        tabindex: _ctx.tabindex,
        onKeydown: _cache[2] || (_cache[2] = withKeys((...args) => _ctx.handleTrigger && _ctx.handleTrigger(...args), ["enter"]))
      }, [
        _ctx.colorDisabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.ns.be("picker", "mask"))
        }, null, 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.be("picker", "trigger")),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleTrigger && _ctx.handleTrigger(...args))
        }, [
          createElementVNode("span", {
            class: normalizeClass([_ctx.ns.be("picker", "color"), _ctx.ns.is("alpha", _ctx.showAlpha)])
          }, [
            createElementVNode("span", {
              class: normalizeClass(_ctx.ns.be("picker", "color-inner")),
              style: normalizeStyle({
                backgroundColor: _ctx.displayedColor
              })
            }, [
              withDirectives(createVNode(_component_el_icon, {
                class: normalizeClass([_ctx.ns.be("picker", "icon"), _ctx.ns.is("icon-arrow-down")])
              }, {
                default: withCtx(() => [
                  createVNode(_component_arrow_down)
                ]),
                _: 1
              }, 8, ["class"]), [
                [vShow, _ctx.modelValue || _ctx.showPanelColor]
              ]),
              !_ctx.modelValue && !_ctx.showPanelColor ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.ns.be("picker", "empty"), _ctx.ns.is("icon-close")])
              }, {
                default: withCtx(() => [
                  createVNode(_component_close)
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 6)
          ], 2)
        ], 2)
      ], 42, _hoisted_1)
    ]),
    _: 1
  }, 8, ["visible", "popper-class", "transition"]);
}
var ColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/index.vue"]]);

export { ColorPicker as default };
//# sourceMappingURL=index.mjs.map
