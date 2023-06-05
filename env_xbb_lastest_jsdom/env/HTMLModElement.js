// HTMLModElement对象

bodavm.memory.globalobj['HTMLModElement'] = function HTMLModElement() {
  console.log_copy('HTMLModElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLModElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLModElement'], "HTMLModElement");
bodavm.memory.globalobj['HTMLModElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLModElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLModElement', "cite", {
  configurable: true,
  enumerable: true,
  get: function cite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLModElement'].prototype, "HTMLModElement", "cite_get", arguments);
  },
  set: function cite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLModElement'].prototype, "HTMLModElement", "cite_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLModElement', "dateTime", {
  configurable: true,
  enumerable: true,
  get: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLModElement'].prototype, "HTMLModElement", "dateTime_get", arguments);
  },
  set: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLModElement'].prototype, "HTMLModElement", "dateTime_set", arguments);
  }
}, 'prototype');