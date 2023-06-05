// ClipboardItem对象

bodavm.memory.globalobj['ClipboardItem'] = function ClipboardItem() {
  console.log_copy('ClipboardItem 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ClipboardItem)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ClipboardItem': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ClipboardItem'], "ClipboardItem");
bodavm.toolsFunc.defineProperty('ClipboardItem', "types", {
  configurable: true,
  enumerable: true,
  get: function types() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ClipboardItem'].prototype, "ClipboardItem", "types_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ClipboardItem', "getType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ClipboardItem'].prototype, "ClipboardItem", "getType", arguments);
  }
}, 'prototype');