// SVGDefsElement对象

bodavm.memory.globalobj['SVGDefsElement'] = function SVGDefsElement() {
  console.log_copy('SVGDefsElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGDefsElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGDefsElement'], "SVGDefsElement");
bodavm.memory.globalobj['SVGDefsElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGDefsElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];