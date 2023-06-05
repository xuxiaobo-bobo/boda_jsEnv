// SVGPathElement对象

bodavm.memory.globalobj['SVGPathElement'] = function SVGPathElement() {
  console.log_copy('SVGPathElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPathElement'], "SVGPathElement");
bodavm.memory.globalobj['SVGPathElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGPathElement'].__proto__ = bodavm.memory.globalobj['SVGGeometryElement'];