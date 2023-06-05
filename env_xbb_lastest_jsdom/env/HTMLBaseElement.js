// HTMLBaseElement对象

bodavm.memory.globalobj['HTMLBaseElement'] = function HTMLBaseElement() {
  console.log_copy('HTMLBaseElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLBaseElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLBaseElement'], "HTMLBaseElement");
bodavm.memory.globalobj['HTMLBaseElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLBaseElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLBaseElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBaseElement'].prototype, "HTMLBaseElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBaseElement'].prototype, "HTMLBaseElement", "href_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBaseElement', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBaseElement'].prototype, "HTMLBaseElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBaseElement'].prototype, "HTMLBaseElement", "target_set", arguments);
  }
}, 'prototype');