// USBInterface对象

bodavm.memory.globalobj['USBInterface'] = function USBInterface() {
  console.log_copy('USBInterface 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBInterface)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBInterface': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBInterface'], "USBInterface");
bodavm.toolsFunc.defineProperty('USBInterface', "interfaceNumber", {
  configurable: true,
  enumerable: true,
  get: function interfaceNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBInterface'].prototype, "USBInterface", "interfaceNumber_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBInterface', "alternate", {
  configurable: true,
  enumerable: true,
  get: function alternate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBInterface'].prototype, "USBInterface", "alternate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBInterface', "alternates", {
  configurable: true,
  enumerable: true,
  get: function alternates() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBInterface'].prototype, "USBInterface", "alternates_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBInterface', "claimed", {
  configurable: true,
  enumerable: true,
  get: function claimed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBInterface'].prototype, "USBInterface", "claimed_get", arguments);
  },
  set: undefined
}, 'prototype');