import { inject } from 'vue';

const OPTIONS_KEY = Symbol();
const useOptions = () => {
  return inject(OPTIONS_KEY);
};

export { OPTIONS_KEY, useOptions };
//# sourceMappingURL=useOption.mjs.map
