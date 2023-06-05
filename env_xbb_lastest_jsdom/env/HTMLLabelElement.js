// HTMLLabelElement对象

bodavm.memory.globalobj['HTMLLabelElement'] = function HTMLLabelElement() {
  console.log_copy('HTMLLabelElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLLabelElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLLabelElement'], "HTMLLabelElement");
bodavm.memory.globalobj['HTMLLabelElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLLabelElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLLabelElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLabelElement'].prototype, "HTMLLabelElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLabelElement', "htmlFor", {
  configurable: true,
  enumerable: true,
  get: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLabelElement'].prototype, "HTMLLabelElement", "htmlFor_get", arguments);
  },
  set: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLabelElement'].prototype, "HTMLLabelElement", "htmlFor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLLabelElement', "control", {
  configurable: true,
  enumerable: true,
  get: function control() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLLabelElement'].prototype, "HTMLLabelElement", "control_get", arguments);
  },
  set: undefined
}, 'prototype');