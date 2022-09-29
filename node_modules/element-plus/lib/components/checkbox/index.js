'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index.js');
var checkbox$1 = require('./src/checkbox2.js');
var checkboxButton = require('./src/checkbox-button.js');
var checkboxGroup = require('./src/checkbox-group.js');
var checkbox = require('./src/checkbox.js');
require('./src/checkbox.type.js');
var install = require('../../utils/vue/install.js');

const ElCheckbox = install.withInstall(checkbox$1["default"], {
  CheckboxButton: checkboxButton["default"],
  CheckboxGroup: checkboxGroup["default"]
});
const ElCheckboxButton = install.withNoopInstall(checkboxButton["default"]);
const ElCheckboxGroup = install.withNoopInstall(checkboxGroup["default"]);

exports.checkboxEmits = checkbox.checkboxEmits;
exports.checkboxGroupEmits = checkbox.checkboxGroupEmits;
exports.checkboxProps = checkbox.checkboxProps;
exports.useCheckbox = checkbox.useCheckbox;
exports.useCheckboxGroup = checkbox.useCheckboxGroup;
exports.useCheckboxGroupId = checkbox.useCheckboxGroupId;
exports.useCheckboxGroupProps = checkbox.useCheckboxGroupProps;
exports.ElCheckbox = ElCheckbox;
exports.ElCheckboxButton = ElCheckboxButton;
exports.ElCheckboxGroup = ElCheckboxGroup;
exports["default"] = ElCheckbox;
//# sourceMappingURL=index.js.map
