'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
var runtime = require('../../../utils/vue/props/runtime.js');

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
const usePopperProps = runtime.buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});

exports.Effect = Effect;
exports.roleTypes = roleTypes;
exports.usePopperProps = usePopperProps;
//# sourceMappingURL=popper.js.map
