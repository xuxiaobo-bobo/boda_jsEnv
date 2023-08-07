// DOMMatrix对象

DOMMatrix = function DOMMatrix() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMMatrix 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMMatrix, "DOMMatrix");
DOMMatrix.prototype.__proto__ = DOMMatrixReadOnly.prototype;
DOMMatrix.__proto__ = DOMMatrixReadOnly;
bodavm.toolsFunc.defineProperty(DOMMatrix, "fromFloat32Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromFloat32Array() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix, "DOMMatrix", "fromFloat32Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix, "fromFloat64Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromFloat64Array() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix, "DOMMatrix", "fromFloat64Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix, "fromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromMatrix() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix, "DOMMatrix", "fromMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "a", {
  configurable: true,
  enumerable: true,
  get: function a() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "a_get", arguments);
  },
  set: function a() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "a_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "b", {
  configurable: true,
  enumerable: true,
  get: function b() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "b_get", arguments);
  },
  set: function b() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "b_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "c", {
  configurable: true,
  enumerable: true,
  get: function c() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "c_get", arguments);
  },
  set: function c() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "c_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "d", {
  configurable: true,
  enumerable: true,
  get: function d() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "d_get", arguments);
  },
  set: function d() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "d_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "e", {
  configurable: true,
  enumerable: true,
  get: function e() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "e_get", arguments);
  },
  set: function e() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "e_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "f", {
  configurable: true,
  enumerable: true,
  get: function f() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "f_get", arguments);
  },
  set: function f() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "f_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m11", {
  configurable: true,
  enumerable: true,
  get: function m11() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m11_get", arguments);
  },
  set: function m11() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m11_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m12", {
  configurable: true,
  enumerable: true,
  get: function m12() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m12_get", arguments);
  },
  set: function m12() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m12_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m13", {
  configurable: true,
  enumerable: true,
  get: function m13() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m13_get", arguments);
  },
  set: function m13() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m13_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m14", {
  configurable: true,
  enumerable: true,
  get: function m14() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m14_get", arguments);
  },
  set: function m14() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m14_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m21", {
  configurable: true,
  enumerable: true,
  get: function m21() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m21_get", arguments);
  },
  set: function m21() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m21_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m22", {
  configurable: true,
  enumerable: true,
  get: function m22() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m22_get", arguments);
  },
  set: function m22() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m22_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m23", {
  configurable: true,
  enumerable: true,
  get: function m23() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m23_get", arguments);
  },
  set: function m23() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m23_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m24", {
  configurable: true,
  enumerable: true,
  get: function m24() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m24_get", arguments);
  },
  set: function m24() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m24_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m31", {
  configurable: true,
  enumerable: true,
  get: function m31() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m31_get", arguments);
  },
  set: function m31() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m31_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m32", {
  configurable: true,
  enumerable: true,
  get: function m32() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m32_get", arguments);
  },
  set: function m32() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m32_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m33", {
  configurable: true,
  enumerable: true,
  get: function m33() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m33_get", arguments);
  },
  set: function m33() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m33_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m34", {
  configurable: true,
  enumerable: true,
  get: function m34() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m34_get", arguments);
  },
  set: function m34() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m34_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m41", {
  configurable: true,
  enumerable: true,
  get: function m41() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m41_get", arguments);
  },
  set: function m41() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m41_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m42", {
  configurable: true,
  enumerable: true,
  get: function m42() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m42_get", arguments);
  },
  set: function m42() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m42_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m43", {
  configurable: true,
  enumerable: true,
  get: function m43() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m43_get", arguments);
  },
  set: function m43() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m43_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "m44", {
  configurable: true,
  enumerable: true,
  get: function m44() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m44_get", arguments);
  },
  set: function m44() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "m44_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "invertSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function invertSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "invertSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "multiplySelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function multiplySelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "multiplySelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "preMultiplySelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function preMultiplySelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "preMultiplySelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "rotateAxisAngleSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateAxisAngleSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "rotateAxisAngleSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "rotateFromVectorSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateFromVectorSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "rotateFromVectorSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "rotateSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "rotateSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "scale3dSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale3dSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "scale3dSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "scaleSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scaleSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "scaleSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "skewXSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewXSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "skewXSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "skewYSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewYSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "skewYSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "translateSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translateSelf() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "translateSelf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrix.prototype, "setMatrixValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMatrixValue() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrix.prototype, "DOMMatrix", "setMatrixValue", arguments);
  }
});