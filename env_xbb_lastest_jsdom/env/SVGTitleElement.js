// SVGTitleElement对象

bodavm.memory.globalobj['SVGTitleElement'] = function SVGTitleElement() {
  console.log_copy('SVGTitleElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTitleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTitleElement'], "SVGTitleElement");
bodavm.memory.globalobj['SVGTitleElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGTitleElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];