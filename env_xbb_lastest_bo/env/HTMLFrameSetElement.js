// HTMLFrameSetElement对象

HTMLFrameSetElement = function HTMLFrameSetElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLFrameSetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLFrameSetElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLFrameSetElement, "HTMLFrameSetElement");
HTMLFrameSetElement.prototype.__proto__ = HTMLElement.prototype;
HTMLFrameSetElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "cols", {
  configurable: true,
  enumerable: true,
  get: function cols() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "cols_get", arguments);
  },
  set: function cols() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "cols_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "rows_get", arguments);
  },
  set: function rows() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "rows_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onafterprint", {
  configurable: true,
  enumerable: true,
  get: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onafterprint_get", arguments);
  },
  set: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onafterprint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeprint_get", arguments);
  },
  set: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeprint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeunload_get", arguments);
  },
  set: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeunload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onhashchange", {
  configurable: true,
  enumerable: true,
  get: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onhashchange_get", arguments);
  },
  set: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onhashchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onlanguagechange_get", arguments);
  },
  set: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onlanguagechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessageerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onoffline", {
  configurable: true,
  enumerable: true,
  get: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onoffline_get", arguments);
  },
  set: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onoffline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "ononline", {
  configurable: true,
  enumerable: true,
  get: function ononline() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "ononline_get", arguments);
  },
  set: function ononline() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "ononline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onpagehide", {
  configurable: true,
  enumerable: true,
  get: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpagehide_get", arguments);
  },
  set: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpagehide_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onpageshow", {
  configurable: true,
  enumerable: true,
  get: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpageshow_get", arguments);
  },
  set: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpageshow_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onpopstate", {
  configurable: true,
  enumerable: true,
  get: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpopstate_get", arguments);
  },
  set: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpopstate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onrejectionhandled_get", arguments);
  },
  set: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onrejectionhandled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onstorage", {
  configurable: true,
  enumerable: true,
  get: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onstorage_get", arguments);
  },
  set: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onstorage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunhandledrejection_get", arguments);
  },
  set: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunhandledrejection_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onunload", {
  configurable: true,
  enumerable: true,
  get: function onunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunload_get", arguments);
  },
  set: function onunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunload_set", arguments);
  }
});