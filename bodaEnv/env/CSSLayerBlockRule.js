// CSSLayerBlockRule对象

bodaEnv.memory.globlProtoObj["CSSLayerBlockRule"] = function CSSLayerBlockRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSLayerBlockRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSLayerBlockRule"], "CSSLayerBlockRule");
bodaEnv.memory.globlProtoObj["CSSLayerBlockRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSLayerBlockRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSGroupingRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSLayerBlockRule"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSLayerBlockRule"].prototype, "CSSLayerBlockRule", "name_get", arguments);
    }
  }.name,
  set: undefined
});