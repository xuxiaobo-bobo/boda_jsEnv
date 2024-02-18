// MediaStreamEvent对象

bodaEnv.memory.globlProtoObj["MediaStreamEvent"] = function MediaStreamEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamEvent"], "MediaStreamEvent");
bodaEnv.memory.globlProtoObj["MediaStreamEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MediaStreamEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamEvent"].prototype, "stream", {
  configurable: true,
  enumerable: true,
  get: {
    stream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamEvent"].prototype, "MediaStreamEvent", "stream_get", arguments);
    }
  }.stream,
  set: undefined
});