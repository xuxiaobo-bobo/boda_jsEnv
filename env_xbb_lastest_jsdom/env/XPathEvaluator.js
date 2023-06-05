// XPathEvaluator对象

bodavm.memory.globalobj['XPathEvaluator'] = function XPathEvaluator() {
  console.log_copy('XPathEvaluator 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.XPathEvaluator();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XPathEvaluator'], "XPathEvaluator");
bodavm.toolsFunc.defineProperty('XPathEvaluator', "createExpression", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createExpression() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathEvaluator'].prototype, "XPathEvaluator", "createExpression", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathEvaluator', "createNSResolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createNSResolver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathEvaluator'].prototype, "XPathEvaluator", "createNSResolver", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XPathEvaluator', "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function evaluate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathEvaluator'].prototype, "XPathEvaluator", "evaluate", arguments);
  }
}, 'prototype');