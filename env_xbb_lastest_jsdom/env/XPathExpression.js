// XPathExpression对象

bodavm.memory.globalobj['XPathExpression'] = function XPathExpression() {
  console.log_copy('XPathExpression 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XPathExpression)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XPathExpression'], "XPathExpression");
bodavm.toolsFunc.defineProperty('XPathExpression', "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function evaluate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathExpression'].prototype, "XPathExpression", "evaluate", arguments);
  }
}, 'prototype');