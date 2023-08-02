// IDBVersionChangeEvent对象

IDBVersionChangeEvent = function IDBVersionChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBVersionChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IDBVersionChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBVersionChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBVersionChangeEvent, "IDBVersionChangeEvent");
IDBVersionChangeEvent.prototype.__proto__ = Event.prototype;
IDBVersionChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "oldVersion", {
  configurable: true,
  enumerable: true,
  get: function oldVersion() {
    return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "oldVersion_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "newVersion", {
  configurable: true,
  enumerable: true,
  get: function newVersion() {
    return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "newVersion_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "dataLoss", {
  configurable: true,
  enumerable: true,
  get: function dataLoss() {
    return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "dataLoss_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "dataLossMessage", {
  configurable: true,
  enumerable: true,
  get: function dataLossMessage() {
    return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "dataLossMessage_get", arguments);
  },
  set: undefined
});