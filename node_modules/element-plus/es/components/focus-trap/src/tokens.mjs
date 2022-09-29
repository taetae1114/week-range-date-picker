const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");

export { FOCUS_AFTER_RELEASED, FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS, FOCUS_TRAP_INJECTION_KEY, ON_RELEASE_FOCUS_EVT, ON_TRAP_FOCUS_EVT };
//# sourceMappingURL=tokens.mjs.map
