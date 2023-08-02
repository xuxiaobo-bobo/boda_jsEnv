// EncodedAudioChunk对象

EncodedAudioChunk = function EncodedAudioChunk() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof EncodedAudioChunk)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'EncodedAudioChunk': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('EncodedAudioChunk 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(EncodedAudioChunk, "EncodedAudioChunk");
bodavm.toolsFunc.defineProperty(EncodedAudioChunk.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, EncodedAudioChunk.prototype, "EncodedAudioChunk", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedAudioChunk.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, EncodedAudioChunk.prototype, "EncodedAudioChunk", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedAudioChunk.prototype, "byteLength", {
  configurable: true,
  enumerable: true,
  get: function byteLength() {
    return bodavm.toolsFunc.dispatch(this, EncodedAudioChunk.prototype, "EncodedAudioChunk", "byteLength_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedAudioChunk.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, EncodedAudioChunk.prototype, "EncodedAudioChunk", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EncodedAudioChunk.prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, EncodedAudioChunk.prototype, "EncodedAudioChunk", "copyTo", arguments);
  }
});