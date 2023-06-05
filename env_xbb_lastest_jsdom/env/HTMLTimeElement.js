// HTMLTimeElement对象

bodavm.memory.globalobj['HTMLTimeElement'] = function HTMLTimeElement() {
  console.log_copy('HTMLTimeElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTimeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTimeElement'], "HTMLTimeElement");
bodavm.memory.globalobj['HTMLTimeElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTimeElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTimeElement', "dateTime", {
  configurable: true,
  enumerable: true,
  get: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTimeElement'].prototype, "HTMLTimeElement", "dateTime_get", arguments);
  },
  set: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTimeElement'].prototype, "HTMLTimeElement", "dateTime_set", arguments);
  }
}, 'prototype');