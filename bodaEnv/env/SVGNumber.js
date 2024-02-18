// SVGNumber对象

bodaEnv.memory.globlProtoObj["SVGNumber"] = function SVGNumber() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGNumber 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGNumber"], "SVGNumber");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumber"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumber"].prototype, "SVGNumber", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumber"].prototype, "SVGNumber", "value_set", arguments);
    }
  }.value
});