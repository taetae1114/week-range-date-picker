import '../../utils/index.mjs';
import Tooltip from './src/tooltip2.mjs';
export { useTooltipContentProps, useTooltipProps, useTooltipTriggerProps } from './src/tooltip.mjs';
export { TOOLTIP_INJECTION_KEY } from './src/tokens.mjs';
import { withInstall } from '../../utils/vue/install.mjs';

const ElTooltip = withInstall(Tooltip);

export { ElTooltip, ElTooltip as default };
//# sourceMappingURL=index.mjs.map
