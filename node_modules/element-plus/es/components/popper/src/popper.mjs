import '../../../utils/index.mjs';
import { buildProps } from '../../../utils/vue/props/runtime.mjs';

const effects = ["light", "dark"];
const triggers = ["click", "contextmenu", "hover", "focus"];
const Effect = {
  LIGHT: "light",
  DARK: "dark"
};
const roleTypes = [
  "dialog",
  "grid",
  "listbox",
  "menu",
  "tooltip",
  "tree"
];
const usePopperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});

export { Effect, roleTypes, usePopperProps };
//# sourceMappingURL=popper.mjs.map
