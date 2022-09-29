import '../../../../utils/index.mjs';
import { buildProps, definePropType } from '../../../../utils/vue/props/runtime.mjs';
import { mutable } from '../../../../utils/typescript.mjs';

const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "default"
  }
});

export { paginationSizesProps };
//# sourceMappingURL=sizes.mjs.map
