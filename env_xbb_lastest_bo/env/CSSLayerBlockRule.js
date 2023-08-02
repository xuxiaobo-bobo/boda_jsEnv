// CSSLayerBlockRule对象

CSSLayerBlockRule = function CSSLayerBlockRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSLayerBlockRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSLayerBlockRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSLayerBlockRule, "CSSLayerBlockRule");
CSSLayerBlockRule.prototype.__proto__ = CSSGroupingRule.prototype;
CSSLayerBlockRule.__proto__ = CSSGroupingRule;
bodavm.toolsFunc.defineProperty(CSSLayerBlockRule.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSLayerBlockRule.prototype, "CSSLayerBlockRule", "name_get", arguments);
  },
  set: undefined
});