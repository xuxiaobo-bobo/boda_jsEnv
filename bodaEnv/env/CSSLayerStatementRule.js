// CSSLayerStatementRule对象

bodaEnv.memory.globlProtoObj["CSSLayerStatementRule"] = function CSSLayerStatementRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSLayerStatementRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSLayerStatementRule"], "CSSLayerStatementRule");
bodaEnv.memory.globlProtoObj["CSSLayerStatementRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSLayerStatementRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSLayerStatementRule"].prototype, "nameList", {
  configurable: true,
  enumerable: true,
  get: {
    nameList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSLayerStatementRule"].prototype, "CSSLayerStatementRule", "nameList_get", arguments);
    }
  }.nameList,
  set: undefined
});