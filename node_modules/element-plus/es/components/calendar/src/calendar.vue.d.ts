import dayjs from 'dayjs';
import type { CalendarDateType } from './calendar';
import type { ComputedRef } from 'vue';
import type { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<Date>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly range: {
        readonly type: import("vue").PropType<[Date, Date]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    COMPONENT_NAME: string;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: {
            readonly type: import("vue").PropType<Date>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly range: {
            readonly type: import("vue").PropType<[Date, Date]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
        onInput?: ((value: Date) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", value: Date) => void) & ((event: "input", value: Date) => void);
    solts: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
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
    t: import("element-plus/es/hooks").Translator;
    lang: import("vue").Ref<string>;
    selectedDay: import("vue").Ref<dayjs.Dayjs | undefined>;
    now: dayjs.Dayjs;
    realSelectedDay: import("vue").WritableComputedRef<dayjs.Dayjs | undefined>;
    validatedRange: ComputedRef<[dayjs.Dayjs, dayjs.Dayjs][]>;
    date: ComputedRef<dayjs.Dayjs>;
    prevMonthDayjs: ComputedRef<dayjs.Dayjs>;
    nextMonthDayjs: ComputedRef<dayjs.Dayjs>;
    prevYearDayjs: ComputedRef<dayjs.Dayjs>;
    nextYearDayjs: ComputedRef<dayjs.Dayjs>;
    i18nDate: ComputedRef<string>;
    calculateValidatedDateRange: (startDayjs: Dayjs, endDayjs: Dayjs) => [Dayjs, Dayjs][];
    pickDay: (day: Dayjs) => void;
    selectDate: (type: CalendarDateType) => void;
    ElButton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        readonly icon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly plain: BooleanConstructor;
        readonly text: BooleanConstructor;
        readonly link: BooleanConstructor;
        readonly bg: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
            readonly icon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
            readonly loading: BooleanConstructor;
            readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
            readonly plain: BooleanConstructor;
            readonly text: BooleanConstructor;
            readonly link: BooleanConstructor;
            readonly bg: BooleanConstructor;
            readonly autofocus: BooleanConstructor;
            readonly round: BooleanConstructor;
            readonly circle: BooleanConstructor;
            readonly color: StringConstructor;
            readonly dark: BooleanConstructor;
            readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }>>;
        emit: (event: "click", evt: MouseEvent) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        buttonGroupContext: import("../../..").ButtonGroupContext | undefined;
        globalConfig: import("vue").Ref<import("element-plus/es/components/button").ButtonConfigContext | undefined>;
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
        form: import("../../..").FormContext | undefined;
        _size: ComputedRef<"" | "default" | "small" | "large">;
        _disabled: ComputedRef<boolean>;
        _ref: import("vue").Ref<HTMLButtonElement | undefined>;
        _type: ComputedRef<"" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text">;
        autoInsertSpace: ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        shouldAddSpace: ComputedRef<boolean>;
        buttonStyle: ComputedRef<Record<string, string>>;
        handleClick: (evt: MouseEvent) => void;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
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
            style: ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        readonly icon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly plain: BooleanConstructor;
        readonly text: BooleanConstructor;
        readonly link: BooleanConstructor;
        readonly bg: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
        readonly text: boolean;
        readonly nativeType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
        readonly autoInsertSpace: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly plain: boolean;
        readonly link: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    }>> & {
        ButtonGroup: import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        }>>, {
            readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
        }>;
    };
    ElButtonGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown, "", boolean>;
    }>>, {
        readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    }>>;
    DateTable: import("vue").DefineComponent<{
        readonly selectedDay: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly range: {
            readonly type: import("vue").PropType<[dayjs.Dayjs, dayjs.Dayjs]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly date: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideHeader: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly selectedDay: {
                readonly type: import("vue").PropType<dayjs.Dayjs>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly range: {
                readonly type: import("vue").PropType<[dayjs.Dayjs, dayjs.Dayjs]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly date: {
                readonly type: import("vue").PropType<dayjs.Dayjs>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly hideHeader: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & {
            onPick?: ((value: dayjs.Dayjs) => any) | undefined;
        }>>;
        emit: (event: "pick", value: dayjs.Dayjs) => void;
        t: import("element-plus/es/hooks").Translator;
        lang: import("vue").Ref<string>;
        nsTable: {
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
        nsDay: {
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
        now: dayjs.Dayjs;
        firstDayOfWeek: number;
        isInRange: ComputedRef<boolean>;
        rows: ComputedRef<import("./date-table").CalendarDateCell[][]>;
        weekDays: ComputedRef<string[]>;
        getFormattedDate: (day: number, type: import("./date-table").CalendarDateCellType) => dayjs.Dayjs;
        getCellClass: ({ text, type }: import("./date-table").CalendarDateCell) => string[];
        handlePickDay: ({ text, type }: import("./date-table").CalendarDateCell) => void;
        getSlotData: ({ text, type }: import("./date-table").CalendarDateCell) => {
            isSelected: boolean;
            type: string;
            day: string;
            date: Date;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        pick: (value: dayjs.Dayjs) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly selectedDay: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly range: {
            readonly type: import("vue").PropType<[dayjs.Dayjs, dayjs.Dayjs]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly date: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideHeader: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        onPick?: ((value: dayjs.Dayjs) => any) | undefined;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date) => boolean;
    input: (value: Date) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<Date>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly range: {
        readonly type: import("vue").PropType<[Date, Date]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    onInput?: ((value: Date) => any) | undefined;
}, {}>;
export default _default;
