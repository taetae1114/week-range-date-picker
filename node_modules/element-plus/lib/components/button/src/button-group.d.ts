import type { ExtractPropTypes } from 'vue';
import type buttonGroup from './button-group.vue';
export declare const buttonGroupProps: {
    readonly size: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: import("../../../utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
};
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
export declare type ButtonGroupInstance = InstanceType<typeof buttonGroup>;
