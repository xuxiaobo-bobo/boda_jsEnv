// CSSKeyframesRule对象

bodaEnv.memory.globlProtoObj["CSSKeyframesRule"] = function CSSKeyframesRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSKeyframesRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSKeyframesRule"], "CSSKeyframesRule");
bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "CSSKeyframesRule", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "CSSKeyframesRule", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: {
    cssRules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "CSSKeyframesRule", "cssRules_get", arguments);
    }
  }.cssRules,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "appendRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "CSSKeyframesRule", "appendRule", arguments);
    }
  }.appendRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "CSSKeyframesRule", "deleteRule", arguments);
    }
  }.deleteRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "findRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    findRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframesRule"].prototype, "CSSKeyframesRule", "findRule", arguments);
    }
  }.findRule
});