// PluginArray对象

bodavm.memory.globalobj['PluginArray'] = function PluginArray() {
  console.log_copy('PluginArray 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PluginArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PluginArray'], "PluginArray");
bodavm.toolsFunc.defineProperty('PluginArray', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PluginArray'].prototype, "PluginArray", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PluginArray', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PluginArray'].prototype, "PluginArray", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PluginArray', "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PluginArray'].prototype, "PluginArray", "namedItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PluginArray', "refresh", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function refresh() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PluginArray'].prototype, "PluginArray", "refresh", arguments);
  }
}, 'prototype');