// Request对象

Request = function Request() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Request)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Request': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Request 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Request, "Request");
bodavm.toolsFunc.defineProperty(Request.prototype, "method", {
  configurable: true,
  enumerable: true,
  get: function method() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "method_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "headers", {
  configurable: true,
  enumerable: true,
  get: function headers() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "headers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "destination", {
  configurable: true,
  enumerable: true,
  get: function destination() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "destination_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "referrer", {
  configurable: true,
  enumerable: true,
  get: function referrer() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "referrer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "referrerPolicy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "mode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "credentials", {
  configurable: true,
  enumerable: true,
  get: function credentials() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "credentials_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "cache", {
  configurable: true,
  enumerable: true,
  get: function cache() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "cache_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "redirect", {
  configurable: true,
  enumerable: true,
  get: function redirect() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "redirect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "integrity", {
  configurable: true,
  enumerable: true,
  get: function integrity() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "integrity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "keepalive", {
  configurable: true,
  enumerable: true,
  get: function keepalive() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "keepalive_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "signal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "isHistoryNavigation", {
  configurable: true,
  enumerable: true,
  get: function isHistoryNavigation() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "isHistoryNavigation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "bodyUsed", {
  configurable: true,
  enumerable: true,
  get: function bodyUsed() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "bodyUsed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Request.prototype, "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arrayBuffer() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "arrayBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Request.prototype, "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blob() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "blob", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Request.prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "clone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Request.prototype, "formData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function formData() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "formData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Request.prototype, "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function json() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "json", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Request.prototype, "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function text() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "text", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Request.prototype, "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "body_get", arguments);
  },
  set: undefined
});