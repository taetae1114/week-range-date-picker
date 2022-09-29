import type { ComputedRef } from 'vue';
export interface IUseOptions {
    currentColor: ComputedRef<string>;
}
export declare const OPTIONS_KEY: unique symbol;
export declare const useOptions: () => IUseOptions | undefined;
