import type { ExtractPropTypes } from 'vue';
declare const effects: readonly ["light", "dark"];
declare const triggers: readonly ["click", "contextmenu", "hover", "focus"];
export declare const Effect: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};
export declare const roleTypes: readonly ["dialog", "grid", "listbox", "menu", "tooltip", "tree"];
export declare type PopperEffect = typeof effects[number];
export declare type PopperTrigger = typeof triggers[number];
export declare const usePopperProps: {
    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "listbox" | "grid" | "menu" | "tooltip" | "dialog" | "tree", unknown, "tooltip", boolean>;
};
export declare type UsePopperProps = ExtractPropTypes<typeof usePopperProps>;
export {};
