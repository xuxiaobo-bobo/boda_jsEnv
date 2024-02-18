// Lock对象

bodaEnv.memory.globlProtoObj["Lock"] = function Lock() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Lock 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Lock"], "Lock");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Lock"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Lock"].prototype, "Lock", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Lock"].prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Lock"].prototype, "Lock", "mode_get", arguments);
    }
  }.mode,
  set: undefined
});