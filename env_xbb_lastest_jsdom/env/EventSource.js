// EventSource对象

bodavm.memory.globalobj['EventSource'] = function EventSource() {
  console.log_copy('EventSource 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof EventSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'EventSource': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EventSource'], "EventSource");
bodavm.memory.globalobj['EventSource'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['EventSource'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('EventSource', "CONNECTING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('EventSource', "OPEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('EventSource', "CLOSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('EventSource', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "withCredentials", {
  configurable: true,
  enumerable: true,
  get: function withCredentials() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "withCredentials_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "onopen", {
  configurable: true,
  enumerable: true,
  get: function onopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "onopen_get", arguments);
  },
  set: function onopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "onopen_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "CONNECTING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "OPEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "CLOSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventSource', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventSource'].prototype, "EventSource", "close", arguments);
  }
}, 'prototype');