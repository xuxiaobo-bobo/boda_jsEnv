// SVGMPathElement对象

bodavm.memory.globalobj['SVGMPathElement'] = function SVGMPathElement() {
  console.log_copy('SVGMPathElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGMPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGMPathElement'], "SVGMPathElement");
bodavm.memory.globalobj['SVGMPathElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGMPathElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGMPathElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMPathElement'].prototype, "SVGMPathElement", "href_get", arguments);
  },
  set: undefined
}, 'prototype');