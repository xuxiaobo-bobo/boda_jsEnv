// ServiceWorker对象

ServiceWorker = function ServiceWorker() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ServiceWorker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ServiceWorker 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ServiceWorker, "ServiceWorker");
ServiceWorker.prototype.__proto__ = EventTarget.prototype;
ServiceWorker.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(ServiceWorker.prototype, "scriptURL", {
  configurable: true,
  enumerable: true,
  get: function scriptURL() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "scriptURL_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorker.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ServiceWorker.prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorker.prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "postMessage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ServiceWorker.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onerror_set", arguments);
  }
});