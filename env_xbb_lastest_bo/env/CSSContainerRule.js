// CSSContainerRule对象

CSSContainerRule = function CSSContainerRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSContainerRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSContainerRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSContainerRule, "CSSContainerRule");
CSSContainerRule.prototype.__proto__ = CSSConditionRule.prototype;
CSSContainerRule.__proto__ = CSSConditionRule;
bodavm.toolsFunc.defineProperty(CSSContainerRule.prototype, "containerName", {
  configurable: true,
  enumerable: true,
  get: function containerName() {
    return bodavm.toolsFunc.dispatch(this, CSSContainerRule.prototype, "CSSContainerRule", "containerName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSContainerRule.prototype, "containerQuery", {
  configurable: true,
  enumerable: true,
  get: function containerQuery() {
    return bodavm.toolsFunc.dispatch(this, CSSContainerRule.prototype, "CSSContainerRule", "containerQuery_get", arguments);
  },
  set: undefined
});