// EventTarget对象

bodaEnv.memory.globlProtoObj["EventTarget"] = function EventTarget() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('EventTarget 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["EventTarget"], "EventTarget");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EventTarget"].prototype, "addEventListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addEventListener() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EventTarget"].prototype, "EventTarget", "addEventListener", arguments);
    }
  }.addEventListener
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EventTarget"].prototype, "dispatchEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    dispatchEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EventTarget"].prototype, "EventTarget", "dispatchEvent", arguments);
    }
  }.dispatchEvent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EventTarget"].prototype, "removeEventListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeEventListener() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EventTarget"].prototype, "EventTarget", "removeEventListener", arguments);
    }
  }.removeEventListener
});