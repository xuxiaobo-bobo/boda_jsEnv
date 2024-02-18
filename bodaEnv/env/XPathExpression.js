// XPathExpresboda对象

bodaEnv.memory.globlProtoObj["XPathExpresboda"] = function XPathExpresboda() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XPathExpresboda 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XPathExpresboda"], "XPathExpresboda");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XPathExpresboda"].prototype, "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    evaluate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XPathExpresboda"].prototype, "XPathExpresboda", "evaluate", arguments);
    }
  }.evaluate
});