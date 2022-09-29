import type { ExtractPropTypes } from 'vue';
import type CarouselItem from './carousel-item.vue';
export declare const carouselItemProps: {
    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly label: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
};
export declare type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>;
export declare type CarouselItemInstance = InstanceType<typeof CarouselItem>;
