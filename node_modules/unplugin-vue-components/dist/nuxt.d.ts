import { Options } from './types.js';
import '@rollup/pluginutils';
import 'unplugin';
import '@antfu/utils';

declare function export_default(this: any, options: Options): void;

export { export_default as default };
