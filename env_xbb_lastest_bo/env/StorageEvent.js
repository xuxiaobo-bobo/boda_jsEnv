// StorageEvent对象

StorageEvent = function StorageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StorageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StorageEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StorageEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StorageEvent, "StorageEvent");
StorageEvent.prototype.__proto__ = Event.prototype;
StorageEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(StorageEvent.prototype, "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "key_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StorageEvent.prototype, "oldValue", {
  configurable: true,
  enumerable: true,
  get: function oldValue() {
    return bodavm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "oldValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StorageEvent.prototype, "newValue", {
  configurable: true,
  enumerable: true,
  get: function newValue() {
    return bodavm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "newValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StorageEvent.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StorageEvent.prototype, "storageArea", {
  configurable: true,
  enumerable: true,
  get: function storageArea() {
    return bodavm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "storageArea_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StorageEvent.prototype, "initStorageEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initStorageEvent() {
    return bodavm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "initStorageEvent", arguments);
  }
});