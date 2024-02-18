// MediaStreamTrackEvent对象

bodaEnv.memory.globlProtoObj["MediaStreamTrackEvent"] = function MediaStreamTrackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamTrackEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamTrackEvent"], "MediaStreamTrackEvent");
bodaEnv.memory.globlProtoObj["MediaStreamTrackEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MediaStreamTrackEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrackEvent"].prototype, "track", {
  configurable: true,
  enumerable: true,
  get: {
    track() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrackEvent"].prototype, "MediaStreamTrackEvent", "track_get", arguments);
    }
  }.track,
  set: undefined
});