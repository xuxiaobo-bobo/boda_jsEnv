// DOMError对象

bodaEnv.memory.globlProtoObj["DOMError"] = function DOMError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMError"], "DOMError");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMError"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMError"].prototype, "DOMError", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMError"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMError"].prototype, "DOMError", "message_get", arguments);
    }
  }.message,
  set: undefined
});