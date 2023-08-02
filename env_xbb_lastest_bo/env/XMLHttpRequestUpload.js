// XMLHttpRequestUpload对象

XMLHttpRequestUpload = function XMLHttpRequestUpload() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XMLHttpRequestUpload)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XMLHttpRequestUpload 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XMLHttpRequestUpload, "XMLHttpRequestUpload");
XMLHttpRequestUpload.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;
XMLHttpRequestUpload.__proto__ = XMLHttpRequestEventTarget;