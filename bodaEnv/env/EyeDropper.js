// EyeDropper对象

bodaEnv.memory.globlProtoObj["EyeDropper"] = function EyeDropper() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('EyeDropper 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["EyeDropper"], "EyeDropper");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EyeDropper"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EyeDropper"].prototype, "EyeDropper", "open", arguments);
    }
  }.open
});