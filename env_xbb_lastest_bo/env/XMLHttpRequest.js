// XMLHttpRequest对象

XMLHttpRequest = function XMLHttpRequest() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XMLHttpRequest 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XMLHttpRequest, "XMLHttpRequest");
XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "UNSENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "OPENED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {
  configurable: true,
  enumerable: true,
  get: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "onreadystatechange_get", arguments);
  },
  set: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "onreadystatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "timeout", {
  configurable: true,
  enumerable: true,
  get: function timeout() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "timeout_get", arguments);
  },
  set: function timeout() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "timeout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "withCredentials", {
  configurable: true,
  enumerable: true,
  get: function withCredentials() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "withCredentials_get", arguments);
  },
  set: function withCredentials() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "withCredentials_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "upload", {
  configurable: true,
  enumerable: true,
  get: function upload() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "upload_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseURL", {
  configurable: true,
  enumerable: true,
  get: function responseURL() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseURL_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "status_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "statusText", {
  configurable: true,
  enumerable: true,
  get: function statusText() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "statusText_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseType", {
  configurable: true,
  enumerable: true,
  get: function responseType() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseType_get", arguments);
  },
  set: function responseType() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseType_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "response", {
  configurable: true,
  enumerable: true,
  get: function response() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "response_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseText", {
  configurable: true,
  enumerable: true,
  get: function responseText() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseText_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseXML", {
  configurable: true,
  enumerable: true,
  get: function responseXML() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseXML_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "UNSENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "OPENED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "HEADERS_RECEIVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getAllResponseHeaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllResponseHeaders() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "getAllResponseHeaders", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getResponseHeader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getResponseHeader() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "getResponseHeader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "open", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "overrideMimeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function overrideMimeType() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "overrideMimeType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "send", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "setRequestHeader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRequestHeader() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "setRequestHeader", arguments);
  }
});