// IDBRequest对象

IDBRequest = function IDBRequest() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBRequest 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBRequest, "IDBRequest");
IDBRequest.prototype.__proto__ = EventTarget.prototype;
IDBRequest.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "result_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "error_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "source_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "transaction", {
  configurable: true,
  enumerable: true,
  get: function transaction() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "transaction_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "onsuccess", {
  configurable: true,
  enumerable: true,
  get: function onsuccess() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onsuccess_get", arguments);
  },
  set: function onsuccess() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onsuccess_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onerror_set", arguments);
  }
});