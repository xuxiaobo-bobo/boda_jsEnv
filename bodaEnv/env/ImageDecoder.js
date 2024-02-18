// ImageDecoder对象

bodaEnv.memory.globlProtoObj["ImageDecoder"] = function ImageDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ImageDecoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ImageDecoder"], "ImageDecoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"], "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isTypeSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"], "ImageDecoder", "isTypeSupported", arguments);
    }
  }.isTypeSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "complete", {
  configurable: true,
  enumerable: true,
  get: {
    complete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "complete_get", arguments);
    }
  }.complete,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "completed", {
  configurable: true,
  enumerable: true,
  get: {
    completed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "completed_get", arguments);
    }
  }.completed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "tracks", {
  configurable: true,
  enumerable: true,
  get: {
    tracks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "tracks_get", arguments);
    }
  }.tracks,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "decode", arguments);
    }
  }.decode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"].prototype, "ImageDecoder", "reset", arguments);
    }
  }.reset
});