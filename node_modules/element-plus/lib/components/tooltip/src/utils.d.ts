import type { Ref } from 'vue';
import type { Trigger } from './tooltip';
export declare const isTriggerType: (trigger: Trigger | Trigger[], type: Trigger) => boolean;
export declare const whenTrigger: (trigger: Ref<Trigger | Trigger[]>, type: Trigger, handler: (e: Event) => void) => (e: Event) => void;
