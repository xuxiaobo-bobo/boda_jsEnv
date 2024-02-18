// TrustedScriptURL对象

bodaEnv.memory.globlProtoObj["TrustedScriptURL"] = function TrustedScriptURL() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TrustedScriptURL 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TrustedScriptURL"], "TrustedScriptURL");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedScriptURL"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedScriptURL"].prototype, "TrustedScriptURL", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedScriptURL"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedScriptURL"].prototype, "TrustedScriptURL", "toString", arguments);
    }
  }.toString
});