import type { CollapseActiveName } from './collapse';
declare const _default: import("vue").DefineComponent<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly accordion: BooleanConstructor;
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    }>> & {
        onChange?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", value: import("./collapse").CollapseModelValue) => void) & ((event: "change", value: import("./collapse").CollapseModelValue) => void);
    ns: {
        namespace: import("vue").Ref<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    activeNames: import("vue").Ref<(string | number)[]>;
    setActiveNames: (_activeNames: CollapseActiveName[]) => void;
    handleItemClick: (name: CollapseActiveName) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./collapse").CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    change: (value: import("./collapse").CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
}>> & {
    onChange?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./collapse").CollapseModelValue) => any) | undefined;
}, {
    readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue) | ((new (...args: any[]) => import("./collapse").CollapseModelValue & {}) | (() => import("./collapse").CollapseModelValue))[], unknown, unknown>;
    readonly accordion: boolean;
}>;
export default _default;
