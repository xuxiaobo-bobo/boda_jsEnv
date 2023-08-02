// RemotePlayback对象

RemotePlayback = function RemotePlayback() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RemotePlayback)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RemotePlayback 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RemotePlayback, "RemotePlayback");
RemotePlayback.prototype.__proto__ = EventTarget.prototype;
RemotePlayback.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "onconnecting", {
  configurable: true,
  enumerable: true,
  get: function onconnecting() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "onconnecting_get", arguments);
  },
  set: function onconnecting() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "onconnecting_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "onconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "ondisconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "cancelWatchAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelWatchAvailability() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "cancelWatchAvailability", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prompt() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "prompt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RemotePlayback.prototype, "watchAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function watchAvailability() {
    return bodavm.toolsFunc.dispatch(this, RemotePlayback.prototype, "RemotePlayback", "watchAvailability", arguments);
  }
});