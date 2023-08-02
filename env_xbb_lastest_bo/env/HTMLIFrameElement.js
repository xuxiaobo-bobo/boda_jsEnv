// HTMLIFrameElement对象

HTMLIFrameElement = function HTMLIFrameElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLIFrameElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLIFrameElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLIFrameElement, "HTMLIFrameElement");
HTMLIFrameElement.prototype.__proto__ = HTMLElement.prototype;
HTMLIFrameElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "srcdoc", {
  configurable: true,
  enumerable: true,
  get: function srcdoc() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "srcdoc_get", arguments);
  },
  set: function srcdoc() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "srcdoc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "sandbox", {
  configurable: true,
  enumerable: true,
  get: function sandbox() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "sandbox_get", arguments);
  },
  set: function sandbox() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "sandbox_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allowFullscreen", {
  configurable: true,
  enumerable: true,
  get: function allowFullscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowFullscreen_get", arguments);
  },
  set: function allowFullscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowFullscreen_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "contentDocument", {
  configurable: true,
  enumerable: true,
  get: function contentDocument() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "contentDocument_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
  configurable: true,
  enumerable: true,
  get: function contentWindow() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "contentWindow_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "csp", {
  configurable: true,
  enumerable: true,
  get: function csp() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "csp_get", arguments);
  },
  set: function csp() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "csp_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allow", {
  configurable: true,
  enumerable: true,
  get: function allow() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allow_get", arguments);
  },
  set: function allow() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allow_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "featurePolicy", {
  configurable: true,
  enumerable: true,
  get: function featurePolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "featurePolicy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "scrolling", {
  configurable: true,
  enumerable: true,
  get: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "scrolling_get", arguments);
  },
  set: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "scrolling_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "frameBorder", {
  configurable: true,
  enumerable: true,
  get: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "frameBorder_get", arguments);
  },
  set: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "frameBorder_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "longDesc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "marginHeight", {
  configurable: true,
  enumerable: true,
  get: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginHeight_get", arguments);
  },
  set: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginHeight_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "marginWidth", {
  configurable: true,
  enumerable: true,
  get: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginWidth_get", arguments);
  },
  set: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginWidth_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSVGDocument() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "getSVGDocument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "loading", {
  configurable: true,
  enumerable: true,
  get: function loading() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "loading_get", arguments);
  },
  set: function loading() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "loading_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allowPaymentRequest", {
  configurable: true,
  enumerable: true,
  get: function allowPaymentRequest() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowPaymentRequest_get", arguments);
  },
  set: function allowPaymentRequest() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowPaymentRequest_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "credentialless", {
  configurable: true,
  enumerable: true,
  get: function credentialless() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "credentialless_get", arguments);
  },
  set: function credentialless() {
    return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "credentialless_set", arguments);
  }
});