// Response对象

bodaEnv.memory.globlProtoObj["Response"] = function Response() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Response 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Response"], "Response");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"], "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAElement"], "Response", "error", arguments);
    }
  }.error
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"], "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    json() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAElement"], "Response", "json", arguments);
    }
  }.json
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"], "redirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    redirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAElement"], "Response", "redirect", arguments);
    }
  }.redirect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "redirected", {
  configurable: true,
  enumerable: true,
  get: {
    redirected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "redirected_get", arguments);
    }
  }.redirected,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "status_get", arguments);
    }
  }.status,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "ok", {
  configurable: true,
  enumerable: true,
  get: {
    ok() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "ok_get", arguments);
    }
  }.ok,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "statusText", {
  configurable: true,
  enumerable: true,
  get: {
    statusText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "statusText_get", arguments);
    }
  }.statusText,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "headers", {
  configurable: true,
  enumerable: true,
  get: {
    headers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "headers_get", arguments);
    }
  }.headers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "body", {
  configurable: true,
  enumerable: true,
  get: {
    body() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "body_get", arguments);
    }
  }.body,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "bodyUsed", {
  configurable: true,
  enumerable: true,
  get: {
    bodyUsed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "bodyUsed_get", arguments);
    }
  }.bodyUsed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arrayBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "arrayBuffer", arguments);
    }
  }.arrayBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blob() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "blob", arguments);
    }
  }.blob
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "clone", arguments);
    }
  }.clone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "formData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    formData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "formData", arguments);
    }
  }.formData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    json() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "json", arguments);
    }
  }.json
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Response"].prototype, "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Response"].prototype, "Response", "text", arguments);
    }
  }.text
});