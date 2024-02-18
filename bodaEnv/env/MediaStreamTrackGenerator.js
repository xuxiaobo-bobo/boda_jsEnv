// MediaStreamTrackGenerator对象

bodaEnv.memory.globlProtoObj["MediaStreamTrackGenerator"] = function MediaStreamTrackGenerator() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamTrackGenerator 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamTrackGenerator"], "MediaStreamTrackGenerator");
bodaEnv.memory.globlProtoObj["MediaStreamTrackGenerator"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype;
bodaEnv.memory.globlProtoObj["MediaStreamTrackGenerator"].__proto__ = bodaEnv.memory.globlProtoObj["MediaStreamTrack"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrackGenerator"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrackGenerator"].prototype, "MediaStreamTrackGenerator", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});