import '../../../utils/index.mjs';
import '../../popper/index.mjs';
import '../../../hooks/index.mjs';
import '../../../constants/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props/runtime.mjs';
import { useDelayedToggleProps } from '../../../hooks/use-delayed-toggle/index.mjs';
import { usePopperContentProps } from '../../popper/src/content.mjs';
import { POPPER_CONTAINER_SELECTOR } from '../../../hooks/use-popper-container/index.mjs';
import { usePopperTriggerProps } from '../../popper/src/trigger.mjs';
import { EVENT_CODE } from '../../../constants/aria.mjs';

const triggers = ["hover", "focus", "click", "contextmenu"];
const ns = useNamespace("tooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  appendTo: {
    type: definePropType([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
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
    type: definePropType(Boolean),
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
const useTooltipTriggerProps = buildProps({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const useTooltipProps = buildProps({
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

export { useTooltipContentProps, useTooltipProps, useTooltipTriggerProps };
//# sourceMappingURL=tooltip.mjs.map
