// IIRFilterNode对象

bodaEnv.memory.globlProtoObj["IIRFilterNode"] = function IIRFilterNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IIRFilterNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IIRFilterNode"], "IIRFilterNode");
bodaEnv.memory.globlProtoObj["IIRFilterNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["IIRFilterNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IIRFilterNode"].prototype, "getFrequencyResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFrequencyResponse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IIRFilterNode"].prototype, "IIRFilterNode", "getFrequencyResponse", arguments);
    }
  }.getFrequencyResponse
});