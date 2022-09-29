'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const OPTIONS_KEY = Symbol();
const useOptions = () => {
  return vue.inject(OPTIONS_KEY);
};

exports.OPTIONS_KEY = OPTIONS_KEY;
exports.useOptions = useOptions;
//# sourceMappingURL=useOption.js.map
