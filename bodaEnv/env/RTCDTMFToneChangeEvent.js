// RTCDTMFToneChangeEvent对象

bodaEnv.memory.globlProtoObj["RTCDTMFToneChangeEvent"] = function RTCDTMFToneChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCDTMFToneChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCDTMFToneChangeEvent"], "RTCDTMFToneChangeEvent");
bodaEnv.memory.globlProtoObj["RTCDTMFToneChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["RTCDTMFToneChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDTMFToneChangeEvent"].prototype, "tone", {
  configurable: true,
  enumerable: true,
  get: {
    tone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDTMFToneChangeEvent"].prototype, "RTCDTMFToneChangeEvent", "tone_get", arguments);
    }
  }.tone,
  set: undefined
});