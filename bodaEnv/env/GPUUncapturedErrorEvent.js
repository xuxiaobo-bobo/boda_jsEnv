// GPUUncapturedErrorEvent对象

bodaEnv.memory.globlProtoObj["GPUUncapturedErrorEvent"] = function GPUUncapturedErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUUncapturedErrorEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUUncapturedErrorEvent"], "GPUUncapturedErrorEvent");
bodaEnv.memory.globlProtoObj["GPUUncapturedErrorEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["GPUUncapturedErrorEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUUncapturedErrorEvent"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUUncapturedErrorEvent"].prototype, "GPUUncapturedErrorEvent", "error_get", arguments);
    }
  }.error,
  set: undefined
});