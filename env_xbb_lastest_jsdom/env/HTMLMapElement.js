// HTMLMapElement对象

bodavm.memory.globalobj['HTMLMapElement'] = function HTMLMapElement() {
  console.log_copy('HTMLMapElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLMapElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLMapElement'], "HTMLMapElement");
bodavm.memory.globalobj['HTMLMapElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLMapElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLMapElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMapElement'].prototype, "HTMLMapElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMapElement'].prototype, "HTMLMapElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMapElement', "areas", {
  configurable: true,
  enumerable: true,
  get: function areas() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMapElement'].prototype, "HTMLMapElement", "areas_get", arguments);
  },
  set: undefined
}, 'prototype');