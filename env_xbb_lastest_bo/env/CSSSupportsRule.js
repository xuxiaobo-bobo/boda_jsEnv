// CSSSupportsRule对象

CSSSupportsRule = function CSSSupportsRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSSupportsRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSSupportsRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSSupportsRule, "CSSSupportsRule");
CSSSupportsRule.prototype.__proto__ = CSSConditionRule.prototype;
CSSSupportsRule.__proto__ = CSSConditionRule;