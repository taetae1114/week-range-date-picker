import type { InjectionKey, Ref } from 'vue';
import type { Trigger } from './tooltip';
export declare type ElTooltipInjectionContext = {
    controlled: Ref<boolean>;
    id: Ref<string>;
    open: Ref<boolean>;
    trigger: Ref<Trigger | Trigger[]>;
    onOpen: (e?: Event) => void;
    onClose: (e?: Event) => void;
    onToggle: (e: Event) => void;
    onShow: () => void;
    onHide: () => void;
    onBeforeShow: () => void;
    onBeforeHide: () => void;
    updatePopper: () => void;
};
export declare const TOOLTIP_INJECTION_KEY: InjectionKey<ElTooltipInjectionContext>;
