// XPathEvaluator对象

XPathEvaluator = function XPathEvaluator() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XPathEvaluator 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XPathEvaluator, "XPathEvaluator");
bodavm.toolsFunc.defineProperty(XPathEvaluator.prototype, "createExpression", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createExpression() {
    return bodavm.toolsFunc.dispatch(this, XPathEvaluator.prototype, "XPathEvaluator", "createExpression", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XPathEvaluator.prototype, "createNSResolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createNSResolver() {
    return bodavm.toolsFunc.dispatch(this, XPathEvaluator.prototype, "XPathEvaluator", "createNSResolver", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XPathEvaluator.prototype, "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function evaluate() {
    return bodavm.toolsFunc.dispatch(this, XPathEvaluator.prototype, "XPathEvaluator", "evaluate", arguments);
  }
});