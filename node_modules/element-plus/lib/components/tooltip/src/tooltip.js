'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
require('../../popper/index.js');
require('../../../hooks/index.js');
require('../../../constants/index.js');
var index = require('../../../hooks/use-namespace/index.js');
var runtime = require('../../../utils/vue/props/runtime.js');
var index$1 = require('../../../hooks/use-delayed-toggle/index.js');
var content = require('../../popper/src/content.js');
var index$2 = require('../../../hooks/use-popper-container/index.js');
var trigger = require('../../popper/src/trigger.js');
var aria = require('../../../constants/aria.js');

const triggers = ["hover", "focus", "click", "contextmenu"];
const ns = index.useNamespace("tooltip");
const useTooltipContentProps = runtime.buildProps({
  ...index$1.useDelayedToggleProps,
  ...content.usePopperContentProps,
  appendTo: {
    type: runtime.definePropType([String, Object]),
    default: index$2.POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: runtime.definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = runtime.buildProps({
  ...trigger.usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: runtime.definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: runtime.definePropType(Array),
    default: () => [aria.EVENT_CODE.enter, aria.EVENT_CODE.space]
  }
});
const useTooltipProps = runtime.buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});

exports.useTooltipContentProps = useTooltipContentProps;
exports.useTooltipProps = useTooltipProps;
exports.useTooltipTriggerProps = useTooltipTriggerProps;
//# sourceMappingURL=tooltip.js.map
