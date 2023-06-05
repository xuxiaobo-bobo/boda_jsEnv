// HTMLProgressElement对象

bodavm.memory.globalobj['HTMLProgressElement'] = function HTMLProgressElement() {
  console.log_copy('HTMLProgressElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLProgressElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLProgressElement'], "HTMLProgressElement");
bodavm.memory.globalobj['HTMLProgressElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLProgressElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLProgressElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLProgressElement'].prototype, "HTMLProgressElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLProgressElement'].prototype, "HTMLProgressElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLProgressElement', "max", {
  configurable: true,
  enumerable: true,
  get: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLProgressElement'].prototype, "HTMLProgressElement", "max_get", arguments);
  },
  set: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLProgressElement'].prototype, "HTMLProgressElement", "max_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLProgressElement', "position", {
  configurable: true,
  enumerable: true,
  get: function position() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLProgressElement'].prototype, "HTMLProgressElement", "position_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLProgressElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLProgressElement'].prototype, "HTMLProgressElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');