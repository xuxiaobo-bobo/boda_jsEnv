// HTMLTableRowElement对象

bodavm.memory.globalobj['HTMLTableRowElement'] = function HTMLTableRowElement() {
  console.log_copy('HTMLTableRowElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTableRowElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTableRowElement'], "HTMLTableRowElement");
bodavm.memory.globalobj['HTMLTableRowElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTableRowElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "rowIndex", {
  configurable: true,
  enumerable: true,
  get: function rowIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "rowIndex_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "sectionRowIndex", {
  configurable: true,
  enumerable: true,
  get: function sectionRowIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "sectionRowIndex_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "cells", {
  configurable: true,
  enumerable: true,
  get: function cells() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "cells_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "ch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "chOff_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "vAlign_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "bgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "deleteCell", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteCell() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "deleteCell", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableRowElement', "insertCell", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertCell() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableRowElement'].prototype, "HTMLTableRowElement", "insertCell", arguments);
  }
}, 'prototype');