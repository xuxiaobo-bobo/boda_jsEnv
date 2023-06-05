// HTMLLinkElement对象

bodavm.memory.globalobj['HTMLLinkElement'] = function HTMLLinkElement() {
  console.log_copy('HTMLLinkElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLLinkElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLLinkElement'], "HTMLLinkElement");
bodavm.memory.globalobj['HTMLLinkElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLLinkElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "href_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "crossOrigin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "rel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "relList_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "hreflang", {
  configurable: true,
  enumerable: true,
  get: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "hreflang_get", arguments);
  },
  set: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "hreflang_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "as", {
  configurable: true,
  enumerable: true,
  get: function as() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "as_get", arguments);
  },
  set: function as() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "as_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "referrerPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "sizes_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "imageSrcset", {
  configurable: true,
  enumerable: true,
  get: function imageSrcset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "imageSrcset_get", arguments);
  },
  set: function imageSrcset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "imageSrcset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "imageSizes", {
  configurable: true,
  enumerable: true,
  get: function imageSizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "imageSizes_get", arguments);
  },
  set: function imageSizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "imageSizes_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "charset_get", arguments);
  },
  set: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "charset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "rev", {
  configurable: true,
  enumerable: true,
  get: function rev() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "rev_get", arguments);
  },
  set: function rev() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "rev_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "target_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "sheet_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "integrity", {
  configurable: true,
  enumerable: true,
  get: function integrity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "integrity_get", arguments);
  },
  set: function integrity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "integrity_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "fetchPriority_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLinkElement', "blocking", {
  configurable: true,
  enumerable: true,
  get: function blocking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "blocking_get", arguments);
  },
  set: function blocking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLinkElement'].prototype, "HTMLLinkElement", "blocking_set", arguments);
  }
}, 'prototype');