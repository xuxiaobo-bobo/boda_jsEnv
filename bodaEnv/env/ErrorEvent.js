// ErrorEvent对象

bodaEnv.memory.globlProtoObj["ErrorEvent"] = function ErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ErrorEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ErrorEvent"], "ErrorEvent");
bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["ErrorEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "ErrorEvent", "message_get", arguments);
    }
  }.message,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "filename", {
  configurable: true,
  enumerable: true,
  get: {
    filename() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "ErrorEvent", "filename_get", arguments);
    }
  }.filename,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "lineno", {
  configurable: true,
  enumerable: true,
  get: {
    lineno() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "ErrorEvent", "lineno_get", arguments);
    }
  }.lineno,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "colno", {
  configurable: true,
  enumerable: true,
  get: {
    colno() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "ErrorEvent", "colno_get", arguments);
    }
  }.colno,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ErrorEvent"].prototype, "ErrorEvent", "error_get", arguments);
    }
  }.error,
  set: undefined
});