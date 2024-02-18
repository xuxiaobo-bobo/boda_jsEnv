// XRInputSourceEvent对象

bodaEnv.memory.globlProtoObj["XRInputSourceEvent"] = function XRInputSourceEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRInputSourceEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRInputSourceEvent"], "XRInputSourceEvent");
bodaEnv.memory.globlProtoObj["XRInputSourceEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["XRInputSourceEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceEvent"].prototype, "frame", {
  configurable: true,
  enumerable: true,
  get: {
    frame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceEvent"].prototype, "XRInputSourceEvent", "frame_get", arguments);
    }
  }.frame,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourceEvent"].prototype, "inputSource", {
  configurable: true,
  enumerable: true,
  get: {
    inputSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourceEvent"].prototype, "XRInputSourceEvent", "inputSource_get", arguments);
    }
  }.inputSource,
  set: undefined
});