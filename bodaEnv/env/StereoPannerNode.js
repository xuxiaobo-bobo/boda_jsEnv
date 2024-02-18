// StereoPannerNode对象

bodaEnv.memory.globlProtoObj["StereoPannerNode"] = function StereoPannerNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StereoPannerNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StereoPannerNode"], "StereoPannerNode");
bodaEnv.memory.globlProtoObj["StereoPannerNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["StereoPannerNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StereoPannerNode"].prototype, "pan", {
  configurable: true,
  enumerable: true,
  get: {
    pan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StereoPannerNode"].prototype, "StereoPannerNode", "pan_get", arguments);
    }
  }.pan,
  set: undefined
});