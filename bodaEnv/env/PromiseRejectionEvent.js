// PromiseRejectionEvent对象

bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"] = function PromiseRejectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PromiseRejectionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"], "PromiseRejectionEvent");
bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"].prototype, "promise", {
  configurable: true,
  enumerable: true,
  get: {
    promise() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"].prototype, "PromiseRejectionEvent", "promise_get", arguments);
    }
  }.promise,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"].prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: {
    reason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PromiseRejectionEvent"].prototype, "PromiseRejectionEvent", "reason_get", arguments);
    }
  }.reason,
  set: undefined
});