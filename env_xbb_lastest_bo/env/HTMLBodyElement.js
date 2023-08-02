// HTMLBodyElement对象

HTMLBodyElement = function HTMLBodyElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLBodyElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLBodyElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLBodyElement, "HTMLBodyElement");
HTMLBodyElement.prototype.__proto__ = HTMLElement.prototype;
HTMLBodyElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "link", {
  configurable: true,
  enumerable: true,
  get: function link() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "link_get", arguments);
  },
  set: function link() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "link_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "vLink", {
  configurable: true,
  enumerable: true,
  get: function vLink() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "vLink_get", arguments);
  },
  set: function vLink() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "vLink_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "aLink", {
  configurable: true,
  enumerable: true,
  get: function aLink() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "aLink_get", arguments);
  },
  set: function aLink() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "aLink_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "bgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "background", {
  configurable: true,
  enumerable: true,
  get: function background() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "background_get", arguments);
  },
  set: function background() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "background_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onafterprint", {
  configurable: true,
  enumerable: true,
  get: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onafterprint_get", arguments);
  },
  set: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onafterprint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeprint_get", arguments);
  },
  set: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeprint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeunload_get", arguments);
  },
  set: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeunload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onhashchange", {
  configurable: true,
  enumerable: true,
  get: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onhashchange_get", arguments);
  },
  set: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onhashchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onlanguagechange_get", arguments);
  },
  set: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onlanguagechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessageerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onoffline", {
  configurable: true,
  enumerable: true,
  get: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onoffline_get", arguments);
  },
  set: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onoffline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "ononline", {
  configurable: true,
  enumerable: true,
  get: function ononline() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "ononline_get", arguments);
  },
  set: function ononline() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "ononline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpagehide", {
  configurable: true,
  enumerable: true,
  get: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpagehide_get", arguments);
  },
  set: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpagehide_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpageshow", {
  configurable: true,
  enumerable: true,
  get: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpageshow_get", arguments);
  },
  set: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpageshow_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpopstate", {
  configurable: true,
  enumerable: true,
  get: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpopstate_get", arguments);
  },
  set: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpopstate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onrejectionhandled_get", arguments);
  },
  set: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onrejectionhandled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onstorage", {
  configurable: true,
  enumerable: true,
  get: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onstorage_get", arguments);
  },
  set: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onstorage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunhandledrejection_get", arguments);
  },
  set: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunhandledrejection_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunload", {
  configurable: true,
  enumerable: true,
  get: function onunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunload_get", arguments);
  },
  set: function onunload() {
    return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunload_set", arguments);
  }
});