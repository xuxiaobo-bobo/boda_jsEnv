// CSSStyleSheet对象

bodaEnv.memory.globlProtoObj["CSSStyleSheet"] = function CSSStyleSheet() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSStyleSheet 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSStyleSheet"], "CSSStyleSheet");
bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["StyleSheet"].prototype;
bodaEnv.memory.globlProtoObj["CSSStyleSheet"].__proto__ = bodaEnv.memory.globlProtoObj["StyleSheet"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "ownerRule", {
  configurable: true,
  enumerable: true,
  get: {
    ownerRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "ownerRule_get", arguments);
    }
  }.ownerRule,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: {
    cssRules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "cssRules_get", arguments);
    }
  }.cssRules,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "rules", {
  configurable: true,
  enumerable: true,
  get: {
    rules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "rules_get", arguments);
    }
  }.rules,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "addRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "addRule", arguments);
    }
  }.addRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "deleteRule", arguments);
    }
  }.deleteRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "insertRule", arguments);
    }
  }.insertRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "removeRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "removeRule", arguments);
    }
  }.removeRule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "replace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "replace", arguments);
    }
  }.replace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "replaceSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleSheet"].prototype, "CSSStyleSheet", "replaceSync", arguments);
    }
  }.replaceSync
});