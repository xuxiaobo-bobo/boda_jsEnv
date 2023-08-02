// SVGTitleElement对象

SVGTitleElement = function SVGTitleElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTitleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTitleElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTitleElement, "SVGTitleElement");
SVGTitleElement.prototype.__proto__ = SVGElement.prototype;
SVGTitleElement.__proto__ = SVGElement;