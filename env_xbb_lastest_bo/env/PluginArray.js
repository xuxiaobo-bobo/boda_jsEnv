// PluginArray对象

PluginArray = function PluginArray() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PluginArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PluginArray 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PluginArray, "PluginArray");
bodavm.toolsFunc.defineProperty(PluginArray.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PluginArray.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PluginArray.prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "namedItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PluginArray.prototype, "refresh", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function refresh() {
    return bodavm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "refresh", arguments);
  }
});