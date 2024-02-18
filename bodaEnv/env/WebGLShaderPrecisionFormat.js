// WebGLShaderPrecisionFormat对象

bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"] = function WebGLShaderPrecisionFormat() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGLShaderPrecisionFormat 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"], "WebGLShaderPrecisionFormat");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"].prototype, "rangeMin", {
  configurable: true,
  enumerable: true,
  get: {
    rangeMin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"].prototype, "WebGLShaderPrecisionFormat", "rangeMin_get", arguments);
    }
  }.rangeMin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"].prototype, "rangeMax", {
  configurable: true,
  enumerable: true,
  get: {
    rangeMax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"].prototype, "WebGLShaderPrecisionFormat", "rangeMax_get", arguments);
    }
  }.rangeMax,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"].prototype, "precision", {
  configurable: true,
  enumerable: true,
  get: {
    precision() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"].prototype, "WebGLShaderPrecisionFormat", "precision_get", arguments);
    }
  }.precision,
  set: undefined
});