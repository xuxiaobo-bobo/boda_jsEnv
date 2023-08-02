// CSSRuleList对象

CSSRuleList = function CSSRuleList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSRuleList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSRuleList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSRuleList, "CSSRuleList");
bodavm.toolsFunc.defineProperty(CSSRuleList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSRuleList.prototype, "CSSRuleList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSRuleList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, CSSRuleList.prototype, "CSSRuleList", "item", arguments);
  }
});