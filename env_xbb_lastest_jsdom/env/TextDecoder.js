// TextDecoder对象

bodavm.memory.globalobj['TextDecoder'] = function TextDecoder() {
  console.log_copy('TextDecoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.TextDecoder();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextDecoder'], "TextDecoder");
bodavm.toolsFunc.defineProperty('TextDecoder', "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoder'].prototype, "TextDecoder", "encoding_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoder', "fatal", {
  configurable: true,
  enumerable: true,
  get: function fatal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoder'].prototype, "TextDecoder", "fatal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoder', "ignoreBOM", {
  configurable: true,
  enumerable: true,
  get: function ignoreBOM() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoder'].prototype, "TextDecoder", "ignoreBOM_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoder', "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoder'].prototype, "TextDecoder", "decode", arguments);
  }
}, 'prototype');