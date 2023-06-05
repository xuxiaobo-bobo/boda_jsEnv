// CanvasGradient对象

bodavm.memory.globalobj['CanvasGradient'] = function CanvasGradient() {
  console.log_copy('CanvasGradient 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CanvasGradient)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CanvasGradient'], "CanvasGradient");
bodavm.toolsFunc.defineProperty('CanvasGradient', "addColorStop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addColorStop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CanvasGradient'].prototype, "CanvasGradient", "addColorStop", arguments);
  }
}, 'prototype');