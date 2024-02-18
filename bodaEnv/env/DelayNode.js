// DelayNode对象

bodaEnv.memory.globlProtoObj["DelayNode"] = function DelayNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DelayNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DelayNode"], "DelayNode");
bodaEnv.memory.globlProtoObj["DelayNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["DelayNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DelayNode"].prototype, "delayTime", {
  configurable: true,
  enumerable: true,
  get: {
    delayTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DelayNode"].prototype, "DelayNode", "delayTime_get", arguments);
    }
  }.delayTime,
  set: undefined
});