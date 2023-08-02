// SVGMatrix对象

SVGMatrix = function SVGMatrix() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGMatrix)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGMatrix 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGMatrix, "SVGMatrix");
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "a", {
  configurable: true,
  enumerable: true,
  get: function a() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "a_get", arguments);
  },
  set: function a() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "a_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "b", {
  configurable: true,
  enumerable: true,
  get: function b() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "b_get", arguments);
  },
  set: function b() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "b_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "c", {
  configurable: true,
  enumerable: true,
  get: function c() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "c_get", arguments);
  },
  set: function c() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "c_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "d", {
  configurable: true,
  enumerable: true,
  get: function d() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "d_get", arguments);
  },
  set: function d() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "d_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "e", {
  configurable: true,
  enumerable: true,
  get: function e() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "e_get", arguments);
  },
  set: function e() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "e_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "f", {
  configurable: true,
  enumerable: true,
  get: function f() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "f_get", arguments);
  },
  set: function f() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "f_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "flipX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipX() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "flipX", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "flipY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipY() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "flipY", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "inverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function inverse() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "inverse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "multiply", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function multiply() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "multiply", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotate() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "rotate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "rotateFromVector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateFromVector() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "rotateFromVector", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "scale", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "scaleNonUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scaleNonUniform() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "scaleNonUniform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "skewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewX() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "skewX", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "skewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewY() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "skewY", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMatrix.prototype, "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translate() {
    return bodavm.toolsFunc.dispatch(this, SVGMatrix.prototype, "SVGMatrix", "translate", arguments);
  }
});