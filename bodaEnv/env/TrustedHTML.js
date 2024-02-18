// TrustedHTML对象

bodaEnv.memory.globlProtoObj["TrustedHTML"] = function TrustedHTML() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TrustedHTML 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TrustedHTML"], "TrustedHTML");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedHTML"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedHTML"].prototype, "TrustedHTML", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedHTML"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedHTML"].prototype, "TrustedHTML", "toString", arguments);
    }
  }.toString
});