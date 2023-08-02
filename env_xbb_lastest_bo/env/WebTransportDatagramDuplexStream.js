// WebTransportDatagramDuplexStream对象

WebTransportDatagramDuplexStream = function WebTransportDatagramDuplexStream() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebTransportDatagramDuplexStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebTransportDatagramDuplexStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebTransportDatagramDuplexStream, "WebTransportDatagramDuplexStream");
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "writable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "maxDatagramSize", {
  configurable: true,
  enumerable: true,
  get: function maxDatagramSize() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "maxDatagramSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "incomingMaxAge", {
  configurable: true,
  enumerable: true,
  get: function incomingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "incomingMaxAge_get", arguments);
  },
  set: function incomingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "incomingMaxAge_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "outgoingMaxAge", {
  configurable: true,
  enumerable: true,
  get: function outgoingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "outgoingMaxAge_get", arguments);
  },
  set: function outgoingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "outgoingMaxAge_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "incomingHighWaterMark", {
  configurable: true,
  enumerable: true,
  get: function incomingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "incomingHighWaterMark_get", arguments);
  },
  set: function incomingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "incomingHighWaterMark_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebTransportDatagramDuplexStream.prototype, "outgoingHighWaterMark", {
  configurable: true,
  enumerable: true,
  get: function outgoingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "outgoingHighWaterMark_get", arguments);
  },
  set: function outgoingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, WebTransportDatagramDuplexStream.prototype, "WebTransportDatagramDuplexStream", "outgoingHighWaterMark_set", arguments);
  }
});