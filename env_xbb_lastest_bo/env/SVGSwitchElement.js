// SVGSwitchElement对象

SVGSwitchElement = function SVGSwitchElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGSwitchElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGSwitchElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGSwitchElement, "SVGSwitchElement");
SVGSwitchElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGSwitchElement.__proto__ = SVGGraphicsElement;