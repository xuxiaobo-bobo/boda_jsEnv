// WebTransport对象

WebTransport = function WebTransport() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebTransport': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebTransport 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebTransport, "WebTransport");
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "incomingUnidirectionalStreams", {
  configurable: true,
  enumerable: true,
  get: function incomingUnidirectionalStreams() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "incomingUnidirectionalStreams_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "incomingBidirectionalStreams", {
  configurable: true,
  enumerable: true,
  get: function incomingBidirectionalStreams() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "incomingBidirectionalStreams_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "datagrams", {
  configurable: true,
  enumerable: true,
  get: function datagrams() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "datagrams_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "ready_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "closed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "createBidirectionalStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBidirectionalStream() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "createBidirectionalStream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebTransport.prototype, "createUnidirectionalStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createUnidirectionalStream() {
    return bodavm.toolsFunc.dispatch(this, WebTransport.prototype, "WebTransport", "createUnidirectionalStream", arguments);
  }
});