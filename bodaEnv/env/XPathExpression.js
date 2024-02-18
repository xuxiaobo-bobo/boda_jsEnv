// XPathExpression对象

bodaEnv.memory.globlProtoObj["XPathExpression"] = function XPathExpression() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XPathExpression 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XPathExpression"], "XPathExpression");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathExpression"].prototype, "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    evaluate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathExpression"].prototype, "XPathExpression", "evaluate", arguments);
    }
  }.evaluate
});