'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../constants/index.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var index = require('../../../hooks/use-common-props/index.js');
var index$1 = require('../../../hooks/use-form-item/index.js');
var event = require('../../../constants/event.js');
var error = require('../../../utils/error.js');
var core = require('@vueuse/core');

const useCheckboxGroupProps = {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: void 0
  },
  max: {
    type: Number,
    default: void 0
  },
  size: index.useSizeProp,
  id: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  fill: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: void 0
  },
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: index.useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const useCheckboxGroup = () => {
  const { form: elForm, formItem: elFormItem } = index$1.useFormItem();
  const checkboxGroup = vue.inject("CheckboxGroup", {});
  const isGroup = vue.computed(() => checkboxGroup && (checkboxGroup == null ? void 0 : checkboxGroup.name) === "ElCheckboxGroup");
  const elFormItemSize = vue.computed(() => {
    return elFormItem == null ? void 0 : elFormItem.size;
  });
  return {
    isGroup,
    checkboxGroup,
    elForm,
    elFormItemSize,
    elFormItem
  };
};
const useCheckboxGroupId = (props, { elFormItem }) => {
  const { inputId: groupId, isLabeledByFormItem } = index$1.useFormItemInputId(props, {
    formItemContext: elFormItem
  });
  return {
    isLabeledByFormItem,
    groupId
  };
};
const useModel = (props) => {
  const selfModel = vue.ref(false);
  const { emit } = vue.getCurrentInstance();
  const { isGroup, checkboxGroup, elFormItem } = useCheckboxGroup();
  const isLimitExceeded = vue.ref(false);
  const model = vue.computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a;
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = checkboxGroup.max !== void 0 && val.length > checkboxGroup.max.value;
        isLimitExceeded.value === false && ((_a = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _a.call(checkboxGroup, val));
      } else {
        emit(event.UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded,
    elFormItem
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const focus = vue.ref(false);
  const size = index.useSize(checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize, { prop: true });
  const isChecked = vue.computed(() => {
    const value = model.value;
    if (shared.toTypeString(value) === "[object Boolean]") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(vue.toRaw).includes(props.label);
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxSize = index.useSize(vue.computed(() => {
    var _a;
    return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize) == null ? void 0 : _a.value : void 0;
  }));
  const hasOwnLabel = vue.computed(() => {
    return !!(slots.default || props.label);
  });
  return {
    isChecked,
    focus,
    size,
    checkboxSize,
    hasOwnLabel
  };
};
const useDisabled = (props, {
  model,
  isChecked
}) => {
  const { elForm, isGroup, checkboxGroup } = useCheckboxGroup();
  const isLimitDisabled = vue.computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup.min) == null ? void 0 : _b.value;
    return !!(max || min) && model.value.length >= max && !isChecked.value || model.value.length <= min && isChecked.value;
  });
  const isDisabled = vue.computed(() => {
    var _a, _b;
    const disabled = props.disabled || (elForm == null ? void 0 : elForm.disabled);
    return (_b = isGroup.value ? ((_a = checkboxGroup.disabled) == null ? void 0 : _a.value) || disabled || isLimitDisabled.value : disabled) != null ? _b : false;
  });
  return {
    isDisabled,
    isLimitDisabled
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (Array.isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const { elFormItem, checkboxGroup } = useCheckboxGroup();
  const { emit } = vue.getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b;
    return value === props.trueLabel || value === true ? (_a = props.trueLabel) != null ? _a : true : (_b = props.falseLabel) != null ? _b : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
      await vue.nextTick();
      emitChangeEvent(model.value, e);
    }
  }
  const validateEvent = vue.computed(() => {
    var _a;
    return ((_a = checkboxGroup.validateEvent) == null ? void 0 : _a.value) || props.validateEvent;
  });
  vue.watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      elFormItem == null ? void 0 : elFormItem.validate("change").catch((err) => error.debugWarn(err));
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const checkboxEmits = {
  [event.UPDATE_MODEL_EVENT]: (val) => shared.isString(val) || core.isNumber(val) || core.isBoolean(val),
  change: (val) => shared.isString(val) || core.isNumber(val) || core.isBoolean(val)
};
const checkboxGroupEmits = {
  [event.UPDATE_MODEL_EVENT]: (val) => shared.isArray(val),
  change: (val) => shared.isArray(val)
};
const useCheckbox = (props, slots) => {
  const { model, isGroup, isLimitExceeded, elFormItem } = useModel(props);
  const { focus, size, isChecked, checkboxSize, hasOwnLabel } = useCheckboxStatus(props, slots, {
    model
  });
  const { isDisabled } = useDisabled(props, { model, isChecked });
  const { inputId, isLabeledByFormItem } = index$1.useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  setStoreValue(props, { model });
  return {
    elFormItem,
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isGroup,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot,
    focus,
    size
  };
};

exports.checkboxEmits = checkboxEmits;
exports.checkboxGroupEmits = checkboxGroupEmits;
exports.checkboxProps = checkboxProps;
exports.useCheckbox = useCheckbox;
exports.useCheckboxGroup = useCheckboxGroup;
exports.useCheckboxGroupId = useCheckboxGroupId;
exports.useCheckboxGroupProps = useCheckboxGroupProps;
//# sourceMappingURL=checkbox.js.map
