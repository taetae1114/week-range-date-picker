declare const _default: import("vue").DefineComponent<{
    readonly node: import("../../../utils").EpPropFinalized<(new (...args: any[]) => import("./types").TreeNode) | (() => import("./types").TreeNode) | ((new (...args: any[]) => import("./types").TreeNode) | (() => import("./types").TreeNode))[], unknown, unknown, () => import("../../../utils").Mutable<{
        readonly key: -1;
        readonly level: -1;
        readonly data: {};
    }>, boolean>;
    readonly expanded: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly checked: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly indeterminate: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showCheckbox: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabled: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly current: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hiddenExpandIcon: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
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
    indent: import("vue").ComputedRef<number>;
    icon: import("vue").ComputedRef<import("../../../utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
    handleClick: (e: MouseEvent) => void;
    handleExpandIconClick: () => void;
    handleCheckChange: (value: boolean) => void;
    handleContextMenu: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (node: import("./types").TreeNode, e: MouseEvent) => boolean;
    toggle: (node: import("./types").TreeNode) => boolean;
    check: (node: import("./types").TreeNode, checked: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly node: import("../../../utils").EpPropFinalized<(new (...args: any[]) => import("./types").TreeNode) | (() => import("./types").TreeNode) | ((new (...args: any[]) => import("./types").TreeNode) | (() => import("./types").TreeNode))[], unknown, unknown, () => import("../../../utils").Mutable<{
        readonly key: -1;
        readonly level: -1;
        readonly data: {};
    }>, boolean>;
    readonly expanded: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly checked: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly indeterminate: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showCheckbox: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabled: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly current: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hiddenExpandIcon: import("../../../utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    onClick?: ((node: import("./types").TreeNode, e: MouseEvent) => any) | undefined;
    onToggle?: ((node: import("./types").TreeNode) => any) | undefined;
    onCheck?: ((node: import("./types").TreeNode, checked: boolean) => any) | undefined;
}, {
    readonly disabled: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly expanded: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly current: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly indeterminate: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly checked: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly node: import("./types").TreeNode;
    readonly showCheckbox: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly hiddenExpandIcon: import("../../../utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
