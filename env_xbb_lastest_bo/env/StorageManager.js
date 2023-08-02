// StorageManager对象

StorageManager = function StorageManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StorageManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StorageManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StorageManager, "StorageManager");
StorageManager.prototype.__proto__ = EventTarget.prototype;
StorageManager.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(StorageManager.prototype, "estimate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function estimate() {
    return bodavm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "estimate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StorageManager.prototype, "persisted", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function persisted() {
    return bodavm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "persisted", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StorageManager.prototype, "getDirectory", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDirectory() {
    return bodavm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "getDirectory", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StorageManager.prototype, "persist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function persist() {
    return bodavm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "persist", arguments);
  }
});