// XMLHttpRequest对象

bodaEnv.memory.globlProtoObj["XMLHttpRequest"] = function XMLHttpRequest() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XMLHttpRequest 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XMLHttpRequest"], "XMLHttpRequest");
bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XMLHttpRequest"].__proto__ = bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"], "UNSENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"], "OPENED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"], "HEADERS_RECEIVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"], "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"], "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "onreadystatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onreadystatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "onreadystatechange_get", arguments);
    }
  }.onreadystatechange,
  set: {
    onreadystatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "onreadystatechange_set", arguments);
    }
  }.onreadystatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "timeout", {
  configurable: true,
  enumerable: true,
  get: {
    timeout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "timeout_get", arguments);
    }
  }.timeout,
  set: {
    timeout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "timeout_set", arguments);
    }
  }.timeout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "withCredentials", {
  configurable: true,
  enumerable: true,
  get: {
    withCredentials() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "withCredentials_get", arguments);
    }
  }.withCredentials,
  set: {
    withCredentials() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "withCredentials_set", arguments);
    }
  }.withCredentials
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "upload", {
  configurable: true,
  enumerable: true,
  get: {
    upload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "upload_get", arguments);
    }
  }.upload,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "responseURL", {
  configurable: true,
  enumerable: true,
  get: {
    responseURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "responseURL_get", arguments);
    }
  }.responseURL,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "status_get", arguments);
    }
  }.status,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "statusText", {
  configurable: true,
  enumerable: true,
  get: {
    statusText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "statusText_get", arguments);
    }
  }.statusText,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "responseType", {
  configurable: true,
  enumerable: true,
  get: {
    responseType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "responseType_get", arguments);
    }
  }.responseType,
  set: {
    responseType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "responseType_set", arguments);
    }
  }.responseType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "response", {
  configurable: true,
  enumerable: true,
  get: {
    response() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "response_get", arguments);
    }
  }.response,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "responseText", {
  configurable: true,
  enumerable: true,
  get: {
    responseText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "responseText_get", arguments);
    }
  }.responseText,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "responseXML", {
  configurable: true,
  enumerable: true,
  get: {
    responseXML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "responseXML_get", arguments);
    }
  }.responseXML,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "UNSENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "OPENED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "HEADERS_RECEIVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "getAllResponseHeaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAllResponseHeaders() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "getAllResponseHeaders", arguments);
    }
  }.getAllResponseHeaders
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "getResponseHeader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getResponseHeader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "getResponseHeader", arguments);
    }
  }.getResponseHeader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "open", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "overrideMimeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    overrideMimeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "overrideMimeType", arguments);
    }
  }.overrideMimeType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    send() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "send", arguments);
    }
  }.send
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "setRequestHeader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setRequestHeader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "setRequestHeader", arguments);
    }
  }.setRequestHeader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "privateTokenOperationError", {
  configurable: true,
  enumerable: true,
  get: {
    privateTokenOperationError() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "privateTokenOperationError_get", arguments);
    }
  }.privateTokenOperationError,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "setPrivateToken", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPrivateToken() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequest"].prototype, "XMLHttpRequest", "setPrivateToken", arguments);
    }
  }.setPrivateToken
});