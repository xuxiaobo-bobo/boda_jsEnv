// VideoColorSpace对象

bodaEnv.memory.globlProtoObj["VideoColorSpace"] = function VideoColorSpace() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VideoColorSpace 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VideoColorSpace"], "VideoColorSpace");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "primaries", {
  configurable: true,
  enumerable: true,
  get: {
    primaries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "VideoColorSpace", "primaries_get", arguments);
    }
  }.primaries,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "transfer", {
  configurable: true,
  enumerable: true,
  get: {
    transfer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "VideoColorSpace", "transfer_get", arguments);
    }
  }.transfer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: {
    matrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "VideoColorSpace", "matrix_get", arguments);
    }
  }.matrix,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "fullRange", {
  configurable: true,
  enumerable: true,
  get: {
    fullRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "VideoColorSpace", "fullRange_get", arguments);
    }
  }.fullRange,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoColorSpace"].prototype, "VideoColorSpace", "toJSON", arguments);
    }
  }.toJSON
});