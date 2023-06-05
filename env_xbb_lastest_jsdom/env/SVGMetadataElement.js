// SVGMetadataElement对象

bodavm.memory.globalobj['SVGMetadataElement'] = function SVGMetadataElement() {
  console.log_copy('SVGMetadataElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGMetadataElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGMetadataElement'], "SVGMetadataElement");
bodavm.memory.globalobj['SVGMetadataElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGMetadataElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];