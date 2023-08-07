// DOMPointReadOnly对象

DOMPointReadOnly = function DOMPointReadOnly() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMPointReadOnly 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMPointReadOnly, "DOMPointReadOnly");
bodavm.toolsFunc.defineProperty(DOMPointReadOnly, "fromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromPoint() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly, "DOMPointReadOnly", "fromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMPointReadOnly.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly.prototype, "DOMPointReadOnly", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMPointReadOnly.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly.prototype, "DOMPointReadOnly", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMPointReadOnly.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly.prototype, "DOMPointReadOnly", "z_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMPointReadOnly.prototype, "w", {
  configurable: true,
  enumerable: true,
  get: function w() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly.prototype, "DOMPointReadOnly", "w_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMPointReadOnly.prototype, "matrixTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matrixTransform() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly.prototype, "DOMPointReadOnly", "matrixTransform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMPointReadOnly.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, DOMPointReadOnly.prototype, "DOMPointReadOnly", "toJSON", arguments);
  }
});