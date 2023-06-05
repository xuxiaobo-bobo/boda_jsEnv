// EncodedVideoChunk对象

bodavm.memory.globalobj['EncodedVideoChunk'] = function EncodedVideoChunk() {
  console.log_copy('EncodedVideoChunk 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof EncodedVideoChunk)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'EncodedVideoChunk': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EncodedVideoChunk'], "EncodedVideoChunk");
bodavm.toolsFunc.defineProperty('EncodedVideoChunk', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedVideoChunk'].prototype, "EncodedVideoChunk", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedVideoChunk', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedVideoChunk'].prototype, "EncodedVideoChunk", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedVideoChunk', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedVideoChunk'].prototype, "EncodedVideoChunk", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedVideoChunk', "byteLength", {
  configurable: true,
  enumerable: true,
  get: function byteLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedVideoChunk'].prototype, "EncodedVideoChunk", "byteLength_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedVideoChunk', "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedVideoChunk'].prototype, "EncodedVideoChunk", "copyTo", arguments);
  }
}, 'prototype');