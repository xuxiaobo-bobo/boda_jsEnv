// PresentationConnection对象

bodavm.memory.globalobj['PresentationConnection'] = function PresentationConnection() {
  console.log_copy('PresentationConnection 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PresentationConnection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationConnection'], "PresentationConnection");
bodavm.memory.globalobj['PresentationConnection'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PresentationConnection'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PresentationConnection', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "onterminate", {
  configurable: true,
  enumerable: true,
  get: function onterminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onterminate_get", arguments);
  },
  set: function onterminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onterminate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "binaryType", {
  configurable: true,
  enumerable: true,
  get: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "binaryType_get", arguments);
  },
  set: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "binaryType_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "send", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnection', "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function terminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnection'].prototype, "PresentationConnection", "terminate", arguments);
  }
}, 'prototype');