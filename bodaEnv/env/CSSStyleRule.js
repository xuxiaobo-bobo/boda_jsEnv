// CSSStyleRule对象

bodaEnv.memory.globlProtoObj["CSSStyleRule"] = function CSSStyleRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSStyleRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSStyleRule"], "CSSStyleRule");
bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSStyleRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "selectorText", {
  configurable: true,
  enumerable: true,
  get: {
    selectorText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "selectorText_get", arguments);
    }
  }.selectorText,
  set: {
    selectorText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "selectorText_set", arguments);
    }
  }.selectorText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "style_get", arguments);
    }
  }.style,
  set: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "style_set", arguments);
    }
  }.style
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "styleMap", {
  configurable: true,
  enumerable: true,
  get: {
    styleMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "styleMap_get", arguments);
    }
  }.styleMap,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: {
    cssRules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "cssRules_get", arguments);
    }
  }.cssRules,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "deleteRule", arguments);
    }
  }.deleteRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleRule"].prototype, "CSSStyleRule", "insertRule", arguments);
    }
  }.insertRule
});