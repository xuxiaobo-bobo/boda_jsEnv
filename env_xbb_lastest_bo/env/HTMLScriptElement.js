// HTMLScriptElement对象

HTMLScriptElement = function HTMLScriptElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLScriptElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLScriptElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLScriptElement, "HTMLScriptElement");
HTMLScriptElement.prototype.__proto__ = HTMLElement.prototype;
HTMLScriptElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLScriptElement, "supports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function supports() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement, "HTMLScriptElement", "supports", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "noModule", {
  configurable: true,
  enumerable: true,
  get: function noModule() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "noModule_get", arguments);
  },
  set: function noModule() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "noModule_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "charset_get", arguments);
  },
  set: function charset() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "charset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "async", {
  configurable: true,
  enumerable: true,
  get: function async() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "async_get", arguments);
  },
  set: function async() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "async_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "defer", {
  configurable: true,
  enumerable: true,
  get: function defer() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "defer_get", arguments);
  },
  set: function defer() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "defer_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "crossOrigin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "event", {
  configurable: true,
  enumerable: true,
  get: function event() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "event_get", arguments);
  },
  set: function event() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "event_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "htmlFor", {
  configurable: true,
  enumerable: true,
  get: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "htmlFor_get", arguments);
  },
  set: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "htmlFor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "integrity", {
  configurable: true,
  enumerable: true,
  get: function integrity() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "integrity_get", arguments);
  },
  set: function integrity() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "integrity_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "fetchPriority_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "blocking", {
  configurable: true,
  enumerable: true,
  get: function blocking() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "blocking_get", arguments);
  },
  set: function blocking() {
    return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "blocking_set", arguments);
  }
});