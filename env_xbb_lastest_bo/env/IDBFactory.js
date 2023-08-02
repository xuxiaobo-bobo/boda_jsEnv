// IDBFactory对象

IDBFactory = function IDBFactory() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBFactory)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBFactory 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBFactory, "IDBFactory");
bodavm.toolsFunc.defineProperty(IDBFactory.prototype, "cmp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cmp() {
    return bodavm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "cmp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype, "databases", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function databases() {
    return bodavm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "databases", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype, "deleteDatabase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteDatabase() {
    return bodavm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "deleteDatabase", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "open", arguments);
  }
});