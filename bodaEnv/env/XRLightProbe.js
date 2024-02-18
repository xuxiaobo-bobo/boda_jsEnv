// XRLightProbe对象

bodaEnv.memory.globlProtoObj["XRLightProbe"] = function XRLightProbe() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRLightProbe 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRLightProbe"], "XRLightProbe");
bodaEnv.memory.globlProtoObj["XRLightProbe"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XRLightProbe"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRLightProbe"].prototype, "probeSpace", {
  configurable: true,
  enumerable: true,
  get: {
    probeSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRLightProbe"].prototype, "XRLightProbe", "probeSpace_get", arguments);
    }
  }.probeSpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRLightProbe"].prototype, "onreflectionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onreflectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRLightProbe"].prototype, "XRLightProbe", "onreflectionchange_get", arguments);
    }
  }.onreflectionchange,
  set: {
    onreflectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRLightProbe"].prototype, "XRLightProbe", "onreflectionchange_set", arguments);
    }
  }.onreflectionchange
});