// XMLDocument对象

XMLDocument = function XMLDocument() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XMLDocument)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XMLDocument 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XMLDocument, "XMLDocument");
XMLDocument.prototype.__proto__ = Document.prototype;
XMLDocument.__proto__ = Document;