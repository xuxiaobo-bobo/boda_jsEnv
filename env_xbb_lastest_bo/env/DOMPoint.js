// DOMPoint对象

DOMPoint = function DOMPoint() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMPoint 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMPoint, "DOMPoint");
DOMPoint.prototype.__proto__ = DOMPointReadOnly.prototype;
DOMPoint.__proto__ = DOMPointReadOnly;
bodavm.toolsFunc.defineProperty(DOMPoint, "fromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromPoint() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint, "DOMPoint", "fromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMPoint.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMPoint.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "y_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMPoint.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "z_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMPoint.prototype, "w", {
  configurable: true,
  enumerable: true,
  get: function w() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "w_get", arguments);
  },
  set: function w() {
    return bodavm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "w_set", arguments);
  }
});