// DecompresbodaStream对象

bodaEnv.memory.globlProtoObj["DecompresbodaStream"] = function DecompresbodaStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DecompresbodaStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DecompresbodaStream"], "DecompresbodaStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DecompresbodaStream"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DecompresbodaStream"].prototype, "DecompresbodaStream", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DecompresbodaStream"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DecompresbodaStream"].prototype, "DecompresbodaStream", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});