// WebTransportBidirectionalStream对象

WebTransportBidirectionalStream = function WebTransportBidirectionalStream() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebTransportBidirectionalStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebTransportBidirectionalStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebTransportBidirectionalStream, "WebTransportBidirectionalStream");
bodavm.toolsFunc.defineProperty(WebTransportBidirectionalStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, WebTransportBidirectionalStream.prototype, "WebTransportBidirectionalStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransportBidirectionalStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, WebTransportBidirectionalStream.prototype, "WebTransportBidirectionalStream", "writable_get", arguments);
  },
  set: undefined
});