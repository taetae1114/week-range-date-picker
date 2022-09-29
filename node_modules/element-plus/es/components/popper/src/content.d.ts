import type { ExtractPropTypes, StyleValue } from 'vue';
import type { Options, Placement } from '@popperjs/core';
declare type ClassObjectType = Record<string, boolean>;
declare type ClassType = string | ClassObjectType | ClassType[];
export declare const usePopperCoreConfigProps: {
    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
};
export declare const usePopperContentProps: {
    readonly id: StringConstructor;
    readonly style: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => StyleValue & {}) | (() => StyleValue) | ((new (...args: any[]) => StyleValue & {}) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly className: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ClassType & {}) | (() => ClassType) | ((new (...args: any[]) => ClassType & {}) | (() => ClassType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
    readonly visible: BooleanConstructor;
    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly pure: BooleanConstructor;
    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popperClass: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ClassType & {}) | (() => ClassType) | ((new (...args: any[]) => ClassType & {}) | (() => ClassType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popperStyle: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => StyleValue & {}) | (() => StyleValue) | ((new (...args: any[]) => StyleValue & {}) | (() => StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly referenceEl: {
        readonly type: import("vue").PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerTargetEl: {
        readonly type: import("vue").PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly virtualTriggering: BooleanConstructor;
    readonly zIndex: NumberConstructor;
    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | ((new (...args: any[]) => Placement[]) | (() => Placement[]))[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
};
export declare const usePopperContentEmits: string[];
export declare type UsePopperContentProps = ExtractPropTypes<typeof usePopperContentProps>;
export declare type UsePopperCoreConfigProps = ExtractPropTypes<typeof usePopperCoreConfigProps>;
export {};
