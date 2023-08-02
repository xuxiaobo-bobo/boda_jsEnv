// HTMLDocument对象

HTMLDocument = function HTMLDocument() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDocument)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDocument 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDocument, "HTMLDocument");
HTMLDocument.prototype.__proto__ = Document.prototype;
HTMLDocument.__proto__ = Document;