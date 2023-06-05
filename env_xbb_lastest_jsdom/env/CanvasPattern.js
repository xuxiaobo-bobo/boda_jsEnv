// CanvasPattern对象

bodavm.memory.globalobj['CanvasPattern'] = function CanvasPattern() {
  console.log_copy('CanvasPattern 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CanvasPattern)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CanvasPattern'], "CanvasPattern");
bodavm.toolsFunc.defineProperty('CanvasPattern', "setTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CanvasPattern'].prototype, "CanvasPattern", "setTransform", arguments);
  }
}, 'prototype');