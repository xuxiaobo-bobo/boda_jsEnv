// Sanitizer对象

bodaEnv.memory.globlProtoObj["Sanitizer"] = function Sanitizer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Sanitizer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Sanitizer"], "Sanitizer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sanitizer"], "getDefaultConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDefaultConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PasswordCredential"], "Sanitizer", "getDefaultConfiguration", arguments);
    }
  }.getDefaultConfiguration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sanitizer"].prototype, "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sanitizer"].prototype, "Sanitizer", "getConfiguration", arguments);
    }
  }.getConfiguration
});