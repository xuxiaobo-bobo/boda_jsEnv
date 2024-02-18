// ByteLengthQueuingStrategy对象

bodaEnv.memory.globlProtoObj["ByteLengthQueuingStrategy"] = function ByteLengthQueuingStrategy() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ByteLengthQueuingStrategy 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ByteLengthQueuingStrategy"], "ByteLengthQueuingStrategy");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ByteLengthQueuingStrategy"].prototype, "highWaterMark", {
  configurable: true,
  enumerable: true,
  get: {
    highWaterMark() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ByteLengthQueuingStrategy"].prototype, "ByteLengthQueuingStrategy", "highWaterMark_get", arguments);
    }
  }.highWaterMark,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ByteLengthQueuingStrategy"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ByteLengthQueuingStrategy"].prototype, "ByteLengthQueuingStrategy", "size_get", arguments);
    }
  }.size,
  set: undefined
});