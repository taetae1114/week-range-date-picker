'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
require('../../tooltip/index.js');
require('../../dropdown/index.js');
var runtime = require('../../../utils/vue/props/runtime.js');
var tooltip = require('../../tooltip/src/tooltip.js');
var dropdown = require('../../dropdown/src/dropdown.js');
var core = require('@vueuse/core');

const popoverProps = runtime.buildProps({
  trigger: tooltip.useTooltipTriggerProps.trigger,
  placement: dropdown.dropdownProps.placement,
  disabled: tooltip.useTooltipTriggerProps.disabled,
  visible: tooltip.useTooltipContentProps.visible,
  transition: tooltip.useTooltipContentProps.transition,
  popperOptions: dropdown.dropdownProps.popperOptions,
  tabindex: dropdown.dropdownProps.tabindex,
  content: tooltip.useTooltipContentProps.content,
  popperStyle: tooltip.useTooltipContentProps.popperStyle,
  popperClass: tooltip.useTooltipContentProps.popperClass,
  enterable: {
    ...tooltip.useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...tooltip.useTooltipContentProps.effect,
    default: "light"
  },
  teleported: tooltip.useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => core.isBoolean(value),
  "before-enter": () => true,
  "before-leave": () => true,
  "after-enter": () => true,
  "after-leave": () => true
};

exports.popoverEmits = popoverEmits;
exports.popoverProps = popoverProps;
//# sourceMappingURL=popover.js.map
