// XPathEvaluator对象

bodaEnv.memory.globlProtoObj["XPathEvaluator"] = function XPathEvaluator() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XPathEvaluator 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XPathEvaluator"], "XPathEvaluator");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathEvaluator"].prototype, "createExpression", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createExpression() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathEvaluator"].prototype, "XPathEvaluator", "createExpression", arguments);
    }
  }.createExpression
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathEvaluator"].prototype, "createNSResolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createNSResolver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathEvaluator"].prototype, "XPathEvaluator", "createNSResolver", arguments);
    }
  }.createNSResolver
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathEvaluator"].prototype, "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    evaluate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathEvaluator"].prototype, "XPathEvaluator", "evaluate", arguments);
    }
  }.evaluate
});