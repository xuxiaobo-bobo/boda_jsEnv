// GainNode对象

bodaEnv.memory.globlProtoObj["GainNode"] = function GainNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GainNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GainNode"], "GainNode");
bodaEnv.memory.globlProtoObj["GainNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["GainNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GainNode"].prototype, "gain", {
  configurable: true,
  enumerable: true,
  get: {
    gain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GainNode"].prototype, "GainNode", "gain_get", arguments);
    }
  }.gain,
  set: undefined
});