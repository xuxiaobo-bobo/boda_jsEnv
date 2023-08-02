// CSSConditionRule对象

CSSConditionRule = function CSSConditionRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSConditionRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSConditionRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSConditionRule, "CSSConditionRule");
CSSConditionRule.prototype.__proto__ = CSSGroupingRule.prototype;
CSSConditionRule.__proto__ = CSSGroupingRule;
bodavm.toolsFunc.defineProperty(CSSConditionRule.prototype, "conditionText", {
  configurable: true,
  enumerable: true,
  get: function conditionText() {
    return bodavm.toolsFunc.dispatch(this, CSSConditionRule.prototype, "CSSConditionRule", "conditionText_get", arguments);
  },
  set: undefined
});