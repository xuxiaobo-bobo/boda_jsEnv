// IdentityProvider对象

bodaEnv.memory.globlProtoObj["IdentityProvider"] = function IdentityProvider() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IdentityProvider 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IdentityProvider"], "IdentityProvider");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdentityProvider"], "getUserInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUserInfo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdentityCredential"], "IdentityProvider", "getUserInfo", arguments);
    }
  }.getUserInfo
});