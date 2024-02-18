// WebGLActiveInfo对象

bodaEnv.memory.globlProtoObj["WebGLActiveInfo"] = function WebGLActiveInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGLActiveInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGLActiveInfo"], "WebGLActiveInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLActiveInfo"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLActiveInfo"].prototype, "WebGLActiveInfo", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLActiveInfo"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLActiveInfo"].prototype, "WebGLActiveInfo", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLActiveInfo"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLActiveInfo"].prototype, "WebGLActiveInfo", "name_get", arguments);
    }
  }.name,
  set: undefined
});