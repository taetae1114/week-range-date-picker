'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var focusTrap = require('./src/focus-trap.js');
var tokens = require('./src/tokens.js');
var utils = require('./src/utils.js');



exports.ElFocusTrap = focusTrap["default"];
exports["default"] = focusTrap["default"];
exports.FOCUS_AFTER_RELEASED = tokens.FOCUS_AFTER_RELEASED;
exports.FOCUS_AFTER_TRAPPED = tokens.FOCUS_AFTER_TRAPPED;
exports.FOCUS_AFTER_TRAPPED_OPTS = tokens.FOCUS_AFTER_TRAPPED_OPTS;
exports.FOCUS_TRAP_INJECTION_KEY = tokens.FOCUS_TRAP_INJECTION_KEY;
exports.ON_RELEASE_FOCUS_EVT = tokens.ON_RELEASE_FOCUS_EVT;
exports.ON_TRAP_FOCUS_EVT = tokens.ON_TRAP_FOCUS_EVT;
exports.focusFirstDescendant = utils.focusFirstDescendant;
exports.focusableStack = utils.focusableStack;
exports.getEdges = utils.getEdges;
exports.getVisibleElement = utils.getVisibleElement;
exports.isHidden = utils.isHidden;
exports.obtainAllFocusableElements = utils.obtainAllFocusableElements;
exports.tryFocus = utils.tryFocus;
//# sourceMappingURL=index.js.map
