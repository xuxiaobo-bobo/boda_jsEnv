// WebTransportBidirectionalStream对象

bodavm.memory.globalobj['WebTransportBidirectionalStream'] = function WebTransportBidirectionalStream() {
  console.log_copy('WebTransportBidirectionalStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebTransportBidirectionalStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebTransportBidirectionalStream'], "WebTransportBidirectionalStream");
bodavm.toolsFunc.defineProperty('WebTransportBidirectionalStream', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportBidirectionalStream'].prototype, "WebTransportBidirectionalStream", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportBidirectionalStream', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportBidirectionalStream'].prototype, "WebTransportBidirectionalStream", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');