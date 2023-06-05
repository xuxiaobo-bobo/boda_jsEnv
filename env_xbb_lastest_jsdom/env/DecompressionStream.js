// DecompressionStream对象

bodavm.memory.globalobj['DecompressionStream'] = function DecompressionStream() {
  console.log_copy('DecompressionStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DecompressionStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DecompressionStream': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DecompressionStream'], "DecompressionStream");
bodavm.toolsFunc.defineProperty('DecompressionStream', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DecompressionStream'].prototype, "DecompressionStream", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DecompressionStream', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DecompressionStream'].prototype, "DecompressionStream", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');