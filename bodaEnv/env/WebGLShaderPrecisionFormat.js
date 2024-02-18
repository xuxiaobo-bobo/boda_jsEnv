// WebGLShaderPrecibodaFormat对象

bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"] = function WebGLShaderPrecibodaFormat() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGLShaderPrecibodaFormat 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"], "WebGLShaderPrecibodaFormat");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"].prototype, "rangeMin", {
  configurable: true,
  enumerable: true,
  get: {
    rangeMin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"].prototype, "WebGLShaderPrecibodaFormat", "rangeMin_get", arguments);
    }
  }.rangeMin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"].prototype, "rangeMax", {
  configurable: true,
  enumerable: true,
  get: {
    rangeMax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"].prototype, "WebGLShaderPrecibodaFormat", "rangeMax_get", arguments);
    }
  }.rangeMax,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"].prototype, "preciboda", {
  configurable: true,
  enumerable: true,
  get: {
    preciboda() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLShaderPrecibodaFormat"].prototype, "WebGLShaderPrecibodaFormat", "preciboda_get", arguments);
    }
  }.preciboda,
  set: undefined
});