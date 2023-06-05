// HTMLFrameElement对象

bodavm.memory.globalobj['HTMLFrameElement'] = function HTMLFrameElement() {
  console.log_copy('HTMLFrameElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLFrameElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLFrameElement'], "HTMLFrameElement");
bodavm.memory.globalobj['HTMLFrameElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLFrameElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "scrolling", {
  configurable: true,
  enumerable: true,
  get: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "scrolling_get", arguments);
  },
  set: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "scrolling_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "frameBorder", {
  configurable: true,
  enumerable: true,
  get: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "frameBorder_get", arguments);
  },
  set: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "frameBorder_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "longDesc_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "noResize", {
  configurable: true,
  enumerable: true,
  get: function noResize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "noResize_get", arguments);
  },
  set: function noResize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "noResize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "contentDocument", {
  configurable: true,
  enumerable: true,
  get: function contentDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "contentDocument_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "contentWindow", {
  configurable: true,
  enumerable: true,
  get: function contentWindow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "contentWindow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "marginHeight", {
  configurable: true,
  enumerable: true,
  get: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "marginHeight_get", arguments);
  },
  set: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "marginHeight_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameElement', "marginWidth", {
  configurable: true,
  enumerable: true,
  get: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "marginWidth_get", arguments);
  },
  set: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameElement'].prototype, "HTMLFrameElement", "marginWidth_set", arguments);
  }
}, 'prototype');