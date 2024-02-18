// ClipboardEvent对象

bodaEnv.memory.globlProtoObj["ClipboardEvent"] = function ClipboardEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ClipboardEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ClipboardEvent"], "ClipboardEvent");
bodaEnv.memory.globlProtoObj["ClipboardEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["ClipboardEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ClipboardEvent"].prototype, "clipboardData", {
  configurable: true,
  enumerable: true,
  get: {
    clipboardData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ClipboardEvent"].prototype, "ClipboardEvent", "clipboardData_get", arguments);
    }
  }.clipboardData,
  set: undefined
});