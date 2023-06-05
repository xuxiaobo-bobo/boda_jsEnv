// XMLHttpRequestUpload对象

bodavm.memory.globalobj['XMLHttpRequestUpload'] = function XMLHttpRequestUpload() {
  console.log_copy('XMLHttpRequestUpload 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XMLHttpRequestUpload)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XMLHttpRequestUpload'], "XMLHttpRequestUpload");
bodavm.memory.globalobj['XMLHttpRequestUpload'].prototype.__proto__ = bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype;
bodavm.memory.globalobj['XMLHttpRequestUpload'].__proto__ = bodavm.memory.globalobj['XMLHttpRequestEventTarget'];