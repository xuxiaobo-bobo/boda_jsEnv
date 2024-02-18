// SVGMatrix对象

bodaEnv.memory.globlProtoObj["SVGMatrix"] = function SVGMatrix() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGMatrix 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGMatrix"], "SVGMatrix");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "a", {
  configurable: true,
  enumerable: true,
  get: {
    a() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "a_get", arguments);
    }
  }.a,
  set: {
    a() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "a_set", arguments);
    }
  }.a
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "b", {
  configurable: true,
  enumerable: true,
  get: {
    b() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "b_get", arguments);
    }
  }.b,
  set: {
    b() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "b_set", arguments);
    }
  }.b
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "c", {
  configurable: true,
  enumerable: true,
  get: {
    c() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "c_get", arguments);
    }
  }.c,
  set: {
    c() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "c_set", arguments);
    }
  }.c
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "d", {
  configurable: true,
  enumerable: true,
  get: {
    d() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "d_get", arguments);
    }
  }.d,
  set: {
    d() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "d_set", arguments);
    }
  }.d
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "e", {
  configurable: true,
  enumerable: true,
  get: {
    e() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "e_get", arguments);
    }
  }.e,
  set: {
    e() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "e_set", arguments);
    }
  }.e
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "f", {
  configurable: true,
  enumerable: true,
  get: {
    f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "f_get", arguments);
    }
  }.f,
  set: {
    f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "f_set", arguments);
    }
  }.f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "flipX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flipX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "flipX", arguments);
    }
  }.flipX
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "flipY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flipY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "flipY", arguments);
    }
  }.flipY
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "inverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    inverse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "inverse", arguments);
    }
  }.inverse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "multiply", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    multiply() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "multiply", arguments);
    }
  }.multiply
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rotate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "rotate", arguments);
    }
  }.rotate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "rotateFromVector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rotateFromVector() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "rotateFromVector", arguments);
    }
  }.rotateFromVector
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "scale", arguments);
    }
  }.scale
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "scaleNonUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scaleNonUniform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "scaleNonUniform", arguments);
    }
  }.scaleNonUniform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "skewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    skewX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "skewX", arguments);
    }
  }.skewX
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "skewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    skewY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "skewY", arguments);
    }
  }.skewY
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    translate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMatrix"].prototype, "SVGMatrix", "translate", arguments);
    }
  }.translate
});