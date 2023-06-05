// ImageDecoder对象

bodavm.memory.globalobj['ImageDecoder'] = function ImageDecoder() {
  console.log_copy('ImageDecoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ImageDecoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageDecoder': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageDecoder'], "ImageDecoder");
bodavm.toolsFunc.defineProperty('ImageDecoder', "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTypeSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].undefined, "ImageDecoder", "isTypeSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('ImageDecoder', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageDecoder', "complete", {
  configurable: true,
  enumerable: true,
  get: function complete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "complete_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageDecoder', "completed", {
  configurable: true,
  enumerable: true,
  get: function completed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "completed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageDecoder', "tracks", {
  configurable: true,
  enumerable: true,
  get: function tracks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "tracks_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageDecoder', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageDecoder', "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "decode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageDecoder', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageDecoder'].prototype, "ImageDecoder", "reset", arguments);
  }
}, 'prototype');