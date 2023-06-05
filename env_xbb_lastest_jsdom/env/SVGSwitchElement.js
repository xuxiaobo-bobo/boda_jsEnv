// SVGSwitchElement对象

bodavm.memory.globalobj['SVGSwitchElement'] = function SVGSwitchElement() {
  console.log_copy('SVGSwitchElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGSwitchElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGSwitchElement'], "SVGSwitchElement");
bodavm.memory.globalobj['SVGSwitchElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGSwitchElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];