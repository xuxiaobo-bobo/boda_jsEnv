// DOMError对象

bodavm.memory.globalobj['DOMError'] = function DOMError() {
  console.log_copy('DOMError 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DOMError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DOMError': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMError'], "DOMError");
bodavm.toolsFunc.defineProperty('DOMError', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMError'].prototype, "DOMError", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMError', "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMError'].prototype, "DOMError", "message_get", arguments);
  },
  set: undefined
}, 'prototype');