// SVGSymbolElement对象

SVGSymbolElement = function SVGSymbolElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGSymbolElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGSymbolElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGSymbolElement, "SVGSymbolElement");
SVGSymbolElement.prototype.__proto__ = SVGElement.prototype;
SVGSymbolElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGSymbolElement.prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, SVGSymbolElement.prototype, "SVGSymbolElement", "viewBox_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSymbolElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGSymbolElement.prototype, "SVGSymbolElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});