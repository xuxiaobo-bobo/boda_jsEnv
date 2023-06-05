// StorageEvent对象

bodavm.memory.globalobj['StorageEvent'] = function StorageEvent() {
  console.log_copy('StorageEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof StorageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StorageEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StorageEvent'], "StorageEvent");
bodavm.memory.globalobj['StorageEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['StorageEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('StorageEvent', "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageEvent'].prototype, "StorageEvent", "key_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StorageEvent', "oldValue", {
  configurable: true,
  enumerable: true,
  get: function oldValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageEvent'].prototype, "StorageEvent", "oldValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StorageEvent', "newValue", {
  configurable: true,
  enumerable: true,
  get: function newValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageEvent'].prototype, "StorageEvent", "newValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StorageEvent', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageEvent'].prototype, "StorageEvent", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StorageEvent', "storageArea", {
  configurable: true,
  enumerable: true,
  get: function storageArea() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageEvent'].prototype, "StorageEvent", "storageArea_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StorageEvent', "initStorageEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initStorageEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageEvent'].prototype, "StorageEvent", "initStorageEvent", arguments);
  }
}, 'prototype');