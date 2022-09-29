import type { OptionProps, SelectProps } from './defaults';
import type { ExtractPropTypes, InjectionKey } from 'vue';
import type { Option } from './select.types';
export interface SelectV2Context {
    props: ExtractPropTypes<typeof SelectProps>;
    expanded: boolean;
    onSelect: (option: Option<any>, index: number, byClick?: boolean) => void;
    onHover: (idx: number) => void;
    onKeyboardNavigate: (direction: 'forward' | 'backward') => void;
    onKeyboardSelect: () => void;
}
export declare const selectV2InjectionKey: InjectionKey<SelectV2Context>;
export declare type IOptionProps = ExtractPropTypes<typeof OptionProps>;
export declare type ISelectProps = ExtractPropTypes<typeof SelectProps>;
