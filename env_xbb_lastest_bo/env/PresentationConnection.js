// PresentationConnection对象

PresentationConnection = function PresentationConnection() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PresentationConnection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PresentationConnection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PresentationConnection, "PresentationConnection");
PresentationConnection.prototype.__proto__ = EventTarget.prototype;
PresentationConnection.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "onterminate", {
  configurable: true,
  enumerable: true,
  get: function onterminate() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onterminate_get", arguments);
  },
  set: function onterminate() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onterminate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "binaryType", {
  configurable: true,
  enumerable: true,
  get: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "binaryType_get", arguments);
  },
  set: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "binaryType_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "send", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationConnection.prototype, "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function terminate() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnection.prototype, "PresentationConnection", "terminate", arguments);
  }
});