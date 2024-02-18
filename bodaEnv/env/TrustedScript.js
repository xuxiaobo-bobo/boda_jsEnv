// TrustedScript对象

bodaEnv.memory.globlProtoObj["TrustedScript"] = function TrustedScript() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TrustedScript 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TrustedScript"], "TrustedScript");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedScript"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedScript"].prototype, "TrustedScript", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedScript"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedScript"].prototype, "TrustedScript", "toString", arguments);
    }
  }.toString
});