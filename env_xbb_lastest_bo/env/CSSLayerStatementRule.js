// CSSLayerStatementRule对象

CSSLayerStatementRule = function CSSLayerStatementRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSLayerStatementRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSLayerStatementRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSLayerStatementRule, "CSSLayerStatementRule");
CSSLayerStatementRule.prototype.__proto__ = CSSRule.prototype;
CSSLayerStatementRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSLayerStatementRule.prototype, "nameList", {
  configurable: true,
  enumerable: true,
  get: function nameList() {
    return bodavm.toolsFunc.dispatch(this, CSSLayerStatementRule.prototype, "CSSLayerStatementRule", "nameList_get", arguments);
  },
  set: undefined
});