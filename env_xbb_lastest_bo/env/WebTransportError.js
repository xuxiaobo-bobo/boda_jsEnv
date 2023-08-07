// WebTransportError对象

WebTransportError = function WebTransportError() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebTransportError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebTransportError, "WebTransportError");
WebTransportError.prototype.__proto__ = DOMException.prototype;
WebTransportError.__proto__ = DOMException;
bodavm.toolsFunc.defineProperty(WebTransportError.prototype, "streamErrorCode", {
  configurable: true,
  enumerable: true,
  get: function streamErrorCode() {
    return bodavm.toolsFunc.dispatch(this, WebTransportError.prototype, "WebTransportError", "streamErrorCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransportError.prototype, "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, WebTransportError.prototype, "WebTransportError", "source_get", arguments);
  },
  set: undefined
});