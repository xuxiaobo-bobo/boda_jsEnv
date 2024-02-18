// WaveShaperNode对象

bodaEnv.memory.globlProtoObj["WaveShaperNode"] = function WaveShaperNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WaveShaperNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WaveShaperNode"], "WaveShaperNode");
bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["WaveShaperNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype, "curve", {
  configurable: true,
  enumerable: true,
  get: {
    curve() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype, "WaveShaperNode", "curve_get", arguments);
    }
  }.curve,
  set: {
    curve() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype, "WaveShaperNode", "curve_set", arguments);
    }
  }.curve
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype, "oversample", {
  configurable: true,
  enumerable: true,
  get: {
    oversample() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype, "WaveShaperNode", "oversample_get", arguments);
    }
  }.oversample,
  set: {
    oversample() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WaveShaperNode"].prototype, "WaveShaperNode", "oversample_set", arguments);
    }
  }.oversample
});