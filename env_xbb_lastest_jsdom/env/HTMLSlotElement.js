// HTMLSlotElement对象

bodavm.memory.globalobj['HTMLSlotElement'] = function HTMLSlotElement() {
  console.log_copy('HTMLSlotElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLSlotElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLSlotElement'], "HTMLSlotElement");
bodavm.memory.globalobj['HTMLSlotElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLSlotElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLSlotElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSlotElement'].prototype, "HTMLSlotElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSlotElement'].prototype, "HTMLSlotElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSlotElement', "assign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function assign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSlotElement'].prototype, "HTMLSlotElement", "assign", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSlotElement', "assignedElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function assignedElements() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSlotElement'].prototype, "HTMLSlotElement", "assignedElements", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSlotElement', "assignedNodes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function assignedNodes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSlotElement'].prototype, "HTMLSlotElement", "assignedNodes", arguments);
  }
}, 'prototype');