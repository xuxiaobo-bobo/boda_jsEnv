// ConstantSourceNode对象

bodaEnv.memory.globlProtoObj["ConstantSourceNode"] = function ConstantSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ConstantSourceNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ConstantSourceNode"], "ConstantSourceNode");
bodaEnv.memory.globlProtoObj["ConstantSourceNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype;
bodaEnv.memory.globlProtoObj["ConstantSourceNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ConstantSourceNode"].prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: {
    offset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ConstantSourceNode"].prototype, "ConstantSourceNode", "offset_get", arguments);
    }
  }.offset,
  set: undefined
});