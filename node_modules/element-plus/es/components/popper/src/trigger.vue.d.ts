declare const _default: import("vue").DefineComponent<{
    readonly virtualRef: {
        readonly type: import("vue").PropType<import("element-plus/es/tokens").Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly virtualTriggering: BooleanConstructor;
    readonly onMouseenter: FunctionConstructor;
    readonly onMouseleave: FunctionConstructor;
    readonly onClick: FunctionConstructor;
    readonly onKeydown: FunctionConstructor;
    readonly onFocus: FunctionConstructor;
    readonly onBlur: FunctionConstructor;
    readonly onContextmenu: FunctionConstructor;
    readonly id: StringConstructor;
    readonly open: BooleanConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly virtualRef: {
            readonly type: import("vue").PropType<import("element-plus/es/tokens").Measurable>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly virtualTriggering: BooleanConstructor;
        readonly onMouseenter: FunctionConstructor;
        readonly onMouseleave: FunctionConstructor;
        readonly onClick: FunctionConstructor;
        readonly onKeydown: FunctionConstructor;
        readonly onFocus: FunctionConstructor;
        readonly onBlur: FunctionConstructor;
        readonly onContextmenu: FunctionConstructor;
        readonly id: StringConstructor;
        readonly open: BooleanConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    role: import("vue").ComputedRef<string>;
    triggerRef: import("vue").Ref<import("element-plus/es/tokens").Measurable | undefined>;
    ariaControls: import("vue").ComputedRef<string | undefined>;
    ariaDescribedby: import("vue").ComputedRef<string | undefined>;
    ariaHaspopup: import("vue").ComputedRef<string | undefined>;
    ariaExpanded: import("vue").ComputedRef<string | undefined>;
    virtualTriggerAriaStopWatch: undefined;
    ElOnlyChild: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly virtualRef: {
        readonly type: import("vue").PropType<import("element-plus/es/tokens").Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly virtualTriggering: BooleanConstructor;
    readonly onMouseenter: FunctionConstructor;
    readonly onMouseleave: FunctionConstructor;
    readonly onClick: FunctionConstructor;
    readonly onKeydown: FunctionConstructor;
    readonly onFocus: FunctionConstructor;
    readonly onBlur: FunctionConstructor;
    readonly onContextmenu: FunctionConstructor;
    readonly id: StringConstructor;
    readonly open: BooleanConstructor;
}>>, {
    readonly virtualTriggering: boolean;
    readonly open: boolean;
}>;
export default _default;
