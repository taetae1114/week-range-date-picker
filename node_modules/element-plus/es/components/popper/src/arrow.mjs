import '../../../utils/index.mjs';
import { buildProps } from '../../../utils/vue/props/runtime.mjs';

const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});

export { usePopperArrowProps };
//# sourceMappingURL=arrow.mjs.map
