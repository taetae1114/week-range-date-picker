'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var iconsVue = require('@element-plus/icons-vue');
var index = require('../../icon/index.js');
var index$1 = require('../../checkbox/index.js');
require('../../../hooks/index.js');
var treeNodeContent = require('./tree-node-content.js');
var virtualTree = require('./virtual-tree.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$2 = require('../../../hooks/use-namespace/index.js');

const DEFAULT_ICON = "caret-right";
const _sfc_main = vue.defineComponent({
  name: "ElTreeNode",
  components: {
    ElIcon: index.ElIcon,
    CaretRight: iconsVue.CaretRight,
    ElCheckbox: index$1.ElCheckbox,
    ElNodeContent: treeNodeContent["default"]
  },
  props: virtualTree.treeNodeProps,
  emits: virtualTree.treeNodeEmits,
  setup(props, { emit }) {
    const tree = vue.inject(virtualTree.ROOT_TREE_INJECTION_KEY);
    const ns = index$2.useNamespace("tree");
    const indent = vue.computed(() => {
      var _a;
      return (_a = tree == null ? void 0 : tree.props.indent) != null ? _a : 16;
    });
    const icon = vue.computed(() => {
      var _a;
      return (_a = tree == null ? void 0 : tree.props.icon) != null ? _a : DEFAULT_ICON;
    });
    const handleClick = (e) => {
      emit("click", props.node, e);
    };
    const handleExpandIconClick = () => {
      emit("toggle", props.node);
    };
    const handleCheckChange = (value) => {
      emit("check", props.node, value);
    };
    const handleContextMenu = (event) => {
      var _a, _b, _c, _d;
      if ((_c = (_b = (_a = tree == null ? void 0 : tree.instance) == null ? void 0 : _a.vnode) == null ? void 0 : _b.props) == null ? void 0 : _c["onNodeContextmenu"]) {
        event.stopPropagation();
        event.preventDefault();
      }
      tree == null ? void 0 : tree.ctx.emit(virtualTree.NODE_CONTEXTMENU, event, (_d = props.node) == null ? void 0 : _d.data, props.node);
    };
    return {
      ns,
      indent,
      icon,
      handleClick,
      handleExpandIconClick,
      handleCheckChange,
      handleContextMenu
    };
  }
});
const _hoisted_1 = ["aria-expanded", "aria-disabled", "aria-checked", "data-key"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_checkbox = vue.resolveComponent("el-checkbox");
  const _component_el_node_content = vue.resolveComponent("el-node-content");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "node$",
    class: vue.normalizeClass([
      _ctx.ns.b("node"),
      _ctx.ns.is("expanded", _ctx.expanded),
      _ctx.ns.is("current", _ctx.current),
      _ctx.ns.is("focusable", !_ctx.disabled),
      _ctx.ns.is("checked", !_ctx.disabled && _ctx.checked)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": _ctx.expanded,
    "aria-disabled": _ctx.disabled,
    "aria-checked": _ctx.checked,
    "data-key": (_a = _ctx.node) == null ? void 0 : _a.key,
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onContextmenu: _cache[2] || (_cache[2] = (...args) => _ctx.handleContextMenu && _ctx.handleContextMenu(...args))
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.ns.be("node", "content")),
      style: vue.normalizeStyle({ paddingLeft: `${(_ctx.node.level - 1) * _ctx.indent}px` })
    }, [
      _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
        key: 0,
        class: vue.normalizeClass([
          _ctx.ns.is("leaf", !!((_b = _ctx.node) == null ? void 0 : _b.isLeaf)),
          _ctx.ns.is("hidden", _ctx.hiddenExpandIcon),
          {
            expanded: !((_c = _ctx.node) == null ? void 0 : _c.isLeaf) && _ctx.expanded
          },
          _ctx.ns.be("node", "expand-icon")
        ]),
        onClick: vue.withModifiers(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true),
      _ctx.showCheckbox ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
        key: 1,
        "model-value": _ctx.checked,
        indeterminate: _ctx.indeterminate,
        disabled: _ctx.disabled,
        onChange: _ctx.handleCheckChange,
        onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
        }, ["stop"]))
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_el_node_content, { node: _ctx.node }, null, 8, ["node"])
    ], 6)
  ], 42, _hoisted_1);
}
var ElTreeNode = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree-v2/src/tree-node.vue"]]);

exports["default"] = ElTreeNode;
//# sourceMappingURL=tree-node.js.map
