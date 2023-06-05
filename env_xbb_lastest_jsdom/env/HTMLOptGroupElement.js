// HTMLOptGroupElement对象

bodavm.memory.globalobj['HTMLOptGroupElement'] = function HTMLOptGroupElement() {
  console.log_copy('HTMLOptGroupElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLOptGroupElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLOptGroupElement'], "HTMLOptGroupElement");
bodavm.memory.globalobj['HTMLOptGroupElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLOptGroupElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLOptGroupElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptGroupElement'].prototype, "HTMLOptGroupElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptGroupElement'].prototype, "HTMLOptGroupElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptGroupElement', "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptGroupElement'].prototype, "HTMLOptGroupElement", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptGroupElement'].prototype, "HTMLOptGroupElement", "label_set", arguments);
  }
}, 'prototype');