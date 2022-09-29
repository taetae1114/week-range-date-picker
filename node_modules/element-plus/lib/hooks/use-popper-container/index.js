'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../utils/index.js');
var index = require('../use-global-config/index.js');
var index$1 = require('../use-namespace/index.js');
var rand = require('../../utils/rand.js');

let cachedContainer;
const namespace = index.useGlobalConfig("namespace", index$1.defaultNamespace);
const POPPER_CONTAINER_ID = `${namespace.value}-popper-container-${rand.generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  vue.onBeforeMount(() => {
    if (!core.isClient)
      return;
    if (process.env.NODE_ENV === "test" || !cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};

exports.POPPER_CONTAINER_ID = POPPER_CONTAINER_ID;
exports.POPPER_CONTAINER_SELECTOR = POPPER_CONTAINER_SELECTOR;
exports.usePopperContainer = usePopperContainer;
//# sourceMappingURL=index.js.map
