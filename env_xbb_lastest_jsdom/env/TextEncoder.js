// TextEncoder对象

bodavm.memory.globalobj['TextEncoder'] = function TextEncoder() {
  console.log_copy('TextEncoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.TextEncoder();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextEncoder'], "TextEncoder");
bodavm.toolsFunc.defineProperty('TextEncoder', "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEncoder'].prototype, "TextEncoder", "encoding_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextEncoder', "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEncoder'].prototype, "TextEncoder", "encode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextEncoder', "encodeInto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encodeInto() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEncoder'].prototype, "TextEncoder", "encodeInto", arguments);
  }
}, 'prototype');