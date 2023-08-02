// RTCSctpTransport对象

RTCSctpTransport = function RTCSctpTransport() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCSctpTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCSctpTransport 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCSctpTransport, "RTCSctpTransport");
RTCSctpTransport.prototype.__proto__ = EventTarget.prototype;
RTCSctpTransport.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "transport", {
  configurable: true,
  enumerable: true,
  get: function transport() {
    return bodavm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "transport_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "maxMessageSize", {
  configurable: true,
  enumerable: true,
  get: function maxMessageSize() {
    return bodavm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "maxMessageSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "maxChannels", {
  configurable: true,
  enumerable: true,
  get: function maxChannels() {
    return bodavm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "maxChannels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "onstatechange_set", arguments);
  }
});