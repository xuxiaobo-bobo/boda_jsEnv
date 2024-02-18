// CSSGroupingRule对象

bodaEnv.memory.globlProtoObj["CSSGroupingRule"] = function CSSGroupingRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSGroupingRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSGroupingRule"], "CSSGroupingRule");
bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSGroupingRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: {
    cssRules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype, "CSSGroupingRule", "cssRules_get", arguments);
    }
  }.cssRules,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype, "CSSGroupingRule", "deleteRule", arguments);
    }
  }.deleteRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype, "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype, "CSSGroupingRule", "insertRule", arguments);
    }
  }.insertRule
});