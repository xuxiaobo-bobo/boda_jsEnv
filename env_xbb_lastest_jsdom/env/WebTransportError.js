// WebTransportError对象

bodavm.memory.globalobj['WebTransportError'] = function WebTransportError() {
  console.log_copy('WebTransportError 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.WebTransportError();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebTransportError'], "WebTransportError");
bodavm.memory.globalobj['WebTransportError'].prototype.__proto__ = bodavm.memory.globalobj['DOMException'].prototype;
bodavm.memory.globalobj['WebTransportError'].__proto__ = bodavm.memory.globalobj['DOMException'];
bodavm.toolsFunc.defineProperty('WebTransportError', "streamErrorCode", {
  configurable: true,
  enumerable: true,
  get: function streamErrorCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportError'].prototype, "WebTransportError", "streamErrorCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportError', "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportError'].prototype, "WebTransportError", "source_get", arguments);
  },
  set: undefined
}, 'prototype');