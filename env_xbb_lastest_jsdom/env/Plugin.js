// Plugin对象

bodavm.memory.globalobj['Plugin'] = function Plugin() {
  console.log_copy('Plugin 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Plugin)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Plugin'], "Plugin");
bodavm.toolsFunc.defineProperty('Plugin', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Plugin'].prototype, "Plugin", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Plugin', "filename", {
  configurable: true,
  enumerable: true,
  get: function filename() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Plugin'].prototype, "Plugin", "filename_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Plugin', "description", {
  configurable: true,
  enumerable: true,
  get: function description() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Plugin'].prototype, "Plugin", "description_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Plugin', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Plugin'].prototype, "Plugin", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Plugin', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Plugin'].prototype, "Plugin", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Plugin', "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Plugin'].prototype, "Plugin", "namedItem", arguments);
  }
}, 'prototype');