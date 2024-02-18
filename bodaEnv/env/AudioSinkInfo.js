// AudioSinkInfo对象

bodaEnv.memory.globlProtoObj["AudioSinkInfo"] = function AudioSinkInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioSinkInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioSinkInfo"], "AudioSinkInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioSinkInfo"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioSinkInfo"].prototype, "AudioSinkInfo", "type_get", arguments);
    }
  }.type,
  set: undefined
});