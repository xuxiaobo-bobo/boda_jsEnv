// CSSContainerRule对象

bodaEnv.memory.globlProtoObj["CSSContainerRule"] = function CSSContainerRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSContainerRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSContainerRule"], "CSSContainerRule");
bodaEnv.memory.globlProtoObj["CSSContainerRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSConditionRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSContainerRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSConditionRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSContainerRule"].prototype, "containerName", {
  configurable: true,
  enumerable: true,
  get: {
    containerName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSContainerRule"].prototype, "CSSContainerRule", "containerName_get", arguments);
    }
  }.containerName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSContainerRule"].prototype, "containerQuery", {
  configurable: true,
  enumerable: true,
  get: {
    containerQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSContainerRule"].prototype, "CSSContainerRule", "containerQuery_get", arguments);
    }
  }.containerQuery,
  set: undefined
});