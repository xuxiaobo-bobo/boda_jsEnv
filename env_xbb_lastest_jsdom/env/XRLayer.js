// XRLayer对象

bodavm.memory.globalobj['XRLayer'] = function XRLayer() {
  console.log_copy('XRLayer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRLayer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRLayer'], "XRLayer");
bodavm.memory.globalobj['XRLayer'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['XRLayer'].__proto__ = bodavm.memory.globalobj['EventTarget'];