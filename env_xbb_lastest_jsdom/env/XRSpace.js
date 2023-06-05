// XRSpace对象

bodavm.memory.globalobj['XRSpace'] = function XRSpace() {
  console.log_copy('XRSpace 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRSpace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRSpace'], "XRSpace");
bodavm.memory.globalobj['XRSpace'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['XRSpace'].__proto__ = bodavm.memory.globalobj['EventTarget'];