// CSSStyleRule对象

CSSStyleRule = function CSSStyleRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSStyleRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSStyleRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSStyleRule, "CSSStyleRule");
CSSStyleRule.prototype.__proto__ = CSSRule.prototype;
CSSStyleRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSStyleRule.prototype, "selectorText", {
  configurable: true,
  enumerable: true,
  get: function selectorText() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "selectorText_get", arguments);
  },
  set: function selectorText() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "selectorText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleRule.prototype, "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "style_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleRule.prototype, "styleMap", {
  configurable: true,
  enumerable: true,
  get: function styleMap() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "styleMap_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleRule.prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "cssRules_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleRule.prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "deleteRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleRule.prototype, "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "insertRule", arguments);
  }
});