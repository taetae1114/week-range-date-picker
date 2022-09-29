export declare type FocusLayer = {
    paused: boolean;
    pause: () => void;
    resume: () => void;
};
export declare type FocusStack = FocusLayer[];
export declare const obtainAllFocusableElements: (element: HTMLElement) => HTMLElement[];
export declare const getVisibleElement: (elements: HTMLElement[], container: HTMLElement) => HTMLElement | undefined;
export declare const isHidden: (element: HTMLElement, container: HTMLElement) => boolean;
export declare const getEdges: (container: HTMLElement) => (HTMLElement | undefined)[];
export declare const tryFocus: (element?: HTMLElement | {
    focus: () => void;
} | null | undefined, shouldSelect?: boolean | undefined) => void;
export declare const focusFirstDescendant: (elements: HTMLElement[], shouldSelect?: boolean) => void;
export declare const focusableStack: {
    push: (layer: FocusLayer) => void;
    remove: (layer: FocusLayer) => void;
};
