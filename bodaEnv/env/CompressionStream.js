// CompresbodaStream对象

bodaEnv.memory.globlProtoObj["CompresbodaStream"] = function CompresbodaStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CompresbodaStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CompresbodaStream"], "CompresbodaStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CompresbodaStream"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CompresbodaStream"].prototype, "CompresbodaStream", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CompresbodaStream"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CompresbodaStream"].prototype, "CompresbodaStream", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});