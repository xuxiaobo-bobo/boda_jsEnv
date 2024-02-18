// RadioNodeList对象

bodaEnv.memory.globlProtoObj["RadioNodeList"] = function RadioNodeList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RadioNodeList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RadioNodeList"], "RadioNodeList");
bodaEnv.memory.globlProtoObj["RadioNodeList"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["NodeList"].prototype;
bodaEnv.memory.globlProtoObj["RadioNodeList"].__proto__ = bodaEnv.memory.globlProtoObj["NodeList"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RadioNodeList"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RadioNodeList"].prototype, "RadioNodeList", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RadioNodeList"].prototype, "RadioNodeList", "value_set", arguments);
    }
  }.value
});