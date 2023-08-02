// WebGLContextEvent对象

WebGLContextEvent = function WebGLContextEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLContextEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebGLContextEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLContextEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLContextEvent, "WebGLContextEvent");
WebGLContextEvent.prototype.__proto__ = Event.prototype;
WebGLContextEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(WebGLContextEvent.prototype, "statusMessage", {
  configurable: true,
  enumerable: true,
  get: function statusMessage() {
    return bodavm.toolsFunc.dispatch(this, WebGLContextEvent.prototype, "WebGLContextEvent", "statusMessage_get", arguments);
  },
  set: undefined
});