// Request对象

bodaEnv.memory.globlProtoObj["Request"] = function Request() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Request 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Request"], "Request");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "method", {
  configurable: true,
  enumerable: true,
  get: {
    method() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "method_get", arguments);
    }
  }.method,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "headers", {
  configurable: true,
  enumerable: true,
  get: {
    headers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "headers_get", arguments);
    }
  }.headers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "destination", {
  configurable: true,
  enumerable: true,
  get: {
    destination() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "destination_get", arguments);
    }
  }.destination,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "referrer", {
  configurable: true,
  enumerable: true,
  get: {
    referrer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "referrer_get", arguments);
    }
  }.referrer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "referrerPolicy_get", arguments);
    }
  }.referrerPolicy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "mode_get", arguments);
    }
  }.mode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "credentials", {
  configurable: true,
  enumerable: true,
  get: {
    credentials() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "credentials_get", arguments);
    }
  }.credentials,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "cache", {
  configurable: true,
  enumerable: true,
  get: {
    cache() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "cache_get", arguments);
    }
  }.cache,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "redirect", {
  configurable: true,
  enumerable: true,
  get: {
    redirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "redirect_get", arguments);
    }
  }.redirect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "integrity", {
  configurable: true,
  enumerable: true,
  get: {
    integrity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "integrity_get", arguments);
    }
  }.integrity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "keepalive", {
  configurable: true,
  enumerable: true,
  get: {
    keepalive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "keepalive_get", arguments);
    }
  }.keepalive,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: {
    signal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "signal_get", arguments);
    }
  }.signal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "isHistoryNavigation", {
  configurable: true,
  enumerable: true,
  get: {
    isHistoryNavigation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "isHistoryNavigation_get", arguments);
    }
  }.isHistoryNavigation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "bodyUsed", {
  configurable: true,
  enumerable: true,
  get: {
    bodyUsed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "bodyUsed_get", arguments);
    }
  }.bodyUsed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arrayBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "arrayBuffer", arguments);
    }
  }.arrayBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blob() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "blob", arguments);
    }
  }.blob
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "clone", arguments);
    }
  }.clone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "formData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    formData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "formData", arguments);
    }
  }.formData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    json() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "json", arguments);
    }
  }.json
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "text", arguments);
    }
  }.text
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Request"].prototype, "body", {
  configurable: true,
  enumerable: true,
  get: {
    body() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Request"].prototype, "Request", "body_get", arguments);
    }
  }.body,
  set: undefined
});