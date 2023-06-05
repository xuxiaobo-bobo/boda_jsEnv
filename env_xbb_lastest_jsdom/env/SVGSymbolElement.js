// SVGSymbolElement对象

bodavm.memory.globalobj['SVGSymbolElement'] = function SVGSymbolElement() {
  console.log_copy('SVGSymbolElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGSymbolElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGSymbolElement'], "SVGSymbolElement");
bodavm.memory.globalobj['SVGSymbolElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGSymbolElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGSymbolElement', "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSymbolElement'].prototype, "SVGSymbolElement", "viewBox_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSymbolElement', "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSymbolElement'].prototype, "SVGSymbolElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
}, 'prototype');