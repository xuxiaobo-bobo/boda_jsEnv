// HTMLTableColElement对象

bodavm.memory.globalobj['HTMLTableColElement'] = function HTMLTableColElement() {
  console.log_copy('HTMLTableColElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTableColElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTableColElement'], "HTMLTableColElement");
bodavm.memory.globalobj['HTMLTableColElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTableColElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTableColElement', "span", {
  configurable: true,
  enumerable: true,
  get: function span() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "span_get", arguments);
  },
  set: function span() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "span_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableColElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableColElement', "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "ch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableColElement', "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "chOff_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableColElement', "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "vAlign_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableColElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableColElement'].prototype, "HTMLTableColElement", "width_set", arguments);
  }
}, 'prototype');