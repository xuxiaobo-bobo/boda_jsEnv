// HTMLQuoteElement对象

bodavm.memory.globalobj['HTMLQuoteElement'] = function HTMLQuoteElement() {
  console.log_copy('HTMLQuoteElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLQuoteElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLQuoteElement'], "HTMLQuoteElement");
bodavm.memory.globalobj['HTMLQuoteElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLQuoteElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLQuoteElement', "cite", {
  configurable: true,
  enumerable: true,
  get: function cite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLQuoteElement'].prototype, "HTMLQuoteElement", "cite_get", arguments);
  },
  set: function cite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLQuoteElement'].prototype, "HTMLQuoteElement", "cite_set", arguments);
  }
}, 'prototype');