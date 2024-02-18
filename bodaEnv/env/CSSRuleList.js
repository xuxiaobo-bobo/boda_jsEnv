// CSSRuleList对象

bodaEnv.memory.globlProtoObj["CSSRuleList"] = function CSSRuleList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSRuleList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSRuleList"], "CSSRuleList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRuleList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRuleList"].prototype, "CSSRuleList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRuleList"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRuleList"].prototype, "CSSRuleList", "item", arguments);
    }
  }.item
});