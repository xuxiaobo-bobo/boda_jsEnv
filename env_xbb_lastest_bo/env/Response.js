// Response对象

Response = function Response() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Response 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Response, "Response");
bodavm.toolsFunc.defineProperty(Response, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, Response, "Response", "error", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response, "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function json() {
    return bodavm.toolsFunc.dispatch(this, Response, "Response", "json", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response, "redirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function redirect() {
    return bodavm.toolsFunc.dispatch(this, Response, "Response", "redirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "redirected", {
  configurable: true,
  enumerable: true,
  get: function redirected() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "redirected_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "status_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "ok", {
  configurable: true,
  enumerable: true,
  get: function ok() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "ok_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "statusText", {
  configurable: true,
  enumerable: true,
  get: function statusText() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "statusText_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "headers", {
  configurable: true,
  enumerable: true,
  get: function headers() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "headers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "body_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "bodyUsed", {
  configurable: true,
  enumerable: true,
  get: function bodyUsed() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "bodyUsed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Response.prototype, "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arrayBuffer() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "arrayBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response.prototype, "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blob() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "blob", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response.prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "clone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response.prototype, "formData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function formData() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "formData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response.prototype, "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function json() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "json", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Response.prototype, "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function text() {
    return bodavm.toolsFunc.dispatch(this, Response.prototype, "Response", "text", arguments);
  }
});