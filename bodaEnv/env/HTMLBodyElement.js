// HTMLBodyElement对象

bodaEnv.memory.globlProtoObj["HTMLBodyElement"] = function HTMLBodyElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLBodyElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLBodyElement"], "HTMLBodyElement");
bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLBodyElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "text", {
  configurable: true,
  enumerable: true,
  get: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "text_get", arguments);
    }
  }.text,
  set: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "text_set", arguments);
    }
  }.text
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "link", {
  configurable: true,
  enumerable: true,
  get: {
    link() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "link_get", arguments);
    }
  }.link,
  set: {
    link() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "link_set", arguments);
    }
  }.link
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "vLink", {
  configurable: true,
  enumerable: true,
  get: {
    vLink() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "vLink_get", arguments);
    }
  }.vLink,
  set: {
    vLink() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "vLink_set", arguments);
    }
  }.vLink
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "aLink", {
  configurable: true,
  enumerable: true,
  get: {
    aLink() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "aLink_get", arguments);
    }
  }.aLink,
  set: {
    aLink() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "aLink_set", arguments);
    }
  }.aLink
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "bgColor_get", arguments);
    }
  }.bgColor,
  set: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "bgColor_set", arguments);
    }
  }.bgColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "background", {
  configurable: true,
  enumerable: true,
  get: {
    background() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "background_get", arguments);
    }
  }.background,
  set: {
    background() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "background_set", arguments);
    }
  }.background
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onblur_get", arguments);
    }
  }.onblur,
  set: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onblur_set", arguments);
    }
  }.onblur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onfocus_get", arguments);
    }
  }.onfocus,
  set: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onfocus_set", arguments);
    }
  }.onfocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onload_get", arguments);
    }
  }.onload,
  set: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onresize_get", arguments);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onresize_set", arguments);
    }
  }.onresize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onscroll_get", arguments);
    }
  }.onscroll,
  set: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onscroll_set", arguments);
    }
  }.onscroll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onafterprint", {
  configurable: true,
  enumerable: true,
  get: {
    onafterprint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onafterprint_get", arguments);
    }
  }.onafterprint,
  set: {
    onafterprint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onafterprint_set", arguments);
    }
  }.onafterprint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeprint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onbeforeprint_get", arguments);
    }
  }.onbeforeprint,
  set: {
    onbeforeprint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onbeforeprint_set", arguments);
    }
  }.onbeforeprint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeunload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onbeforeunload_get", arguments);
    }
  }.onbeforeunload,
  set: {
    onbeforeunload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onbeforeunload_set", arguments);
    }
  }.onbeforeunload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onhashchange", {
  configurable: true,
  enumerable: true,
  get: {
    onhashchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onhashchange_get", arguments);
    }
  }.onhashchange,
  set: {
    onhashchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onhashchange_set", arguments);
    }
  }.onhashchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: {
    onlanguagechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onlanguagechange_get", arguments);
    }
  }.onlanguagechange,
  set: {
    onlanguagechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onlanguagechange_set", arguments);
    }
  }.onlanguagechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onmessageerror_get", arguments);
    }
  }.onmessageerror,
  set: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onmessageerror_set", arguments);
    }
  }.onmessageerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onoffline", {
  configurable: true,
  enumerable: true,
  get: {
    onoffline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onoffline_get", arguments);
    }
  }.onoffline,
  set: {
    onoffline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onoffline_set", arguments);
    }
  }.onoffline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "ononline", {
  configurable: true,
  enumerable: true,
  get: {
    ononline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "ononline_get", arguments);
    }
  }.ononline,
  set: {
    ononline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "ononline_set", arguments);
    }
  }.ononline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onpagehide", {
  configurable: true,
  enumerable: true,
  get: {
    onpagehide() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onpagehide_get", arguments);
    }
  }.onpagehide,
  set: {
    onpagehide() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onpagehide_set", arguments);
    }
  }.onpagehide
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onpageshow", {
  configurable: true,
  enumerable: true,
  get: {
    onpageshow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onpageshow_get", arguments);
    }
  }.onpageshow,
  set: {
    onpageshow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onpageshow_set", arguments);
    }
  }.onpageshow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onpopstate", {
  configurable: true,
  enumerable: true,
  get: {
    onpopstate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onpopstate_get", arguments);
    }
  }.onpopstate,
  set: {
    onpopstate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onpopstate_set", arguments);
    }
  }.onpopstate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: {
    onrejectionhandled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onrejectionhandled_get", arguments);
    }
  }.onrejectionhandled,
  set: {
    onrejectionhandled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onrejectionhandled_set", arguments);
    }
  }.onrejectionhandled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onstorage", {
  configurable: true,
  enumerable: true,
  get: {
    onstorage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onstorage_get", arguments);
    }
  }.onstorage,
  set: {
    onstorage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onstorage_set", arguments);
    }
  }.onstorage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: {
    onunhandledrejection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onunhandledrejection_get", arguments);
    }
  }.onunhandledrejection,
  set: {
    onunhandledrejection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onunhandledrejection_set", arguments);
    }
  }.onunhandledrejection
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "onunload", {
  configurable: true,
  enumerable: true,
  get: {
    onunload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onunload_get", arguments);
    }
  }.onunload,
  set: {
    onunload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBodyElement"].prototype, "HTMLBodyElement", "onunload_set", arguments);
    }
  }.onunload
});