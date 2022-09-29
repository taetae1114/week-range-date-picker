import '../../utils/index.mjs';
import Checkbox from './src/checkbox2.mjs';
import CheckboxButton from './src/checkbox-button.mjs';
import CheckboxGroup from './src/checkbox-group.mjs';
export { checkboxEmits, checkboxGroupEmits, checkboxProps, useCheckbox, useCheckboxGroup, useCheckboxGroupId, useCheckboxGroupProps } from './src/checkbox.mjs';
import './src/checkbox.type.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install.mjs';

const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
const ElCheckboxButton = withNoopInstall(CheckboxButton);
const ElCheckboxGroup = withNoopInstall(CheckboxGroup);

export { ElCheckbox, ElCheckboxButton, ElCheckboxGroup, ElCheckbox as default };
//# sourceMappingURL=index.mjs.map
