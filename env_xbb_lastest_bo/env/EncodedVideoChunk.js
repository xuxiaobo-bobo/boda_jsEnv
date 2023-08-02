// EncodedVideoChunk对象

EncodedVideoChunk = function EncodedVideoChunk() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof EncodedVideoChunk)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'EncodedVideoChunk': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('EncodedVideoChunk 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(EncodedVideoChunk, "EncodedVideoChunk");
bodavm.toolsFunc.defineProperty(EncodedVideoChunk.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, EncodedVideoChunk.prototype, "EncodedVideoChunk", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedVideoChunk.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, EncodedVideoChunk.prototype, "EncodedVideoChunk", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedVideoChunk.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, EncodedVideoChunk.prototype, "EncodedVideoChunk", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedVideoChunk.prototype, "byteLength", {
  configurable: true,
  enumerable: true,
  get: function byteLength() {
    return bodavm.toolsFunc.dispatch(this, EncodedVideoChunk.prototype, "EncodedVideoChunk", "byteLength_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedVideoChunk.prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, EncodedVideoChunk.prototype, "EncodedVideoChunk", "copyTo", arguments);
  }
});