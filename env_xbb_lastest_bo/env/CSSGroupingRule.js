// CSSGroupingRule对象

CSSGroupingRule = function CSSGroupingRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSGroupingRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSGroupingRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSGroupingRule, "CSSGroupingRule");
CSSGroupingRule.prototype.__proto__ = CSSRule.prototype;
CSSGroupingRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSGroupingRule.prototype, "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, CSSGroupingRule.prototype, "CSSGroupingRule", "cssRules_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSGroupingRule.prototype, "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, CSSGroupingRule.prototype, "CSSGroupingRule", "deleteRule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSGroupingRule.prototype, "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRule() {
    return bodavm.toolsFunc.dispatch(this, CSSGroupingRule.prototype, "CSSGroupingRule", "insertRule", arguments);
  }
});