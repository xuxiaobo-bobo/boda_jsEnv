// XRReferenceSpaceEvent对象

bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"] = function XRReferenceSpaceEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRReferenceSpaceEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"], "XRReferenceSpaceEvent");
bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"].prototype, "referenceSpace", {
  configurable: true,
  enumerable: true,
  get: {
    referenceSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"].prototype, "XRReferenceSpaceEvent", "referenceSpace_get", arguments);
    }
  }.referenceSpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"].prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: {
    transform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRReferenceSpaceEvent"].prototype, "XRReferenceSpaceEvent", "transform_get", arguments);
    }
  }.transform,
  set: undefined
});