// SVGFEMergeNodeElement对象

bodavm.memory.globalobj['SVGFEMergeNodeElement'] = function SVGFEMergeNodeElement() {
  console.log_copy('SVGFEMergeNodeElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEMergeNodeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEMergeNodeElement'], "SVGFEMergeNodeElement");
bodavm.memory.globalobj['SVGFEMergeNodeElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEMergeNodeElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEMergeNodeElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMergeNodeElement'].prototype, "SVGFEMergeNodeElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');