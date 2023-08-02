// BackgroundFetchRegistration对象

BackgroundFetchRegistration = function BackgroundFetchRegistration() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BackgroundFetchRegistration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BackgroundFetchRegistration 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BackgroundFetchRegistration, "BackgroundFetchRegistration");
BackgroundFetchRegistration.prototype.__proto__ = EventTarget.prototype;
BackgroundFetchRegistration.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "uploadTotal", {
  configurable: true,
  enumerable: true,
  get: function uploadTotal() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "uploadTotal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "uploaded", {
  configurable: true,
  enumerable: true,
  get: function uploaded() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "uploaded_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "downloadTotal", {
  configurable: true,
  enumerable: true,
  get: function downloadTotal() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "downloadTotal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "downloaded", {
  configurable: true,
  enumerable: true,
  get: function downloaded() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "downloaded_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "result_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "failureReason", {
  configurable: true,
  enumerable: true,
  get: function failureReason() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "failureReason_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "recordsAvailable", {
  configurable: true,
  enumerable: true,
  get: function recordsAvailable() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "recordsAvailable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function match() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "match", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRegistration.prototype, "matchAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matchAll() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRegistration.prototype, "BackgroundFetchRegistration", "matchAll", arguments);
  }
});