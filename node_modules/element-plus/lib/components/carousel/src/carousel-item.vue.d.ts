import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly label: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly label: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
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
    COMPONENT_NAME: string;
    carouselContext: import("element-plus/es/tokens").CarouselContext;
    instance: import("vue").ComponentInternalInstance;
    CARD_SCALE: number;
    hover: import("vue").Ref<boolean>;
    translate: import("vue").Ref<number>;
    scale: import("vue").Ref<number>;
    active: import("vue").Ref<boolean>;
    ready: import("vue").Ref<boolean>;
    inStage: import("vue").Ref<boolean>;
    animating: import("vue").Ref<boolean>;
    isCardType: import("vue").Ref<boolean>;
    isVertical: import("vue").Ref<boolean>;
    itemStyle: import("vue").ComputedRef<CSSProperties>;
    processIndex: (index: number, activeIndex: number, length: number) => number;
    calcCardTranslate: (index: number, activeIndex: number) => number;
    calcTranslate: (index: number, activeIndex: number, isVertical: boolean) => number;
    translateItem: (index: number, activeIndex: number, oldIndex?: number | undefined) => void;
    handleItemClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly label: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
}>>, {
    readonly name: string;
    readonly label: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
}>;
export default _default;
