// SVGNumber对象

SVGNumber = function SVGNumber() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGNumber)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGNumber 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGNumber, "SVGNumber");
bodavm.toolsFunc.defineProperty(SVGNumber.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, SVGNumber.prototype, "SVGNumber", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, SVGNumber.prototype, "SVGNumber", "value_set", arguments);
  }
});