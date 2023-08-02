// CSSKeyframesRule对象

CSSKeyframesRule = function CSSKeyframesRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSKeyframesRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSKeyframesRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSKeyframesRule, "CSSKeyframesRule");
CSSKeyframesRule.prototype.__proto__ = CSSRule.prototype;
CSSKeyframesRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "cssRules_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "appendRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendRule() {
    return bodavm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "appendRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "deleteRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "findRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function findRule() {
    return bodavm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "findRule", arguments);
  }
});