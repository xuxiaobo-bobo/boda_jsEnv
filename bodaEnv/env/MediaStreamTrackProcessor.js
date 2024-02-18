// MediaStreamTrackProcessor对象

bodaEnv.memory.globlProtoObj["MediaStreamTrackProcessor"] = function MediaStreamTrackProcessor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamTrackProcessor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamTrackProcessor"], "MediaStreamTrackProcessor");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrackProcessor"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrackProcessor"].prototype, "MediaStreamTrackProcessor", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});