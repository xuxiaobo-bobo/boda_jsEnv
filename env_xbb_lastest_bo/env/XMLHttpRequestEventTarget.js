// XMLHttpRequestEventTarget对象

XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XMLHttpRequestEventTarget)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XMLHttpRequestEventTarget 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XMLHttpRequestEventTarget, "XMLHttpRequestEventTarget");
XMLHttpRequestEventTarget.prototype.__proto__ = EventTarget.prototype;
XMLHttpRequestEventTarget.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {
  configurable: true,
  enumerable: true,
  get: function ontimeout() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "ontimeout_get", arguments);
  },
  set: function ontimeout() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "ontimeout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {
  configurable: true,
  enumerable: true,
  get: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadend_get", arguments);
  },
  set: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadend_set", arguments);
  }
});