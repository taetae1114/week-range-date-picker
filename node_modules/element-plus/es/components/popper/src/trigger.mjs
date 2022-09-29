import '../../../utils/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props/runtime.mjs';

const usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
});

export { usePopperTriggerProps };
//# sourceMappingURL=trigger.mjs.map
