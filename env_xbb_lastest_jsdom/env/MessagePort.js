// MessagePort对象

bodavm.memory.globalobj['MessagePort'] = function MessagePort() {
  console.log_copy('MessagePort 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MessagePort)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MessagePort'], "MessagePort");
bodavm.memory.globalobj['MessagePort'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MessagePort'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MessagePort', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessagePort', "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "onmessageerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessagePort', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessagePort', "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "postMessage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessagePort', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessagePort'].prototype, "MessagePort", "start", arguments);
  }
}, 'prototype');