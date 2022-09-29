import type { Measurable } from 'element-plus/es/tokens';
export declare const usePopperTriggerProps: {
    readonly virtualRef: {
        readonly type: import("vue").PropType<Measurable>;
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
};
export declare type PopperTriggerProps = typeof usePopperTriggerProps;
