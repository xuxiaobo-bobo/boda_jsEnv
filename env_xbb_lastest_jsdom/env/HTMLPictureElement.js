// HTMLPictureElement对象

bodavm.memory.globalobj['HTMLPictureElement'] = function HTMLPictureElement() {
  console.log_copy('HTMLPictureElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLPictureElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLPictureElement'], "HTMLPictureElement");
bodavm.memory.globalobj['HTMLPictureElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLPictureElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];