'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var runtime = require('../../../../utils/vue/props/runtime.js');
var typescript = require('../../../../utils/typescript.js');

const paginationSizesProps = runtime.buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: runtime.definePropType(Array),
    default: () => typescript.mutable([10, 20, 30, 40, 50, 100])
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

exports.paginationSizesProps = paginationSizesProps;
//# sourceMappingURL=sizes.js.map
