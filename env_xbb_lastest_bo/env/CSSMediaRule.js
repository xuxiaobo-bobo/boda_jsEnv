// CSSMediaRule对象

CSSMediaRule = function CSSMediaRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMediaRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMediaRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMediaRule, "CSSMediaRule");
CSSMediaRule.prototype.__proto__ = CSSConditionRule.prototype;
CSSMediaRule.__proto__ = CSSConditionRule;
bodavm.toolsFunc.defineProperty(CSSMediaRule.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, CSSMediaRule.prototype, "CSSMediaRule", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, CSSMediaRule.prototype, "CSSMediaRule", "media_set", arguments);
  }
});