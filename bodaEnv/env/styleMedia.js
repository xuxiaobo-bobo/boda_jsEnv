// styleMedia对象

bodaEnv.memory.globlProtoObj['StyleMedia'] = function StyleMedia() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StyleMedia 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  //return bodaEnv.toolsFunc.throwError("TypeError", "Illegal constructor");
};

bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['StyleMedia'], "StyleMedia");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['StyleMedia'].prototype, "matchMedium", {
  configurable: true,
  enumerable: true,
  get: {
    matchMedium() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['StyleMedia'].prototype, "StyleMedia", "matchMedium_get", arguments);
    }
  }.matchMedium,
  set: undefined
});
delete bodaEnv.memory.globlProtoObj['StyleMedia'].prototype.constructor;
bodaEnv.memory.globlProtoObj["styleMedia"] = new bodaEnv.memory.globlProtoObj["StyleMedia"]('bobo');