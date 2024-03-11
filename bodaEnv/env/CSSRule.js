// CSSRule对象

bodaEnv.memory.globlProtoObj["CSSRule"] = function CSSRule() {
  let arg = arguments[0];
  // debugger;
  if (!arg){
    return bodaEnv.toolsFunc.throwError('TypeError',`Illegal constructor`)
  }
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSRule"], "CSSRule");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "CHARSET_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "IMPORT_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "MEDIA_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "FONT_FACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "PAGE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "NAMESPACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "KEYFRAMES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "KEYFRAME_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "COUNTER_STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "FONT_FEATURE_VALUES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"], "SUPPORTS_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "CSSRule", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "cssText", {
  configurable: true,
  enumerable: true,
  get: {
    cssText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "CSSRule", "cssText_get", arguments);
    }
  }.cssText,
  set: {
    cssText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "CSSRule", "cssText_set", arguments);
    }
  }.cssText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "parentRule", {
  configurable: true,
  enumerable: true,
  get: {
    parentRule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "CSSRule", "parentRule_get", arguments);
    }
  }.parentRule,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "parentStyleSheet", {
  configurable: true,
  enumerable: true,
  get: {
    parentStyleSheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "CSSRule", "parentStyleSheet_get", arguments);
    }
  }.parentStyleSheet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "CHARSET_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "IMPORT_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "MEDIA_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "FONT_FACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "PAGE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "NAMESPACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "KEYFRAMES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "KEYFRAME_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "COUNTER_STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "FONT_FEATURE_VALUES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSRule"].prototype, "SUPPORTS_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});