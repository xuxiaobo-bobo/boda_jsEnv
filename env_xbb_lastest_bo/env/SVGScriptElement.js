// SVGScriptElement对象

SVGScriptElement = function SVGScriptElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGScriptElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGScriptElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGScriptElement, "SVGScriptElement");
SVGScriptElement.prototype.__proto__ = SVGElement.prototype;
SVGScriptElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGScriptElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGScriptElement.prototype, "SVGScriptElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGScriptElement.prototype, "SVGScriptElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGScriptElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGScriptElement.prototype, "SVGScriptElement", "href_get", arguments);
  },
  set: undefined
});