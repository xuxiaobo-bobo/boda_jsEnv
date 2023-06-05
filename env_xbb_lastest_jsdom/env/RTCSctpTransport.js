// RTCSctpTransport对象

bodavm.memory.globalobj['RTCSctpTransport'] = function RTCSctpTransport() {
  console.log_copy('RTCSctpTransport 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCSctpTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCSctpTransport'], "RTCSctpTransport");
bodavm.memory.globalobj['RTCSctpTransport'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RTCSctpTransport'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RTCSctpTransport', "transport", {
  configurable: true,
  enumerable: true,
  get: function transport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSctpTransport'].prototype, "RTCSctpTransport", "transport_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCSctpTransport', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSctpTransport'].prototype, "RTCSctpTransport", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCSctpTransport', "maxMessageSize", {
  configurable: true,
  enumerable: true,
  get: function maxMessageSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSctpTransport'].prototype, "RTCSctpTransport", "maxMessageSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCSctpTransport', "maxChannels", {
  configurable: true,
  enumerable: true,
  get: function maxChannels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSctpTransport'].prototype, "RTCSctpTransport", "maxChannels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCSctpTransport', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSctpTransport'].prototype, "RTCSctpTransport", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCSctpTransport'].prototype, "RTCSctpTransport", "onstatechange_set", arguments);
  }
}, 'prototype');