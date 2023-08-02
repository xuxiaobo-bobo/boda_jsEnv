// CSSRule对象

CSSRule = function CSSRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSRule, "CSSRule");
bodavm.toolsFunc.defineProperty(CSSRule, "STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(CSSRule, "CHARSET_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(CSSRule, "IMPORT_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(CSSRule, "MEDIA_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(CSSRule, "FONT_FACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(CSSRule, "PAGE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(CSSRule, "NAMESPACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(CSSRule, "KEYFRAMES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(CSSRule, "KEYFRAME_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(CSSRule, "COUNTER_STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(CSSRule, "SUPPORTS_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(CSSRule, "FONT_FEATURE_VALUES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "cssText", {
  configurable: true,
  enumerable: true,
  get: function cssText() {
    return bodavm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "cssText_get", arguments);
  },
  set: function cssText() {
    return bodavm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "cssText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "parentRule", {
  configurable: true,
  enumerable: true,
  get: function parentRule() {
    return bodavm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "parentRule_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "parentStyleSheet", {
  configurable: true,
  enumerable: true,
  get: function parentStyleSheet() {
    return bodavm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "parentStyleSheet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "CHARSET_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "IMPORT_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "MEDIA_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "FONT_FACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "PAGE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "NAMESPACE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "KEYFRAMES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "KEYFRAME_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "COUNTER_STYLE_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "SUPPORTS_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(CSSRule.prototype, "FONT_FEATURE_VALUES_RULE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});