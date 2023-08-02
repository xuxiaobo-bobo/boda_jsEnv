// DOMImplementation对象

DOMImplementation = function DOMImplementation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DOMImplementation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMImplementation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMImplementation, "DOMImplementation");
bodavm.toolsFunc.defineProperty(DOMImplementation.prototype, "createDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDocument() {
    return bodavm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "createDocument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMImplementation.prototype, "createDocumentType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDocumentType() {
    return bodavm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "createDocumentType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMImplementation.prototype, "createHTMLDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createHTMLDocument() {
    return bodavm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "createHTMLDocument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMImplementation.prototype, "hasFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasFeature() {
    return bodavm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "hasFeature", arguments);
  }
});