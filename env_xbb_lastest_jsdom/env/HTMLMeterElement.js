// HTMLMeterElement对象

bodavm.memory.globalobj['HTMLMeterElement'] = function HTMLMeterElement() {
  console.log_copy('HTMLMeterElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLMeterElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLMeterElement'], "HTMLMeterElement");
bodavm.memory.globalobj['HTMLMeterElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLMeterElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "min", {
  configurable: true,
  enumerable: true,
  get: function min() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "min_get", arguments);
  },
  set: function min() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "min_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "max", {
  configurable: true,
  enumerable: true,
  get: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "max_get", arguments);
  },
  set: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "max_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "low", {
  configurable: true,
  enumerable: true,
  get: function low() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "low_get", arguments);
  },
  set: function low() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "low_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "high", {
  configurable: true,
  enumerable: true,
  get: function high() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "high_get", arguments);
  },
  set: function high() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "high_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "optimum", {
  configurable: true,
  enumerable: true,
  get: function optimum() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "optimum_get", arguments);
  },
  set: function optimum() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "optimum_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMeterElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMeterElement'].prototype, "HTMLMeterElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');