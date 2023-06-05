// MediaCapabilities对象

bodavm.memory.globalobj['MediaCapabilities'] = function MediaCapabilities() {
  console.log_copy('MediaCapabilities 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaCapabilities)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaCapabilities'], "MediaCapabilities");
bodavm.toolsFunc.defineProperty('MediaCapabilities', "decodingInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decodingInfo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaCapabilities'].prototype, "MediaCapabilities", "decodingInfo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaCapabilities', "encodingInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encodingInfo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaCapabilities'].prototype, "MediaCapabilities", "encodingInfo", arguments);
  }
}, 'prototype');