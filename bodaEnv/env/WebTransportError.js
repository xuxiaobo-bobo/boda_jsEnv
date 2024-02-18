// WebTransportError对象

bodaEnv.memory.globlProtoObj["WebTransportError"] = function WebTransportError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebTransportError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebTransportError"], "WebTransportError");
bodaEnv.memory.globlProtoObj["WebTransportError"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DOMException"].prototype;
bodaEnv.memory.globlProtoObj["WebTransportError"].__proto__ = bodaEnv.memory.globlProtoObj["DOMException"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransportError"].prototype, "streamErrorCode", {
  configurable: true,
  enumerable: true,
  get: {
    streamErrorCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransportError"].prototype, "WebTransportError", "streamErrorCode_get", arguments);
    }
  }.streamErrorCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransportError"].prototype, "source", {
  configurable: true,
  enumerable: true,
  get: {
    source() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransportError"].prototype, "WebTransportError", "source_get", arguments);
    }
  }.source,
  set: undefined
});