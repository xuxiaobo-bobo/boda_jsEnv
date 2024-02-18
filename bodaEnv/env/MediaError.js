// MediaError对象

bodaEnv.memory.globlProtoObj["MediaError"] = function MediaError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaError"], "MediaError");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"], "MEDIA_ERR_ABORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"], "MEDIA_ERR_NETWORK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"], "MEDIA_ERR_DECODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"], "MEDIA_ERR_SRC_NOT_SUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaError"].prototype, "MediaError", "code_get", arguments);
    }
  }.code,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaError"].prototype, "MediaError", "message_get", arguments);
    }
  }.message,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"].prototype, "MEDIA_ERR_ABORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"].prototype, "MEDIA_ERR_NETWORK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"].prototype, "MEDIA_ERR_DECODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaError"].prototype, "MEDIA_ERR_SRC_NOT_SUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});