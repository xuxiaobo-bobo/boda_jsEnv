// IDBDatabase对象

bodavm.memory.globalobj['IDBDatabase'] = function IDBDatabase() {
  console.log_copy('IDBDatabase 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBDatabase)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBDatabase'], "IDBDatabase");
bodavm.memory.globalobj['IDBDatabase'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['IDBDatabase'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('IDBDatabase', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "version", {
  configurable: true,
  enumerable: true,
  get: function version() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "version_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "objectStoreNames", {
  configurable: true,
  enumerable: true,
  get: function objectStoreNames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "objectStoreNames_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "onversionchange", {
  configurable: true,
  enumerable: true,
  get: function onversionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onversionchange_get", arguments);
  },
  set: function onversionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "onversionchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "createObjectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createObjectStore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "createObjectStore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "deleteObjectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteObjectStore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "deleteObjectStore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBDatabase', "transaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transaction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBDatabase'].prototype, "IDBDatabase", "transaction", arguments);
  }
}, 'prototype');