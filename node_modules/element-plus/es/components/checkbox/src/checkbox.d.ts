import type { ComponentInternalInstance, ExtractPropTypes, PropType } from 'vue';
import type { ICheckboxGroupInstance } from './checkbox.type';
import type Checkbox from './checkbox.vue';
export declare const useCheckboxGroupProps: {
    modelValue: {
        type: PropType<(string | number)[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    min: {
        type: NumberConstructor;
        default: undefined;
    };
    max: {
        type: NumberConstructor;
        default: undefined;
    };
    size: {
        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    fill: {
        type: StringConstructor;
        default: undefined;
    };
    textColor: {
        type: StringConstructor;
        default: undefined;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type IUseCheckboxGroupProps = ExtractPropTypes<typeof useCheckboxGroupProps>;
export declare const checkboxProps: {
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: () => undefined;
    };
    label: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const useCheckboxGroup: () => {
    isGroup: import("vue").ComputedRef<boolean>;
    checkboxGroup: ICheckboxGroupInstance;
    elForm: import("../../..").FormContext | undefined;
    elFormItemSize: import("vue").ComputedRef<"" | "default" | "small" | "large" | undefined>;
    elFormItem: import("../../..").FormItemContext | undefined;
};
export declare const useCheckboxGroupId: (props: IUseCheckboxGroupProps, { elFormItem }: Partial<ReturnType<typeof useCheckboxGroup>>) => {
    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
    groupId: import("vue").Ref<string | undefined>;
};
export declare type CheckboxValueType = string | number | boolean;
export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => boolean;
    change: (val: CheckboxValueType) => boolean;
};
export declare const checkboxGroupEmits: {
    "update:modelValue": (val: CheckboxValueType[]) => boolean;
    change: (val: CheckboxValueType[]) => boolean;
};
export declare const useCheckbox: (props: CheckboxProps, slots: ComponentInternalInstance['slots']) => {
    elFormItem: import("../../..").FormItemContext | undefined;
    inputId: import("vue").Ref<string | undefined>;
    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    checkboxSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    hasOwnLabel: import("vue").ComputedRef<boolean>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: Event) => void;
    onClickRoot: (e: MouseEvent) => Promise<void>;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export declare type CheckboxEmits = typeof checkboxEmits;
export declare type CheckboxInstance = InstanceType<typeof Checkbox>;
