// WebSocket对象

bodavm.memory.globalobj['WebSocket'] = function WebSocket() {
  console.log_copy('WebSocket 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebSocket)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebSocket': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebSocket'], "WebSocket");
bodavm.memory.globalobj['WebSocket'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['WebSocket'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('WebSocket', "CONNECTING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('WebSocket', "OPEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('WebSocket', "CLOSING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('WebSocket', "CLOSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('WebSocket', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "bufferedAmount", {
  configurable: true,
  enumerable: true,
  get: function bufferedAmount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "bufferedAmount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "onopen", {
  configurable: true,
  enumerable: true,
  get: function onopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onopen_get", arguments);
  },
  set: function onopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onopen_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "extensions", {
  configurable: true,
  enumerable: true,
  get: function extensions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "extensions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "protocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "binaryType", {
  configurable: true,
  enumerable: true,
  get: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "binaryType_get", arguments);
  },
  set: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "binaryType_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "CONNECTING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "OPEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "CLOSING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "CLOSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebSocket', "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebSocket'].prototype, "WebSocket", "send", arguments);
  }
}, 'prototype');