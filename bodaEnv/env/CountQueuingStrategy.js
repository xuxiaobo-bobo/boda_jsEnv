// CountQueuingStrategy对象

bodaEnv.memory.globlProtoObj["CountQueuingStrategy"] = function CountQueuingStrategy() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CountQueuingStrategy 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CountQueuingStrategy"], "CountQueuingStrategy");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CountQueuingStrategy"].prototype, "highWaterMark", {
  configurable: true,
  enumerable: true,
  get: {
    highWaterMark() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CountQueuingStrategy"].prototype, "CountQueuingStrategy", "highWaterMark_get", arguments);
    }
  }.highWaterMark,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CountQueuingStrategy"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CountQueuingStrategy"].prototype, "CountQueuingStrategy", "size_get", arguments);
    }
  }.size,
  set: undefined
});