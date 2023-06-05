// HTMLTableSectionElement对象

bodavm.memory.globalobj['HTMLTableSectionElement'] = function HTMLTableSectionElement() {
  console.log_copy('HTMLTableSectionElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTableSectionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTableSectionElement'], "HTMLTableSectionElement");
bodavm.memory.globalobj['HTMLTableSectionElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTableSectionElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "rows_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "ch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "chOff_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "vAlign_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "deleteRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "deleteRow", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableSectionElement', "insertRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableSectionElement'].prototype, "HTMLTableSectionElement", "insertRow", arguments);
  }
}, 'prototype');